const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, '../../backups');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const date = new Date().toISOString().slice(0,10);
const fileName = `backup_${date}.sql`;

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

// Разбираем URL для pg_dump
const match = dbUrl.match(/postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
if (!match) {
  console.error('Invalid DATABASE_URL format');
  process.exit(1);
}
const [, user, password, host, port, database] = match;

const cmd = `pg_dump -U ${user} -h ${host} -p ${port} -d ${database} -F c -f ${backupDir}/${fileName}`;
exec(cmd, { env: { ...process.env, PGPASSWORD: password } }, (err, stdout, stderr) => {
  if (err) {
    console.error('Backup failed:', stderr);
  } else {
    console.log('Backup created:', fileName);
  }
});
