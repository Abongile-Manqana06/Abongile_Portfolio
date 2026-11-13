#!/usr/bin/env node
/* Builds the 12 project pages, the CV page and the 404 page from
   js/projects-data.js and js/site-config.js.
   Run from the portfolio folder:   node tools/build.js
   You only need this when you change project text or your details. */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const SITE = require(path.join(root, 'js/site-config.js'));
const { PROJECTS, coverSVG } = require(path.join(root, 'js/projects-data.js'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const exists = (p) => fs.existsSync(path.join(root, p));

function head(title, desc, base) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="theme-color" content="#0c1a2e">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${base}css/styles.css">
</head>`;
}

function header(base, current) {
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="${base}index.html" aria-label="${esc(SITE.name)}, home"><span class="brand-mark" aria-hidden="true"></span>${esc(SITE.name)}</a>
    <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span></span></button>
    <nav class="nav" id="nav" aria-label="Main">
      <a href="${base}index.html#work"${current === 'work' ? ' aria-current="page"' : ''}>Work</a>
      <a href="${base}index.html#about">About</a>
      <a href="${base}index.html#how">How I work</a>
      <a href="${base}index.html#skills">Skills</a>
      <a href="${base}index.html#drew">Drew Technologies</a>
      <a href="${base}cv.html"${current === 'cv' ? ' aria-current="page"' : ''}>CV</a>
      <a class="nav-cta" href="${base}index.html#contact">Get in touch</a>
    </nav>
  </div>
</header>`;
}

function footer(base) {
  return `<footer class="site-footer">
  <div class="wrap foot">
    <span>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}. Built by hand with HTML, CSS and JavaScript.</span>
    <a href="${base}index.html#work">Back to all projects</a>
  </div>
</footer>
<script src="${base}js/main.js"></script>`;
}

/* ---------- Project pages ---------- */
function shotsFor(slug) {
  const dir = path.join(root, 'assets/img/projects');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.startsWith(slug + '-') && /\.(png|jpe?g|webp)$/i.test(f)).sort();
}

function projectPage(p, i) {
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const shots = shotsFor(p.slug);
  const list = (a) => `<ul class="p-list">${a.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  return `${head(p.title + ' | ' + SITE.name, p.tagline, '../')}
<body>
${header('../', 'work')}
<main id="main">
  <section class="p-hero">
    <div class="wrap">
      <a class="crumb" href="../index.html#work">&#8592; All projects</a>
      <h1>${esc(p.title)}</h1>
      <p class="lede">${esc(p.tagline)}</p>
      <div class="p-cover">${coverSVG(p)}</div>
    </div>
  </section>

  <section class="section section--light">
    <div class="wrap p-body">
      <div>
        <h2>Overview</h2>
        ${p.overview.map((t) => `<p>${esc(t)}</p>`).join('')}
        <h2>What it does</h2>
        ${list(p.features)}
        <h2>How I approached it</h2>
        ${list(p.approach)}
        <h2>What I learned</h2>
        ${list(p.learned)}
        ${shots.length ? `<h2>Screenshots</h2><div class="shots">${shots.map((f) => `<figure><img src="../assets/img/projects/${f}" alt="${esc(p.title)} screenshot" loading="lazy"></figure>`).join('')}</div>` : ''}
      </div>
      <aside class="aside" aria-label="Project facts">
        <dl>
          <div><dt>Type</dt><dd>${esc(p.type)}</dd></div>
          <div><dt>Status</dt><dd>${esc(p.status)}</dd></div>
          <div><dt>Area</dt><dd>${p.cat.map(esc).join(', ')}</dd></div>
          <div><dt>Tools and skills</dt><dd><ul class="stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></dd></div>
        </dl>
      </aside>
    </div>
  </section>

  <section class="section">
    <div class="wrap pager">
      <a href="${prev.slug}.html" rel="prev"><small>Previous project</small><strong>${esc(prev.title)}</strong></a>
      <a href="${next.slug}.html" rel="next"><small>Next project</small><strong>${esc(next.title)}</strong></a>
    </div>
  </section>
</main>
${footer('../')}
</body>
</html>
`;
}

/* ---------- CV page ---------- */
function cvPage() {
  const link = (u, t) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t || u.replace(/^https?:\/\/(www\.)?/, ''))}</a>`;
  const pdfOk = exists(SITE.cvPdf);
  const contact = [esc(SITE.location), esc(SITE.phone), `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`].join(' &nbsp;|&nbsp; ');
  const links = [SITE.github && 'GitHub: ' + link(SITE.github), SITE.linkedin && 'LinkedIn: ' + link(SITE.linkedin)].filter(Boolean).join(' &nbsp;|&nbsp; ');
  const results = 'Programming 2A 91% | Information Security 89% | System Analysis and Design 80% | Database (Introduction) 78% | Introduction to Quantitative Thinking and Techniques 92% | Operating Systems 1A 91% | Programming 1A 86% | IT Professional Practice 85% | Web Development (Introduction) 85% | Programming 1B 77% | Business Information Systems 75% | Programming Logic and Design 52%';
  const skills = [
    ['Programming languages', 'C#, Java, SQL, HTML, CSS'],
    ['Frameworks and tools', 'WPF, ASP.NET Core, REST APIs, SQL Server, Git, GitHub, JUnit, Figma, Google AI Studio, VS Code'],
    ['Cloud and DevOps', 'Firebase, Microsoft Azure (Blob Storage), Docker, Cloudflare'],
    ['Other', 'Object-oriented programming, database design, unit testing, cybersecurity basics, systems analysis, UI/UX design'],
    ['Soft skills', 'Problem solving, teamwork, communication, time management']
  ];
  const projects = [
    ['Cybersecurity Chatbot (C#, WPF)', 'desktop app that teaches users cybersecurity awareness through an interactive chat.', 'cyber-chatbot'],
    ['Chat Application (Java, JUnit, GitHub)', 'message-sending app with unit tests and automated builds on GitHub.', 'quickchat'],
    ['RaceDay (C#, ASP.NET Core, SQL Server, Azure Blob Storage, Docker)', 'full-stack project with database design, a REST API, an MVC front end, file storage in Azure and a Docker container.', 'raceday'],
    ['Claim Preparation App (C#)', 'console app using advanced C# features and object lifetime management.', null],
    ['Algoa Bus Company Website (HTML, CSS, JavaScript)', 'website redesign for a bus company, built at Drew Technologies, with a customer side for enquiries, bus hire and lost and found, and a staff admin portal where employees sign in, their time is recorded and they receive notifications from each section.', 'algoa-bus'],
    ['SheBiz (Firebase, Figma, Google AI Studio, VS Code)', 'web platform for women entrepreneurs with sign-up and email verification, a dashboard, opportunities, mentorship and business tools. Built with my hackathon team, Error 404.', 'shebiz']
  ];
  const pdfBtn = pdfOk ? `<a class="btn btn--primary" href="${SITE.cvPdf}" download>Download my CV (PDF)</a>` : '';
  return `${head('CV | ' + SITE.fullName, 'Curriculum vitae of ' + SITE.fullName + ', ' + SITE.role + '.', '')}
<body class="cv">
${header('', 'cv')}
<div class="cv-actions">
  ${pdfBtn}
  <button class="btn btn--ghost" type="button" onclick="window.print()">Print or save this page as PDF</button>
</div>
<main id="main" class="cv-sheet">
  <div class="cv-head">
    <img src="${SITE.photo}" alt="" width="110" height="110" onerror="this.style.display='none'">
    <div>
      <h1>${esc(SITE.fullName)}</h1>
      <p style="margin:4px 0"><strong>Software Development Student | Diploma in Information Technology</strong></p>
      <p class="muted" style="margin:0">${contact}</p>
      <p class="muted" style="margin:0">${links}</p>
    </div>
  </div>

  <h2>Profile</h2>
  <p>Second-year Software Development student at Rosebank International with an 81.8% average across 12 modules and distinctions in 11 of them. I write C#, Java and SQL, and I have built desktop apps, a REST API and database projects. I also tutor other students in programming. I am looking for an internship, vacation work or a bursary where I can learn from experienced people and add real value to a team.</p>

  <h2>Skills</h2>
  <ul class="dots">${skills.map(([k2, v]) => `<li><strong>${esc(k2)}:</strong> ${esc(v)}</li>`).join('')}</ul>

  <h2>Education</h2>
  <h3>Diploma in Information Technology: Software Development (NQF 6)</h3>
  <p style="margin:0">Rosebank International (The IIE) | 2025 - 2027 (expected) | Overall average: 81.8% | Latest semester: 84.5%</p>
  <p style="margin:6px 0 0"><strong>Results so far:</strong> ${esc(results)}</p>
  <h3>National Senior Certificate</h3>
  <p style="margin:0">Motherwell High School | 2024 | Diploma pass</p>

  <h2>Work experience</h2>
  <h3>Founder | Drew Technologies | ${link('https://drewtechnologies.co.za')}</h3>
  <ul class="dots">
    <li>Run my own tech company that designs websites and software for businesses.</li>
    <li>Manage the company website, drewtechnologies.co.za, using Cloudflare.</li>
    <li>Built a website redesign concept for Algoa Bus Company to pitch to their management.</li>
  </ul>
  <h3>Programming Tutor (Part-time) | Rosebank International</h3>
  <ul class="dots">
    <li>Help fellow students understand programming concepts and finish their coding work.</li>
    <li>Explain difficult topics one-on-one in a clear and patient way.</li>
  </ul>

  <h2>Projects</h2>
  <ul class="dots">${projects.map(([t, d2, slug]) => `<li><strong>${slug ? `<a href="projects/${slug}.html">${esc(t)}</a>` : esc(t)}:</strong> ${esc(d2)}</li>`).join('')}</ul>
  <p class="muted">More projects, including GoMate, PartPlug, StudyTrack and the Smart Service Portal plan, are on the <a href="index.html#work">portfolio home page</a>.</p>

  <h2>Languages</h2>
  <p>IsiXhosa (home language) | English</p>

  <h2>References</h2>
  <p>Available on request.</p>
</main>
${footer('')}
</body>
</html>
`;
}

/* ---------- 404 ---------- */
function notFound() {
  return `${head('Page not found | ' + SITE.name, 'This page does not exist.', '/')}
<body>
<main id="main" class="section" style="min-height:100vh;display:grid;place-items:center;text-align:center">
  <div class="wrap">
    <h1 class="h2">This page does not exist</h1>
    <p style="margin-inline:auto" class="lede">The link may be old or mistyped. Go back to the home page to see my projects.</p>
    <a class="btn btn--primary" href="/">Go to home page</a>
  </div>
</main>
</body>
</html>
`;
}

fs.mkdirSync(path.join(root, 'projects'), { recursive: true });
PROJECTS.forEach((p, i) => fs.writeFileSync(path.join(root, 'projects', p.slug + '.html'), projectPage(p, i)));
fs.writeFileSync(path.join(root, 'cv.html'), cvPage());
fs.writeFileSync(path.join(root, '404.html'), notFound());
console.log('Built ' + PROJECTS.length + ' project pages, cv.html and 404.html');
