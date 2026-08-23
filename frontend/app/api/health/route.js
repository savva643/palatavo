import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if backend is accessible
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
    const response = await fetch(`${backendUrl}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(() => null);

    const backendStatus = response?.ok ? 'healthy' : 'unhealthy';

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        frontend: 'healthy',
        backend: backendStatus,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
      },
      { status: 500 }
    );
  }
}
