const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const DIR = path.join(__dirname, 'ppt-screenshots');
const BASE = 'https://taskflow-frontend-4us2.onrender.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAwMDEsImVtYWlsIjoic2luaHZpZW5fZGVtb0B0dnUuZWR1LnZuIiwibmFtZSI6IlNpbmggVmnDqm4gVHLhuqNpIE5naGnhu4dtIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3ODI3MjY3NjMsImV4cCI6MTc4MzMzMTU2M30.EtdQ4aLXWAk-DohPdEoXAxQXFAk2cKDUVDQ7X2mP8Rw';
const USER = {"id":60001,"username":"sinhvien_demo@tvu.edu.vn","name":"Sinh Viên Trải Nghiệm","email":"sinhvien_demo@tvu.edu.vn","full_name":null,"role":"user","status":"active","avatar":null};

async function main() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  // Go to deployed site, set token, then reload
  console.log('🔐 Setting auth token...');
  await page.goto(BASE);
  await page.waitForTimeout(3000);
  
  // Set auth
  await page.evaluate((data) => {
    localStorage.setItem('taskflow_token', data.token);
    localStorage.setItem('taskflow_user', JSON.stringify(data.user));
  }, { token: TOKEN, user: USER });

  // Reload to apply auth
  await page.reload();
  await page.waitForTimeout(4000);
  
  const url = page.url();
  console.log('After reload URL:', url);

  // Take screenshots
  const pages = [
    { hash: '#/', name: '01-dashboard', delay: 4000 },
    { hash: '#/tasks', name: '02-tasks', delay: 4000 },
    { hash: '#/projects', name: '03-projects', delay: 3000 },
    { hash: '#/calendar', name: '04-calendar', delay: 3000 },
    { hash: '#/pomodoro', name: '05-pomodoro', delay: 3000 },
    { hash: '#/gpa', name: '06-gpa', delay: 3000 },
    { hash: '#/okr', name: '07-okr', delay: 3000 },
    { hash: '#/notes', name: '08-notes', delay: 3000 },
    { hash: '#/reports', name: '09-reports', delay: 3000 },
    { hash: '#/profile', name: '10-profile', delay: 3000 },
  ];

  for (const p of pages) {
    console.log(`📸 ${p.name}...`);
    await page.goto(`${BASE}/${p.hash}`);
    await page.waitForTimeout(p.delay);
    await page.screenshot({ path: path.join(DIR, `${p.name}.png`) });
  }

  // Landing
  console.log('📸 landing...');
  await page.evaluate(() => localStorage.clear());
  await page.goto(BASE);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(DIR, '00-landing.png') });

  await browser.close();
  console.log('\n🎉 Done!');
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
