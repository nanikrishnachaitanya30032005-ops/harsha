/* ===== Data ===== */
const SKILLS = [
  { id: 'html', name: 'HTML', icon: '🌐', desc: 'Web structure & semantics' },
  { id: 'css', name: 'CSS', icon: '🎨', desc: 'Styling & layouts' },
  { id: 'javascript', name: 'JavaScript', icon: '⚡', desc: 'Interactive web apps' },
  { id: 'python', name: 'Python', icon: '🐍', desc: 'Versatile programming' },
  { id: 'java', name: 'Java', icon: '☕', desc: 'Enterprise & Android' },
  { id: 'c', name: 'C', icon: '🔧', desc: 'Systems programming' },
  { id: 'cpp', name: 'C++', icon: '⚙️', desc: 'Performance & games' },
  { id: 'sql', name: 'SQL', icon: '🗄️', desc: 'Database queries' },
  { id: 'ai', name: 'AI', icon: '🤖', desc: 'Machine intelligence' },
  { id: 'data-science', name: 'Data Science', icon: '📊', desc: 'Insights from data' },
  { id: 'data-analytics', name: 'Data Analytics', icon: '📈', desc: 'Business intelligence' },
  { id: 'web-dev', name: 'Web Development', icon: '💻', desc: 'Full-stack building' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', desc: 'Digital protection' },
  { id: 'cloud', name: 'Cloud Computing', icon: '☁️', desc: 'Scalable infrastructure' },
];

const CAREERS = [
  {
    id: 'web-dev',
    title: 'Web Developer',
    icon: '💻',
    desc: 'Build responsive websites and web applications used by millions.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    roadmap: [
      { title: 'Foundations', desc: 'Learn HTML, CSS, and basic JavaScript' },
      { title: 'Frontend Frameworks', desc: 'React, Vue, or Angular' },
      { title: 'Backend Basics', desc: 'Node.js, APIs, and databases' },
      { title: 'Portfolio & Deploy', desc: 'Build projects and deploy to the cloud' },
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    desc: 'Extract insights and build predictive models from complex datasets.',
    skills: ['Python', 'SQL', 'Data Science', 'AI'],
    roadmap: [
      { title: 'Python & Statistics', desc: 'NumPy, Pandas, and statistical thinking' },
      { title: 'Data Wrangling', desc: 'Clean, transform, and visualize data' },
      { title: 'Machine Learning', desc: 'Scikit-learn, model training & evaluation' },
      { title: 'Deep Learning', desc: 'Neural networks and AI applications' },
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    icon: '📈',
    desc: 'Turn raw data into actionable business insights and reports.',
    skills: ['SQL', 'Data Analytics', 'Python'],
    roadmap: [
      { title: 'SQL Mastery', desc: 'Queries, joins, and aggregations' },
      { title: 'Spreadsheets & BI Tools', desc: 'Excel, Tableau, or Power BI' },
      { title: 'Python for Analysis', desc: 'Pandas and data visualization' },
      { title: 'Storytelling', desc: 'Present findings to stakeholders' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    icon: '🔒',
    desc: 'Protect systems, networks, and data from cyber threats.',
    skills: ['Cybersecurity', 'C', 'Python'],
    roadmap: [
      { title: 'Networking Basics', desc: 'TCP/IP, DNS, and network protocols' },
      { title: 'Security Fundamentals', desc: 'Encryption, authentication, and threats' },
      { title: 'Ethical Hacking', desc: 'Penetration testing and vulnerability assessment' },
      { title: 'Certifications', desc: 'CompTIA Security+, CEH, or CISSP path' },
    ],
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    icon: '☁️',
    desc: 'Design and manage scalable cloud infrastructure and services.',
    skills: ['Cloud Computing', 'Python', 'Java'],
    roadmap: [
      { title: 'Cloud Concepts', desc: 'IaaS, PaaS, SaaS, and virtualization' },
      { title: 'AWS / Azure / GCP', desc: 'Pick a platform and get certified' },
      { title: 'DevOps & CI/CD', desc: 'Docker, Kubernetes, and automation' },
      { title: 'Architecture', desc: 'Design resilient, cost-effective systems' },
    ],
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: '⚙️',
    desc: 'Design, build, and maintain software systems across industries.',
    skills: ['Java', 'C++', 'Python', 'SQL'],
    roadmap: [
      { title: 'Programming Fundamentals', desc: 'Pick C, Java, or Python' },
      { title: 'Data Structures & Algorithms', desc: 'Problem solving and efficiency' },
      { title: 'System Design', desc: 'Architecture patterns and scalability' },
      { title: 'Internships & Projects', desc: 'Real-world experience and open source' },
    ],
  },
];

const QUIZ_QUESTIONS = [
  {
    question: 'What type of work excites you most?',
    options: [
      { text: 'Building websites and user interfaces', tags: ['web-dev', 'html', 'css', 'javascript'] },
      { text: 'Analyzing data to find patterns', tags: ['data-science', 'data-analytics', 'sql', 'python'] },
      { text: 'Protecting systems from hackers', tags: ['cybersecurity', 'c', 'python'] },
      { text: 'Creating intelligent machines', tags: ['ai', 'data-science', 'python'] },
    ],
  },
  {
    question: 'How do you prefer to solve problems?',
    options: [
      { text: 'Visually — layouts, design, and user experience', tags: ['css', 'web-dev', 'html'] },
      { text: 'Logically — math, statistics, and models', tags: ['data-science', 'ai', 'sql'] },
      { text: 'Hands-on — breaking and fixing systems', tags: ['cybersecurity', 'c', 'cpp'] },
      { text: 'At scale — infrastructure and automation', tags: ['cloud', 'java', 'python'] },
    ],
  },
  {
    question: 'Which programming experience do you have?',
    options: [
      { text: 'None — I\'m just starting out', tags: ['html', 'python', 'web-dev'] },
      { text: 'Some web basics (HTML/CSS/JS)', tags: ['javascript', 'web-dev', 'css'] },
      { text: 'A general-purpose language (Python, Java, C)', tags: ['python', 'java', 'software-engineer'] },
      { text: 'Databases and data tools', tags: ['sql', 'data-analytics', 'data-science'] },
    ],
  },
  {
    question: 'What is your primary career goal?',
    options: [
      { text: 'Become a full-stack web developer', tags: ['web-dev', 'javascript', 'html', 'css'] },
      { text: 'Work in data science or AI research', tags: ['data-science', 'ai', 'python'] },
      { text: 'Secure a role in cybersecurity', tags: ['cybersecurity', 'c', 'cloud'] },
      { text: 'Build enterprise software or cloud systems', tags: ['java', 'cloud', 'cpp', 'sql'] },
    ],
  },
  {
    question: 'How much time can you dedicate weekly?',
    options: [
      { text: '5–10 hours (casual learner)', tags: ['html', 'css', 'data-analytics'] },
      { text: '10–20 hours (serious student)', tags: ['javascript', 'python', 'web-dev'] },
      { text: '20+ hours (intensive bootcamp pace)', tags: ['data-science', 'ai', 'cybersecurity'] },
      { text: 'Flexible — project-based learning', tags: ['cloud', 'java', 'cpp'] },
    ],
  },
];

const CAREER_MAP = {
  'web-dev': 'Web Developer',
  'data-science': 'Data Scientist',
  'data-analytics': 'Data Analyst',
  'cybersecurity': 'Cybersecurity Analyst',
  'cloud': 'Cloud Engineer',
  'ai': 'AI / ML Engineer',
  'software-engineer': 'Software Engineer',
  'html': 'Frontend Developer',
  'css': 'UI Developer',
  'javascript': 'JavaScript Developer',
  'python': 'Python Developer',
  'java': 'Java Developer',
  'c': 'Systems Programmer',
  'cpp': 'C++ Developer',
  'sql': 'Database Developer',
};

const SKILL_NAME_MAP = {
  'web-dev': 'Web Development',
  'data-science': 'Data Science',
  'data-analytics': 'Data Analytics',
  'cybersecurity': 'Cybersecurity',
  'cloud': 'Cloud Computing',
  'ai': 'AI',
  'html': 'HTML',
  'css': 'CSS',
  'javascript': 'JavaScript',
  'python': 'Python',
  'java': 'Java',
  'c': 'C',
  'cpp': 'C++',
  'sql': 'SQL',
};

const RESOURCES = [
  { type: 'Course', title: 'freeCodeCamp', desc: 'Free full-stack web development curriculum with certifications.', url: 'https://www.freecodecamp.org' },
  { type: 'Course', title: 'MDN Web Docs', desc: 'Comprehensive documentation for HTML, CSS, and JavaScript.', url: 'https://developer.mozilla.org' },
  { type: 'Course', title: 'Python.org Tutorial', desc: 'Official Python tutorial for beginners to advanced learners.', url: 'https://docs.python.org/3/tutorial/' },
  { type: 'Practice', title: 'LeetCode', desc: 'Coding challenges to sharpen algorithms and data structures.', url: 'https://leetcode.com' },
  { type: 'Practice', title: 'HackerRank', desc: 'Skill-based coding practice across multiple languages.', url: 'https://www.hackerrank.com' },
  { type: 'Data', title: 'Kaggle', desc: 'Datasets, notebooks, and competitions for data science.', url: 'https://www.kaggle.com' },
  { type: 'Security', title: 'TryHackMe', desc: 'Hands-on cybersecurity labs for all skill levels.', url: 'https://tryhackme.com' },
  { type: 'Cloud', title: 'AWS Skill Builder', desc: 'Free cloud training and certification prep from Amazon.', url: 'https://skillbuilder.aws' },
  { type: 'Video', title: 'CS50 (Harvard)', desc: 'World-renowned intro to computer science — free on edX.', url: 'https://cs50.harvard.edu' },
];

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'hello@skillboost.edu' },
  { icon: '📍', label: 'Campus Office', value: 'Student Learning Center, Building C, Room 204' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon – Fri, 9:00 AM – 5:00 PM' },
  { icon: '💬', label: 'Response Time', value: 'We typically reply within 24–48 hours' },
];

const SUBJECT_OPTIONS = [
  { value: 'skills', label: 'Skill Guidance' },
  { value: 'career', label: 'Career Roadmap' },
  { value: 'resources', label: 'Learning Resources' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
];

const STORAGE_KEY = 'skillboost-progress';

const CURRENT_PAGE = window.location.pathname.includes('contact') ? 'contact' : 'home';
const HASH = (id) => (CURRENT_PAGE === 'contact' ? `index.html#${id}` : `#${id}`);

/* ===== Utilities ===== */
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/* ===== Page Templates (HTML → JavaScript) ===== */
function renderHeader() {
  const navItems = [
    { href: HASH('skills'), label: 'Skills' },
    { href: HASH('careers'), label: 'Careers' },
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('progress'), label: 'Progress' },
    { href: HASH('resources'), label: 'Resources' },
    { href: 'contact.html', label: 'Contact', cta: true, active: CURRENT_PAGE === 'contact' },
  ];

  return `
    <header class="header" id="header">
      <nav class="nav container">
        <a href="index.html" class="logo">
          <span class="logo-icon">⚡</span>
          SkillBoost
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${navItems.map((item) => `
            <li>
              <a href="${item.href}" class="${item.cta ? 'nav-cta' : ''}${item.active ? ' active' : ''}">${item.label}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
    </header>
  `;
}

function renderFooter() {
  const links = [
    { href: HASH('skills'), label: 'Skills' },
    { href: HASH('careers'), label: 'Careers' },
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('progress'), label: 'Progress' },
    { href: HASH('resources'), label: 'Resources' },
    { href: 'contact.html', label: 'Contact' },
  ];

  return `
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-icon">⚡</span>
            SkillBoost
          </a>
          <p>Empowering students to build in-demand skills for tomorrow's careers.</p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            ${links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:hello@skillboost.edu">hello@skillboost.edu</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>&copy; 2026 SkillBoost. Built for student success.</p>
      </div>
    </footer>
  `;
}

function renderHero() {
  return `
    <section class="hero">
      <div class="container hero-content">
        <p class="hero-badge">Student Skill Improvement Platform</p>
        <h1>Level Up Your Skills with <span class="gradient-text">SkillBoost</span></h1>
        <p class="hero-desc">Discover your strengths, follow personalized roadmaps, and track your journey from beginner to job-ready.</p>
        <div class="hero-actions">
          <a href="#quiz" class="btn btn-primary">Take the Skill Quiz</a>
          <a href="#skills" class="btn btn-secondary">Explore Skills</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">13+</span>
            <span class="stat-label">Skill Areas</span>
          </div>
          <div class="stat">
            <span class="stat-num">6</span>
            <span class="stat-label">Career Paths</span>
          </div>
          <div class="stat">
            <span class="stat-num">Free</span>
            <span class="stat-label">Resources</span>
          </div>
        </div>
      </div>
      <div class="hero-bg"></div>
    </section>
  `;
}

function renderSkillsSection() {
  return `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header">
          <h2>Explore Skills</h2>
          <p>Choose a skill to start learning. Track your progress as you grow.</p>
        </div>
        <div class="skills-grid" id="skillsGrid"></div>
      </div>
    </section>
  `;
}

function renderCareersSection() {
  return `
    <section class="section section-alt" id="careers">
      <div class="container">
        <div class="section-header">
          <h2>Career Paths & Roadmaps</h2>
          <p>Structured learning paths to help you reach your career goals.</p>
        </div>
        <div class="careers-grid" id="careersGrid"></div>
      </div>
    </section>
  `;
}

function renderQuizSection() {
  return `
    <section class="section" id="quiz">
      <div class="container">
        <div class="section-header">
          <h2>Skill Assessment Quiz</h2>
          <p>Answer a few questions to get personalized skill and career recommendations.</p>
        </div>
        <div class="quiz-card" id="quizCard">
          <div class="quiz-progress">
            <div class="quiz-progress-bar" id="quizProgressBar"></div>
          </div>
          <div id="quizContent"></div>
        </div>
      </div>
    </section>
  `;
}

function renderProgressSection() {
  return `
    <section class="section section-alt" id="progress">
      <div class="container">
        <div class="section-header">
          <h2>Your Progress Tracker</h2>
          <p>Update your skill levels and watch your growth over time.</p>
        </div>
        <div class="progress-summary" id="progressSummary"></div>
        <div class="progress-list" id="progressList"></div>
      </div>
    </section>
  `;
}

function renderResourcesSection() {
  return `
    <section class="section" id="resources">
      <div class="container">
        <div class="section-header">
          <h2>Learning Resources</h2>
          <p>Curated free resources to accelerate your learning.</p>
        </div>
        <div class="resources-grid" id="resourcesGrid"></div>
      </div>
    </section>
  `;
}

function renderHomePage() {
  return `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderSkillsSection()}
      ${renderCareersSection()}
      ${renderQuizSection()}
      ${renderProgressSection()}
      ${renderResourcesSection()}
    </main>
    ${renderFooter()}
  `;
}

function renderContactHero() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>Get in Touch</h1>
        <p>Have questions about skills, roadmaps, or resources? We'd love to hear from you.</p>
      </div>
    </section>
  `;
}

function renderContactInfo() {
  return `
    <div class="contact-info">
      <h2>Contact Information</h2>
      <p>Reach out for mentorship requests, partnership inquiries, or general support.</p>
      ${CONTACT_INFO.map((item) => `
        <div class="contact-item">
          <span class="contact-icon">${item.icon}</span>
          <div>
            <strong>${item.label}</strong>
            <p>${item.value}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderContactForm() {
  return `
    <form class="contact-form" id="contactForm">
      <h2>Send a Message</h2>
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name">
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required placeholder="you@university.edu">
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <select id="subject" name="subject" required>
          <option value="">Select a topic</option>
          ${SUBJECT_OPTIONS.map((opt) => `<option value="${opt.value}">${opt.label}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-full">Send Message</button>
      <p class="form-success" id="formSuccess" hidden>Thank you! Your message has been sent successfully.</p>
    </form>
  `;
}

function renderContactPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderContactHero()}
      <section class="section">
        <div class="container contact-layout">
          ${renderContactInfo()}
          ${renderContactForm()}
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = CURRENT_PAGE === 'contact' ? renderContactPage() : renderHomePage();
}

/* ===== Navigation ===== */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ===== Skills ===== */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = SKILLS.map(
    (s) => `
      <div class="skill-card" data-skill="${s.id}">
        <div class="skill-icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
    `
  ).join('');
}

/* ===== Careers ===== */
function renderCareers() {
  const grid = document.getElementById('careersGrid');
  if (!grid) return;

  grid.innerHTML = CAREERS.map(
    (c) => `
      <div class="career-card">
        <div class="career-header">
          <span class="career-icon">${c.icon}</span>
          <h3>${c.title}</h3>
        </div>
        <p>${c.desc}</p>
        <div class="roadmap">
          ${c.roadmap
            .map(
              (step, i) => `
            <div class="roadmap-step">
              <span class="roadmap-dot">${i + 1}</span>
              <div class="roadmap-content">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="career-skills">
          ${c.skills.map((s) => `<span class="career-tag">${s}</span>`).join('')}
        </div>
      </div>
    `
  ).join('');
}

/* ===== Quiz ===== */
let quizState = { index: 0, answers: [], selected: null };

function renderQuiz() {
  const content = document.getElementById('quizContent');
  const bar = document.getElementById('quizProgressBar');
  if (!content) return;

  const total = QUIZ_QUESTIONS.length;
  const pct = (quizState.index / total) * 100;
  if (bar) bar.style.width = `${pct}%`;

  if (quizState.index >= total) {
    showQuizResults(content);
    if (bar) bar.style.width = '100%';
    return;
  }

  const q = QUIZ_QUESTIONS[quizState.index];
  quizState.selected = null;

  content.innerHTML = `
    <div class="quiz-question">
      <h3>Question ${quizState.index + 1} of ${total}</h3>
      <p style="margin-bottom:1.25rem;color:var(--text-muted)">${q.question}</p>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option" data-index="${i}">${opt.text}</button>
        `
          )
          .join('')}
      </div>
      <div class="quiz-nav">
        <button class="btn btn-secondary" id="quizPrev" ${quizState.index === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>Previous</button>
        <button class="btn btn-primary" id="quizNext" disabled style="opacity:0.4;cursor:not-allowed">Next</button>
      </div>
    </div>
  `;

  content.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.quiz-option').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizState.selected = parseInt(btn.dataset.index, 10);
      const nextBtn = document.getElementById('quizNext');
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
    });
  });

  document.getElementById('quizPrev')?.addEventListener('click', () => {
    if (quizState.index > 0) {
      quizState.index--;
      renderQuiz();
    }
  });

  document.getElementById('quizNext')?.addEventListener('click', () => {
    if (quizState.selected !== null) {
      quizState.answers[quizState.index] = quizState.selected;
      quizState.index++;
      renderQuiz();
    }
  });
}

function showQuizResults(container) {
  const tagCounts = {};

  quizState.answers.forEach((answerIdx, qIdx) => {
    const tags = QUIZ_QUESTIONS[qIdx].options[answerIdx].tags;
    tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const sorted = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  const topCareers = sorted
    .filter(([tag]) => CAREER_MAP[tag])
    .slice(0, 3)
    .map(([tag]) => ({ tag, name: CAREER_MAP[tag] }));

  const topSkills = sorted
    .filter(([tag]) => SKILL_NAME_MAP[tag])
    .slice(0, 5)
    .map(([tag]) => SKILL_NAME_MAP[tag]);

  const uniqueCareers = [...new Map(topCareers.map((c) => [c.name, c])).values()].slice(0, 2);

  container.innerHTML = `
    <div class="quiz-results">
      <h3>Your Recommendations</h3>
      <p>Based on your answers, here are the best paths for you:</p>
      ${uniqueCareers
        .map(
          (c) => `
        <div class="result-career">
          <h4>🎯 Recommended Career: ${c.name}</h4>
          <p style="font-size:0.9rem;color:var(--text-muted)">Explore the ${c.name} roadmap above to get started.</p>
        </div>
      `
        )
        .join('')}
      <h4 style="margin-bottom:0.75rem;font-size:1rem">Skills to Focus On</h4>
      <div class="result-skills">
        ${topSkills.map((s) => `<span class="result-skill">${s}</span>`).join('')}
      </div>
      <div class="quiz-nav" style="margin-top:2rem">
        <button class="btn btn-secondary" id="quizRetake">Retake Quiz</button>
        <a href="#progress" class="btn btn-primary">Track Progress</a>
      </div>
    </div>
  `;

  document.getElementById('quizRetake')?.addEventListener('click', () => {
    quizState = { index: 0, answers: [], selected: null };
    renderQuiz();
  });
}

/* ===== Progress Tracker ===== */
function renderProgress() {
  const summary = document.getElementById('progressSummary');
  const list = document.getElementById('progressList');
  if (!summary || !list) return;

  const progress = getProgress();
  const values = SKILLS.map((s) => progress[s.id] || 0);
  const avg = values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 0;
  const completed = values.filter((v) => v >= 80).length;
  const inProgress = values.filter((v) => v > 0 && v < 80).length;

  summary.innerHTML = `
    <div class="summary-card">
      <div class="value">${avg}%</div>
      <div class="label">Overall Progress</div>
    </div>
    <div class="summary-card">
      <div class="value">${completed}</div>
      <div class="label">Skills Mastered (80%+)</div>
    </div>
    <div class="summary-card">
      <div class="value">${inProgress}</div>
      <div class="label">Skills In Progress</div>
    </div>
  `;

  list.innerHTML = SKILLS.map((s) => {
    const pct = progress[s.id] || 0;
    return `
      <div class="progress-item">
        <div class="progress-item-info">
          <span class="icon">${s.icon}</span>
          <h4>${s.name}</h4>
        </div>
        <span class="progress-pct">${pct}%</span>
        <div class="progress-bar-wrap">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
          <input type="range" class="progress-slider" min="0" max="100" value="${pct}" data-skill="${s.id}" aria-label="${s.name} progress">
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.progress-slider').forEach((slider) => {
    slider.addEventListener('input', (e) => {
      const skillId = e.target.dataset.skill;
      const val = parseInt(e.target.value, 10);
      const data = getProgress();
      data[skillId] = val;
      saveProgress(data);

      const item = e.target.closest('.progress-item');
      item.querySelector('.progress-pct').textContent = `${val}%`;
      item.querySelector('.progress-bar-fill').style.width = `${val}%`;

      const newValues = SKILLS.map((s) => (s.id === skillId ? val : data[s.id] || 0));
      const newAvg = Math.round(newValues.reduce((a, b) => a + b, 0) / newValues.length);
      const newCompleted = newValues.filter((v) => v >= 80).length;
      const newInProgress = newValues.filter((v) => v > 0 && v < 80).length;

      summary.querySelectorAll('.summary-card .value')[0].textContent = `${newAvg}%`;
      summary.querySelectorAll('.summary-card .value')[1].textContent = newCompleted;
      summary.querySelectorAll('.summary-card .value')[2].textContent = newInProgress;
    });
  });
}

/* ===== Resources ===== */
function renderResources() {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;

  grid.innerHTML = RESOURCES.map(
    (r) => `
      <div class="resource-card">
        <span class="resource-type">${r.type}</span>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <a href="${r.url}" class="resource-link" target="_blank" rel="noopener noreferrer">Visit Resource →</a>
      </div>
    `
  ).join('');
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    if (success) {
      success.hidden = false;
      form.reset();
      setTimeout(() => {
        success.hidden = true;
      }, 5000);
    }
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initNav();

  if (CURRENT_PAGE === 'home') {
    renderSkills();
    renderCareers();
    renderQuiz();
    renderProgress();
    renderResources();
  } else {
    initContactForm();
  }
});
