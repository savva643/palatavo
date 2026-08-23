const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';

export async function fetchAPI(endpoint, params = {}) {
  const url = new URL(`${API_URL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export async function getNews(page = 1, pageSize = 10) {
  // Support both old API (page, pageSize) and new API (params object)
  if (typeof page === 'object') {
    const params = page;
    return fetchAPI('/news-items', {
      'populate': '*',
      ...params,
      'sort[0]': 'date:desc',
    });
  }
  return fetchAPI('/news-items', {
    'populate': '*',
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'sort[0]': 'date:desc',
  });
}

export async function getNewsBySlug(slug) {
  return fetchAPI(`/news-items`, {
    'filters[slug][$eq]': slug,
    'populate': '*',
  });
}

export async function getAnnouncements(page = 1, pageSize = 10) {
  // Support both old API (page, pageSize) and new API (params object)
  if (typeof page === 'object') {
    const params = page;
    return fetchAPI('/announcement-items', {
      'populate': '*',
      ...params,
      'sort[0]': 'eventDate:asc',
    });
  }
  return fetchAPI('/announcement-items', {
    'populate': '*',
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'sort[0]': 'eventDate:asc',
  });
}

export async function getAnnouncementBySlug(slug) {
  return fetchAPI(`/announcement-items`, {
    'filters[slug][$eq]': slug,
    'populate': '*',
  });
}

export async function getDocuments(category = null, page = 1, pageSize = 10) {
  const params = {
    'populate': '*',
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'sort[0]': 'date:desc',
  };
  if (category) {
    params['filters[category][$eq]'] = category;
  }
  return fetchAPI('/document-items', params);
}

export async function getMembers() {
  return fetchAPI('/member-items', {
    'populate': '*',
    'sort[0]': 'name:asc',
  });
}

export async function getCouncil() {
  return fetchAPI('/council-items', {
    'populate': '*',
    'sort[0]': 'order:asc',
  });
}

export async function getCommissions() {
  return fetchAPI('/commission-items', {
    'populate': '*',
    'sort[0]': 'order:asc',
  });
}

export async function getProjects(status = null) {
  const params = {
    'populate': '*',
    'sort[0]': 'startDate:desc',
  };
  if (status) {
    params['filters[status][$eq]'] = status;
  }
  return fetchAPI('/project-items', params);
}

export async function getProjectBySlug(slug) {
  return fetchAPI(`/project-items`, {
    'filters[slug][$eq]': slug,
    'populate': '*',
  });
}

export async function getMunicipalChambers() {
  return fetchAPI('/municipal-chamber-items', {
    'populate': '*',
    'sort[0]': 'district:asc',
  });
}

export async function getContacts() {
  return fetchAPI('/contact-items', {
    'populate': '*',
  });
}
