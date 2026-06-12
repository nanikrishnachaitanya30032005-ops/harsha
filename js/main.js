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
const SUBJECT_OPTIONS = [
  { value: 'skills', label: 'Skill Guidance' },
  { value: 'career', label: 'Career Roadmap' },
  { value: 'resources', label: 'Learning Resources' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
];

const HASH = (id) => `#${id}`;

function getSkillIdFromHash() {
  const hash = window.location.hash || '';
  const match = hash.match(/^#skill\/([a-z0-9-]+)$/);
  return match ? match[1] : null;
}

function getSkillById(id) {
  return SKILLS.find((s) => s.id === id);
}

/* ===== Supabase Initialization & State ===== */
let supabaseClient = null;
let currentUser = null;

function initSupabase() {
  const url = localStorage.getItem('skillboost-supabase-url') || (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url);
  const key = localStorage.getItem('skillboost-supabase-key') || (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.anonKey);
  
  if (url && key) {
    try {
      supabaseClient = window.supabase.createClient(url, key);
    } catch (err) {
      console.error('Failed to initialize Supabase client:', err);
      supabaseClient = null;
    }
  } else {
    supabaseClient = null;
  }
}

async function checkAuthSession() {
  if (!supabaseClient) return;
  try {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (session) {
      currentUser = session.user;
    } else {
      currentUser = null;
    }
  } catch (err) {
    console.error('Error getting auth session:', err);
  }
}

function setupAuthListener() {
  if (!supabaseClient) return;
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      currentUser = session.user;
    } else {
      currentUser = null;
    }
    updateAuthUI();
  });
}

async function handleLogout() {
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (err) {
      console.error('Error during sign out:', err);
    }
  }
  currentUser = null;
  updateAuthUI();
}

/* ===== Page Templates (HTML → JavaScript) ===== */
function renderAuthNav() {
  if (currentUser) {
    const initial = currentUser.email ? currentUser.email.charAt(0).toUpperCase() : 'U';
    return `
      <div class="nav-user-container" id="navUserContainer">
        <button class="nav-user-btn" id="navUserBtn" aria-label="User Menu">
          <span class="nav-user-avatar">${initial}</span>
          <span class="nav-user-arrow">▼</span>
        </button>
        <div class="nav-user-dropdown" id="navUserDropdown">
          <div class="dropdown-header">
            <div style="font-size:0.75rem;color:var(--text-muted)">Logged in as</div>
            <div class="dropdown-user-email" title="${currentUser.email}">${currentUser.email}</div>
          </div>
          <button class="dropdown-item logout-btn" id="logoutBtn">🚪 Sign Out</button>
        </div>
      </div>
    `;
  } else {
    return `
      <button class="nav-cta btn" id="signInBtn" style="padding: 0.4rem 0.9rem; font-size: 0.85rem; height: 34px;">Sign In</button>
    `;
  }
}

function renderHeader() {
  const navItems = [
    { href: HASH('skills'), label: 'Skills' },
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('careers'), label: 'Careers' },
    { href: HASH('resources'), label: 'Resources' },
    { href: 'login.html', label: 'Login' },
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
              <a href="${item.href}" class="${item.active ? ' active' : ''}">${item.label}</a>
            </li>
          `).join('')}
          <li class="mobile-auth-item" style="margin-top: 0.75rem; border-top: 1px solid var(--border); padding-top: 0.75rem; display: none;">
            ${renderAuthNav()}
          </li>
        </ul>
        <div class="desktop-auth-container" style="display: flex; align-items: center;">
          ${renderAuthNav()}
        </div>
      </nav>
    </header>
  `;
}

function renderFooter() {
  const links = [
    { href: HASH('skills'), label: 'Skills' },
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('careers'), label: 'Careers' },
    { href: HASH('resources'), label: 'Resources' },
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
        <p class="hero-desc">Discover your strengths and follow personalized roadmaps from beginner to job-ready.</p>
        <div class="hero-actions">
          <a href="#skills" class="btn btn-primary">Explore Skills</a>
          <a href="#quiz" class="btn btn-secondary">Take the Skill Quiz</a>
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
          <p>Choose a skill to start learning and view detailed roadmaps.</p>
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
      ${renderResourcesSection()}
    </main>
    ${renderFooter()}
  `;
}



function renderSkillDetailPage(skillId) {
  const skill = getSkillById(skillId);
  const detail = getSkillDetail(skillId);

  if (!skill || !detail) {
    return null;
  }

  const progressData = JSON.parse(localStorage.getItem('skillboost-progress') || '{}');
  const progress = progressData[skillId] || 0;

  return `
    ${renderHeader()}
    <main class="skill-detail-main">
      <section class="skill-detail-hero">
        <div class="container">
          <a href="#skills" class="skill-back-link">← Back to Skills</a>
          <div class="skill-detail-hero-content">
            <div class="skill-detail-icon">${skill.icon}</div>
            <div>
              <span class="skill-detail-badge">Skill Guide</span>
              <h1>${skill.name}</h1>
              <p class="skill-detail-tagline">${skill.desc}</p>
              <div class="skill-detail-meta" style="display: flex; align-items: center; gap: 1rem;">
                <button class="btn btn-primary" id="startLearningBtn" data-skill="${skillId}">Start Learning</button>
                ${progress > 0 ? `<span class="skill-progress-badge">Score: ${progress}%</span>` : ''}
              </div>
            </div>
          </div>
        </div>
        <div class="skill-detail-hero-bg"></div>
      </section>

      <section class="section">
        <div class="container skill-detail-grid">
          <div class="skill-detail-card skill-detail-card-wide">
            <h2><span class="card-icon">📖</span> Overview</h2>
            <p>${detail.overview}</p>
          </div>
          <div class="skill-detail-card skill-detail-card-wide">
            <h2><span class="card-icon">⭐</span> Why It Matters</h2>
            <p>${detail.importance}</p>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">🗺️</span> Learning Roadmap</h2>
            <div class="skill-roadmap">
              ${detail.roadmap.map((step, i) => `
                <div class="skill-roadmap-step">
                  <span class="skill-roadmap-num">${i + 1}</span>
                  <div>
                    <h4>${step.title}</h4>
                    <p>${step.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">📌</span> Key Topics</h2>
            <ul class="skill-topic-list">
              ${detail.keyTopics.map((t) => `<li>${t}</li>`).join('')}
            </ul>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">🛠️</span> Project Ideas</h2>
            <div class="skill-project-list">
              ${detail.projects.map((p) => `
                <div class="skill-project-item">
                  <h4>${p.title}</h4>
                  <p>${p.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">💼</span> Career Opportunities</h2>
            <div class="skill-tag-cloud">
              ${detail.careers.map((c) => `<span class="skill-tag">${c}</span>`).join('')}
            </div>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">❓</span> Interview Questions</h2>
            <ol class="skill-interview-list">
              ${detail.interviewQuestions.map((q) => `<li>${q}</li>`).join('')}
            </ol>
          </div>
          <div class="skill-detail-card">
            <h2><span class="card-icon">📚</span> Learning Resources</h2>
            <div class="skill-resource-list">
              ${detail.resources.map((r) => `
                <a href="${r.url}" class="skill-resource-item" target="_blank" rel="noopener noreferrer">
                  <span class="skill-resource-type">${r.type}</span>
                  <span class="skill-resource-title">${r.title} →</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt" id="learning-levels">
        <div class="container">
          <div class="section-header">
            <h2>Learning Levels</h2>
            <p>Progress through Beginner, Intermediate, and Advanced stages.</p>
          </div>
          <div class="skill-levels-grid">
            ${['beginner', 'intermediate', 'advanced'].map((level) => `
              <div class="skill-level-card level-${level}">
                <div class="skill-level-header">
                  <span class="skill-level-icon">${level === 'beginner' ? '🌱' : level === 'intermediate' ? '🚀' : '🏆'}</span>
                  <h3>${level.charAt(0).toUpperCase() + level.slice(1)}</h3>
                </div>
                <ul>
                  ${detail.levels[level].topics.map((t) => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
          <div class="skill-detail-cta">
            <button class="btn btn-primary btn-lg" id="startLearningBtn2" data-skill="${skillId}">Start Learning ${skill.name}</button>
          </div>
        </div>
      </section>
      
      <section class="section" style="border-top: 1px solid var(--border);">
        <div class="container" style="max-width: 900px;">
          <div class="section-header" style="text-align: left; margin: 0 0 2rem;">
            <h2>💬 Doubts & Discussion Board</h2>
            <p>Collaborate with other students. Ask questions, share explanations, and get help.</p>
          </div>
          <div id="doubtsBoard" data-skill="${skillId}">
            <!-- Rendered by renderDoubtsBoard() -->
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash || '';
  if (hash === '#quiz') {
    clearQuizTimer();
    document.title = 'Skill Assessment Quiz — SkillBoost';
    app.innerHTML = renderQuizPage();
    initAuthEventListeners();
    initQuizPage();
    return;
  }

  const skillId = getSkillIdFromHash();
  if (skillId) {
    const skillHtml = renderSkillDetailPage(skillId);
    if (skillHtml) {
      document.title = `${getSkillById(skillId)?.name || 'Skill'} — SkillBoost`;
      app.innerHTML = skillHtml;
      initAuthEventListeners();
      return;
    }
    window.location.hash = 'skills';
  }

  document.title = 'SkillBoost — Student Skill Improvement';
  app.innerHTML = renderHomePage();
  initAuthEventListeners();
}

function initHomePage() {
  renderSkills();
  renderCareers();
  renderResources();
}

function initSkillDetailPage() {
  const skillId = getSkillIdFromHash();
  if (!skillId) return;

  const startLearning = (id) => {
    document.getElementById('learning-levels')?.scrollIntoView({ behavior: 'smooth' });
  };

  document.getElementById('startLearningBtn')?.addEventListener('click', () => startLearning(skillId));
  document.getElementById('startLearningBtn2')?.addEventListener('click', () => startLearning(skillId));

  // Initialize Doubts Board
  initLocalStorageDoubts();
  renderDoubtsBoard(skillId);
}

function initRouter() {
  window.addEventListener('hashchange', () => {
    navInitialized = false;
    clearQuizTimer();
    renderApp();
    initNav();
    if (getSkillIdFromHash()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      initSkillDetailPage();
    } else if (window.location.hash === '#quiz') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      initHomePage();
    }
  });
}

/* ===== Navigation ===== */
let navInitialized = false;

function initNav() {
  if (navInitialized) return;

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  navInitialized = true;

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

  const progressData = JSON.parse(localStorage.getItem('skillboost-progress') || '{}');

  grid.innerHTML = SKILLS.map(
    (s) => {
      const progress = progressData[s.id] || 0;
      return `
        <a href="#skill/${s.id}" class="skill-card" data-skill="${s.id}">
          <div class="skill-icon">${s.icon}</div>
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
          ${progress > 0 ? `
            <div class="skill-progress-container" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                <span>Progress</span>
                <span>${progress}%</span>
              </div>
              <div class="skill-progress-bar-bg" style="background: var(--border); height: 4px; border-radius: 2px; overflow: hidden;">
                <div class="skill-progress-bar-fill" style="background: var(--accent); width: ${progress}%; height: 100%;"></div>
              </div>
            </div>
          ` : ''}
          <span class="skill-card-link">View Details →</span>
        </a>
      `;
    }
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

/* Contact form removed (contact page disabled) */

/* ===== Auth Modal UI & Event Handling ===== */
function ensureModalInDOM() {
  let modal = document.getElementById('authModalOverlay');
  if (modal) return;

  modal = document.createElement('div');
  modal.id = 'authModalOverlay';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modalTitle">Account Access</h3>
        <button class="modal-close-btn" id="modalCloseBtn">&times;</button>
      </div>
      <div class="modal-tabs" id="modalTabs">
        <button class="modal-tab active" data-tab="signin">Sign In</button>
        <button class="modal-tab" data-tab="signup">Sign Up</button>
      </div>
      <div class="modal-body">
        <!-- Sign In Pane -->
        <div class="modal-pane active" id="pane-signin">
          <form id="signInForm">
            <div class="form-alert error" id="signInError" hidden></div>
            <div class="form-group">
              <label for="signInEmail">Email Address</label>
              <input type="email" id="signInEmail" class="form-input" required placeholder="you@example.com">
            </div>
            <div class="form-group">
              <label for="signInPassword">Password</label>
              <input type="password" id="signInPassword" class="form-input" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn btn-primary btn-full">Sign In</button>
          </form>
        </div>

        <!-- Sign Up Pane -->
        <div class="modal-pane" id="pane-signup">
          <form id="signUpForm">
            <div class="form-alert error" id="signUpError" hidden></div>
            <div class="form-alert success" id="signUpSuccess" hidden></div>
            <div class="form-group">
              <label for="signUpEmail">Email Address</label>
              <input type="email" id="signUpEmail" class="form-input" required placeholder="you@example.com">
            </div>
            <div class="form-group">
              <label for="signUpPassword">Password</label>
              <input type="password" id="signUpPassword" class="form-input" required placeholder="•••••••• (min 6 chars)">
            </div>
            <button type="submit" class="btn btn-primary btn-full">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  initModalEvents();
}

function openAuthModal(tabName = 'signin') {
  const overlay = document.getElementById('authModalOverlay');
  if (!overlay) return;

  overlay.classList.add('open');

  const tabs = document.querySelectorAll('.modal-tab');
  const panes = document.querySelectorAll('.modal-pane');
  
  tabs.forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  panes.forEach(pane => {
    if (pane.id === `pane-${tabName}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  const title = document.getElementById('modalTitle');
  if (title) {
    if (tabName === 'signin') title.textContent = 'Welcome Back';
    else if (tabName === 'signup') title.textContent = 'Create Student Account';
  }

  if (tabName === 'signin') {
    const errorDiv = document.getElementById('signInError');
    if (errorDiv) errorDiv.hidden = true;
  } else if (tabName === 'signup') {
    const errorDiv = document.getElementById('signUpError');
    const successDiv = document.getElementById('signUpSuccess');
    if (errorDiv) errorDiv.hidden = true;
    if (successDiv) successDiv.hidden = true;
  }
}

function initModalEvents() {
  const overlay = document.getElementById('authModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
    }
  });

  const tabs = document.querySelectorAll('.modal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      openAuthModal(tabName);
    });
  });

  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('signInEmail').value.trim();
      const password = document.getElementById('signInPassword').value.trim();
      const errorDiv = document.getElementById('signInError');

      errorDiv.hidden = true;

      if (!supabaseClient) {
        errorDiv.textContent = 'Database connection failed. Please refresh the page.';
        errorDiv.hidden = false;
        return;
      }

      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;

        currentUser = data.user;
        overlay.classList.remove('open');
        updateAuthUI();
      } catch (err) {
        console.error('Sign In error:', err);
        errorDiv.textContent = err.message || 'Authentication failed.';
        errorDiv.hidden = false;
      }
    });
  }

  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('signUpEmail').value.trim();
      const password = document.getElementById('signUpPassword').value.trim();
      const errorDiv = document.getElementById('signUpError');
      const successDiv = document.getElementById('signUpSuccess');

      errorDiv.hidden = true;
      successDiv.hidden = true;

      if (!supabaseClient) {
        errorDiv.textContent = 'Database connection failed. Please refresh the page.';
        errorDiv.hidden = false;
        return;
      }

      if (password.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters.';
        errorDiv.hidden = false;
        return;
      }

      try {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) throw error;

        if (data.user && data.user.identities && data.user.identities.length === 0) {
          errorDiv.textContent = 'An account already exists for this email. Try logging in.';
          errorDiv.hidden = false;
        } else {
          successDiv.textContent = 'Registration successful! Check email or sign in directly.';
          successDiv.hidden = false;
          
          if (data.session) {
            currentUser = data.user;
            setTimeout(() => {
              overlay.classList.remove('open');
              updateAuthUI();
            }, 1500);
          }
        }
      } catch (err) {
        console.error('Sign Up error:', err);
        errorDiv.textContent = err.message || 'Registration failed.';
        errorDiv.hidden = false;
      }
    });
  }
}

function initAuthEventListeners() {
  ensureModalInDOM();

  const signInButtons = document.querySelectorAll('#signInBtn');
  signInButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      openAuthModal('signin');
    });
  });

  const userBtn = document.getElementById('navUserBtn');
  const userContainer = document.getElementById('navUserContainer');
  if (userBtn && userContainer) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userContainer.classList.toggle('open');
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (userContainer && !userContainer.contains(e.target)) {
      userContainer.classList.remove('open');
    }
  });

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await handleLogout();
    });
  }
}

function updateAuthUI() {
  navInitialized = false; // Allow nav to be re-initialized
  clearQuizTimer();
  renderApp();
  initNav();
  
  if (getSkillIdFromHash()) {
    initSkillDetailPage();
  } else if (window.location.hash === '#quiz') {
    // Already handled in renderApp
  } else {
    initHomePage();
  }
}

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

/* ===== Quiz & Assessment Logic (LocalStorage backed) ===== */
let quizViewMode = 'setup'; // 'setup', 'active', 'results'
let quizState = {
  skill: '',
  difficulty: '',
  questions: [],
  currentIdx: 0,
  answers: [],
  timeRemaining: 30,
  timerInterval: null
};

function clearQuizTimer() {
  if (quizState.timerInterval) {
    clearInterval(quizState.timerInterval);
    quizState.timerInterval = null;
  }
}

function shuffleOptions(questionObj) {
  // Create copy to shuffle
  const originalOptions = questionObj.options.map((opt, idx) => ({ opt, idx }));
  for (let i = originalOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalOptions[i], originalOptions[j]] = [originalOptions[j], originalOptions[i]];
  }
  const newCorrectIdx = originalOptions.findIndex(item => item.idx === questionObj.correct);
  return {
    question: questionObj.question,
    options: originalOptions.map(item => item.opt),
    correct: newCorrectIdx,
    explanation: questionObj.explanation
  };
}

function startQuiz(skillId, difficulty) {
  const categoryQuestions = window.QUIZ_QUESTION_BANK[skillId]?.[difficulty];
  if (!categoryQuestions || categoryQuestions.length === 0) {
    alert("Question bank for this combination is currently unavailable.");
    return;
  }

  // Clone and shuffle
  const cloned = JSON.parse(JSON.stringify(categoryQuestions));
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }

  // Shuffle options for each question
  const finalizedQuestions = cloned.map(q => shuffleOptions(q));

  quizState.skill = skillId;
  quizState.difficulty = difficulty;
  quizState.questions = finalizedQuestions;
  quizState.currentIdx = 0;
  quizState.answers = new Array(finalizedQuestions.length).fill(undefined);
  quizViewMode = 'active';

  renderQuizUI();
}

function submitQuiz() {
  clearQuizTimer();

  const total = quizState.questions.length;
  const score = quizState.answers.reduce((acc, ans, idx) => {
    return acc + (ans === quizState.questions[idx].correct ? 1 : 0);
  }, 0);
  const percentage = Math.round((score / total) * 100);

  // Save history
  const history = JSON.parse(localStorage.getItem('skillboost-quiz-history') || '[]');
  const record = {
    skill: quizState.skill,
    difficulty: quizState.difficulty,
    score,
    total,
    percentage,
    timestamp: Date.now()
  };
  history.push(record);
  localStorage.setItem('skillboost-quiz-history', JSON.stringify(history));

  // Save progress
  const progressData = JSON.parse(localStorage.getItem('skillboost-progress') || '{}');
  const currentMax = progressData[quizState.skill] || 0;
  progressData[quizState.skill] = Math.max(currentMax, percentage);
  localStorage.setItem('skillboost-progress', JSON.stringify(progressData));

  quizViewMode = 'results';
  renderQuizUI();
}

function startTimer() {
  clearQuizTimer();
  quizState.timeRemaining = 30;
  
  const countdownEl = document.getElementById('timerCountdown');
  if (countdownEl) countdownEl.textContent = `${quizState.timeRemaining}s`;

  quizState.timerInterval = setInterval(() => {
    quizState.timeRemaining--;
    const countdownEl = document.getElementById('timerCountdown');
    if (countdownEl) {
      countdownEl.textContent = `${quizState.timeRemaining}s`;
      if (quizState.timeRemaining <= 10) {
        countdownEl.parentElement.style.color = '#ef4444';
      }
    }

    if (quizState.timeRemaining <= 0) {
      clearQuizTimer();
      handleQuestionTimeout();
    }
  }, 1000);
}

function handleQuestionTimeout() {
  if (quizState.answers[quizState.currentIdx] === undefined) {
    quizState.answers[quizState.currentIdx] = null; // Mark skipped
  }
  
  const total = quizState.questions.length;
  if (quizState.currentIdx < total - 1) {
    quizState.currentIdx++;
    renderQuizUI();
  } else {
    submitQuiz();
  }
}

/* ===== Quiz UI Templates ===== */
function renderQuizPage() {
  return `
    ${renderHeader()}
    <main class="quiz-main" style="padding-top: calc(var(--header-h) + 2rem); min-height: calc(100vh - 200px); padding-bottom: 4rem;">
      <div class="container" style="max-width: 800px;">
        <div class="section-header" style="margin-bottom: 2rem;">
          <h1>Skill Assessment Quiz</h1>
          <p>Answer randomized multiple-choice questions to review explanations and track progress.</p>
        </div>
        <div class="quiz-card" id="quizCard">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;
}

function renderQuizSetupHTML() {
  const optionsHtml = SKILLS.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  return `
    <div class="quiz-setup-container">
      <h2 style="font-family: var(--font-display); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>📝</span> Quiz Configuration
      </h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.95rem;">
        Select a skill and a difficulty level to generate a randomized multiple-choice assessment of 5 questions.
      </p>
      <form id="quizSetupForm" style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div class="form-group" style="display: flex; flex-direction: column; gap: 0.5rem;">
          <label for="quizSkill" style="font-weight: 600; font-size: 0.9rem;">Select Skill</label>
          <select id="quizSkill" class="form-input" style="background: var(--bg-alt); border: 1px solid var(--border); color: var(--text); padding: 0.75rem; border-radius: var(--radius); font-size: 0.95rem; width: 100%; cursor: pointer;">
            ${optionsHtml}
          </select>
        </div>
        <div class="form-group" style="display: flex; flex-direction: column; gap: 0.5rem;">
          <label for="quizDifficulty" style="font-weight: 600; font-size: 0.9rem;">Choose Difficulty</label>
          <select id="quizDifficulty" class="form-input" style="background: var(--bg-alt); border: 1px solid var(--border); color: var(--text); padding: 0.75rem; border-radius: var(--radius); font-size: 0.95rem; width: 100%; cursor: pointer;">
            <option value="easy">Easy (Fundamentals)</option>
            <option value="medium">Medium (Intermediate)</option>
            <option value="hard">Hard (Advanced)</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-full" style="padding: 0.9rem; margin-top: 1rem; font-size: 1rem;">
          🚀 Start Assessment
        </button>
      </form>
      
      ${renderQuizHistoryHTML()}
    </div>
  `;
}

function renderQuizHistoryHTML() {
  const history = JSON.parse(localStorage.getItem('skillboost-quiz-history') || '[]');
  if (history.length === 0) return '';

  const rows = history.slice(-5).reverse().map(h => {
    const skillName = getSkillById(h.skill)?.name || h.skill;
    const dateStr = new Date(h.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; font-size: 0.85rem;">
        <div>
          <span style="font-weight: 600;">${skillName}</span> 
          <span style="color: var(--accent); font-size: 0.7rem; padding: 0.1rem 0.4rem; border-radius: 4px; background: var(--surface); margin-left: 0.5rem; text-transform: uppercase;">${h.difficulty}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="color: ${h.percentage >= 80 ? 'var(--success)' : h.percentage >= 50 ? 'var(--warning)' : '#ef4444'}; font-weight: 700;">${h.score}/${h.total} (${h.percentage}%)</span>
          <span style="color: var(--text-muted); font-size: 0.75rem;">${dateStr}</span>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="quiz-history-container" style="margin-top: 2.5rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>📊</span> Recent Attempts
      </h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${rows}
      </div>
      <button class="btn btn-secondary" id="clearQuizHistoryBtn" style="margin-top: 1rem; font-size: 0.75rem; padding: 0.4rem 0.8rem;">Clear All History</button>
    </div>
  `;
}

function renderQuizActiveHTML() {
  const q = quizState.questions[quizState.currentIdx];
  const total = quizState.questions.length;
  const progressPercent = ((quizState.currentIdx + 1) / total) * 100;
  const selectedIdx = quizState.answers[quizState.currentIdx];

  const optionsHtml = q.options.map((option, idx) => {
    const isSelected = selectedIdx === idx;
    return `
      <button class="quiz-option-btn ${isSelected ? 'selected' : ''}" data-idx="${idx}" style="width: 100%; text-align: left; padding: 0.9rem 1.25rem; background: ${isSelected ? 'var(--surface-hover)' : 'var(--bg-alt)'}; border: 1px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}; border-radius: var(--radius); color: var(--text); cursor: pointer; transition: all var(--transition); font-size: 0.95rem; font-weight: ${isSelected ? '600' : '400'}; display: flex; align-items: center; gap: 0.75rem;">
        <span class="option-indicator" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${isSelected ? 'var(--primary)' : 'var(--text-muted)'}; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; background: ${isSelected ? 'var(--primary)' : 'transparent'}; color: ${isSelected ? 'white' : 'var(--text-muted)'};">
          ${String.fromCharCode(65 + idx)}
        </span>
        <span>${escapeHTML(option)}</span>
      </button>
    `;
  }).join('');

  return `
    <div class="quiz-active-container">
      <div class="quiz-active-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">
          Question ${quizState.currentIdx + 1} of ${total}
        </span>
        <div class="quiz-timer" style="display: flex; align-items: center; gap: 0.4rem; font-weight: 700; color: ${quizState.timeRemaining <= 10 ? '#ef4444' : 'var(--accent)'}; font-size: 0.95rem;">
          <span>⏱️</span> <span id="timerCountdown">${quizState.timeRemaining}s</span>
        </div>
      </div>
      
      <div class="quiz-progress-bar-container" style="background: var(--border); height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 2rem;">
        <div class="quiz-progress-bar-fill" style="background: var(--gradient); width: ${progressPercent}%; height: 100%; transition: width var(--transition);"></div>
      </div>

      <h3 class="quiz-question-text" style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 600; line-height: 1.5; margin-bottom: 1.5rem;">
        ${escapeHTML(q.question)}
      </h3>

      <div class="quiz-options-grid" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
        ${optionsHtml}
      </div>

      <div class="quiz-navigation" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
        <button class="btn btn-secondary" id="quizPrevBtn" ${quizState.currentIdx === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          ⬅️ Previous
        </button>
        ${quizState.currentIdx === total - 1 ? `
          <button class="btn btn-primary" id="quizSubmitBtn">
            Submit Quiz ✔️
          </button>
        ` : `
          <button class="btn btn-primary" id="quizNextBtn">
            Next ➡️
          </button>
        `}
      </div>
    </div>
  `;
}

function renderQuizResultsHTML() {
  const total = quizState.questions.length;
  const score = quizState.answers.reduce((acc, ans, idx) => {
    return acc + (ans === quizState.questions[idx].correct ? 1 : 0);
  }, 0);
  const percentage = Math.round((score / total) * 100);

  const feedback = percentage >= 80 ? { title: '🏆 Outstanding!', desc: 'You have a solid grasp of this skill. Keep up the amazing work!', color: 'var(--success)' }
                 : percentage >= 50 ? { title: '🚀 Good Effort!', desc: 'You are on the right track! Review the topics below to master this level.', color: 'var(--warning)' }
                 : { title: '🌱 Keep Learning!', desc: 'Focus on the fundamentals. Read the detailed explanations below to improve your skills.', color: '#ef4444' };

  const reviewListHtml = quizState.questions.map((q, idx) => {
    const userAns = quizState.answers[idx];
    const isCorrect = userAns === q.correct;
    
    return `
      <div class="result-review-card" style="background: var(--bg-alt); border: 1px solid ${isCorrect ? 'rgba(52, 211, 153, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; border-left: 4px solid ${isCorrect ? 'var(--success)' : '#ef4444'}; border-radius: var(--radius); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
          <h4 style="font-size: 0.95rem; font-weight: 600; line-height: 1.4; color: var(--text);">
            Question ${idx + 1}: ${escapeHTML(q.question)}
          </h4>
          <span style="font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; background: ${isCorrect ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; color: ${isCorrect ? 'var(--success)' : '#ef4444'}; flex-shrink: 0;">
            ${isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; margin-top: 0.5rem;">
          ${q.options.map((opt, optIdx) => {
            let itemStyle = 'padding: 0.5rem 0.75rem; border-radius: 6px; display: flex; align-items: center; gap: 0.5rem;';
            let icon = '•';
            if (optIdx === q.correct) {
              itemStyle += ' background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.3); color: var(--success); font-weight: 500;';
              icon = '✓';
            } else if (optIdx === userAns) {
              itemStyle += ' background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444;';
              icon = '✗';
            } else {
              itemStyle += ' color: var(--text-muted);';
            }
            return `
              <div style="${itemStyle}">
                <span style="font-weight:700;">${icon}</span>
                <span>${escapeHTML(opt)}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div style="background: var(--surface); padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.8rem; border: 1px solid var(--border); margin-top: 0.5rem;">
          <div style="font-weight: 600; color: var(--accent); margin-bottom: 0.25rem;">Explanation:</div>
          <p style="color: var(--text-muted); line-height: 1.5;">${escapeHTML(q.explanation)}</p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="quiz-results-container">
      <div class="results-summary-card" style="text-align: center; padding: 2rem 1.5rem; background: var(--bg-alt); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 2.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.8rem;">
        <div style="font-size: 3rem; line-height: 1;">${feedback.title.split(' ')[0]}</div>
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: ${feedback.color};">
          ${feedback.title}
        </h2>
        <div style="font-size: 2.25rem; font-weight: 800; font-family: var(--font-display); color: var(--text);">
          ${score} / ${total}
          <span style="font-size: 1.25rem; font-weight: 500; color: var(--text-muted);">(${percentage}%)</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 480px; line-height: 1.6; margin-bottom: 1rem;">
          ${feedback.desc}
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-primary" id="quizRetakeBtn">🔄 Take Another Quiz</button>
          <a href="#skills" class="btn btn-secondary">Explore Skills</a>
        </div>
      </div>

      <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: 1.25rem;">
        📝 Question Breakdown & Review
      </h3>
      
      <div class="results-review-list" style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${reviewListHtml}
      </div>
    </div>
  `;
}

function renderQuizUI() {
  const card = document.getElementById('quizCard');
  if (!card) return;

  if (quizViewMode === 'setup') {
    card.innerHTML = renderQuizSetupHTML();
    const form = document.getElementById('quizSetupForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const skill = document.getElementById('quizSkill').value;
        const diff = document.getElementById('quizDifficulty').value;
        startQuiz(skill, diff);
      });
    }
    const clearBtn = document.getElementById('clearQuizHistoryBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear your quiz history? This will also reset your skill progress metrics.")) {
          localStorage.removeItem('skillboost-quiz-history');
          localStorage.removeItem('skillboost-progress');
          renderQuizUI();
        }
      });
    }
  } else if (quizViewMode === 'active') {
    card.innerHTML = renderQuizActiveHTML();
    startTimer();
    
    const optionBtns = card.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        quizState.answers[quizState.currentIdx] = idx;
        renderQuizUI();
      });
    });

    const prevBtn = document.getElementById('quizPrevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (quizState.currentIdx > 0) {
          clearQuizTimer();
          quizState.currentIdx--;
          renderQuizUI();
        }
      });
    }

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (quizState.currentIdx < quizState.questions.length - 1) {
          clearQuizTimer();
          if (quizState.answers[quizState.currentIdx] === undefined) {
            quizState.answers[quizState.currentIdx] = null;
          }
          quizState.currentIdx++;
          renderQuizUI();
        }
      });
    }

    const submitBtn = document.getElementById('quizSubmitBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (quizState.answers[quizState.currentIdx] === undefined) {
          quizState.answers[quizState.currentIdx] = null;
        }
        submitQuiz();
      });
    }
  } else if (quizViewMode === 'results') {
    card.innerHTML = renderQuizResultsHTML();
    const retakeBtn = document.getElementById('quizRetakeBtn');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        quizViewMode = 'setup';
        renderQuizUI();
      });
    }
  }
}

function initQuizPage() {
  renderQuizUI();
}

/* ===== Doubts & Discussions Logic (LocalStorage backed) ===== */
function initLocalStorageDoubts() {
  if (localStorage.getItem('skillboost-doubts')) return;

  const initialDoubts = {
    html: [
      {
        id: 'html-d1',
        title: "When should I use article vs section tags?",
        content: "I'm building a blog page and I'm confused about when to use <article> and when to use <section>. Can someone explain the rule of thumb?",
        author: "alex.student@skillboost.edu",
        timestamp: Date.now() - 3600000 * 24,
        replies: [
          {
            content: "Use <article> for content that is self-contained and could be distributed independently (like a single blog post). Use <section> to group related content within a page (like a 'Features' or 'Contact' area).",
            author: "instructor.maria@skillboost.edu",
            timestamp: Date.now() - 3600000 * 20
          }
        ]
      }
    ],
    css: [
      {
        id: 'css-d1',
        title: "Why is my Flexbox item not shrinking below its content size?",
        content: "I set flex-shrink: 1 but the item remains wider than its container when it has a long string of text inside.",
        author: "justin.k@skillboost.edu",
        timestamp: Date.now() - 3600000 * 12,
        replies: [
          {
            content: "Flex items have a default min-width of 'auto'. You need to set 'min-width: 0;' on the flex item to allow it to shrink below its content size.",
            author: "css.expert@skillboost.edu",
            timestamp: Date.now() - 3600000 * 8
          }
        ]
      }
    ],
    javascript: [
      {
        id: 'js-d1',
        title: "What is the difference between map() and forEach()?",
        content: "Both iterate over arrays. Why would I choose one over the other?",
        author: "dev.junior@skillboost.edu",
        timestamp: Date.now() - 3600000 * 15,
        replies: [
          {
            content: "map() returns a brand new array with the transformed values, whereas forEach() executes a function on each element but returns undefined (used for side effects).",
            author: "coder.senior@skillboost.edu",
            timestamp: Date.now() - 3600000 * 10
          }
        ]
      }
    ],
    python: [
      {
        id: 'py-d1',
        title: "What does 'if __name__ == \"__main__\":' mean?",
        content: "I see this at the bottom of almost every Python script. What is its exact purpose?",
        author: "py.learner@skillboost.edu",
        timestamp: Date.now() - 3600000 * 30,
        replies: [
          {
            content: "It ensures that the block of code inside it only runs when the script is executed directly from the terminal, and NOT when it is imported as a module in another script.",
            author: "python.guru@skillboost.edu",
            timestamp: Date.now() - 3600000 * 25
          }
        ]
      }
    ],
    java: [
      {
        id: 'java-d1',
        title: "Why is String immutable in Java?",
        content: "Why did the language creators decide to make String immutable instead of mutable?",
        author: "java.coder@skillboost.edu",
        timestamp: Date.now() - 3600000 * 48,
        replies: [
          {
            content: "Security (parameters like network connections/file paths are strings), Caching (String Pool saves memory), and Thread-safety (immutable objects can be shared safely across threads).",
            author: "java.architect@skillboost.edu",
            timestamp: Date.now() - 3600000 * 40
          }
        ]
      }
    ],
    c: [
      {
        id: 'c-d1',
        title: "What is the difference between char *str and char str[]?",
        content: "When declaring a string, one uses a pointer and the other an array. Is there a memory difference?",
        author: "c.student@skillboost.edu",
        timestamp: Date.now() - 3600000 * 5,
        replies: [
          {
            content: "Yes! 'char *str' creates a pointer to a string literal stored in read-only memory (cannot be modified). 'char str[]' allocates a mutable array of characters on the stack/globals.",
            author: "systems.dev@skillboost.edu",
            timestamp: Date.now() - 3600000 * 3
          }
        ]
      }
    ],
    cpp: [
      {
        id: 'cpp-d1',
        title: "When should I use std::unique_ptr vs std::shared_ptr?",
        content: "Is unique_ptr always preferred? When is shared_ptr required?",
        author: "cpp.dev@skillboost.edu",
        timestamp: Date.now() - 3600000 * 9,
        replies: [
          {
            content: "Always prefer std::unique_ptr by default as it has zero runtime overhead. Use std::shared_ptr only when a resource has multiple owners and its lifetime must span across them all.",
            author: "modern.cpp@skillboost.edu",
            timestamp: Date.now() - 3600000 * 6
          }
        ]
      }
    ],
    sql: [
      {
        id: 'sql-d1',
        title: "What is the difference between WHERE and HAVING?",
        content: "They both filter records, but I get errors when I mix them up with GROUP BY.",
        author: "query.novice@skillboost.edu",
        timestamp: Date.now() - 3600000 * 18,
        replies: [
          {
            content: "WHERE filters rows BEFORE grouping occurs. HAVING filters groups AFTER GROUP BY has collapsed rows, meaning you can use aggregate functions (like SUM, COUNT) inside HAVING.",
            author: "db.admin@skillboost.edu",
            timestamp: Date.now() - 3600000 * 14
          }
        ]
      }
    ],
    ai: [
      {
        id: 'ai-d1',
        title: "What is the difference between epoch, batch size, and iterations?",
        content: "I get confused by these parameters during neural network training. Can someone define them simply?",
        author: "ai.student@skillboost.edu",
        timestamp: Date.now() - 3600000 * 22,
        replies: [
          {
            content: "An Epoch is one full pass through the entire dataset. Batch Size is the number of samples processed before updating weights. Iterations is the number of batches needed to complete one epoch.",
            author: "ml.researcher@skillboost.edu",
            timestamp: Date.now() - 3600000 * 19
          }
        ]
      }
    ],
    'data-science': [
      {
        id: 'ds-d1',
        title: "How do you handle highly imbalanced datasets?",
        content: "I'm working on fraud detection where positive cases are only 0.5% of the data. Accuracy is 99.5% even with a dummy model. What should I do?",
        author: "data.sci@skillboost.edu",
        timestamp: Date.now() - 3600000 * 36,
        replies: [
          {
            content: "Do not use Accuracy. Use Precision, Recall, F1-Score, or ROC-AUC. You can also apply SMOTE (oversampling the minority class), downsampling, or adjust class weights in the loss function.",
            author: "stats.pro@skillboost.edu",
            timestamp: Date.now() - 3600000 * 32
          }
        ]
      }
    ],
    'data-analytics': [
      {
        id: 'da-d1',
        title: "How do I create a dynamic calendar table in Power BI?",
        content: "Should I write it in DAX or generate it in Power Query? Which is better for performance?",
        author: "analyst.sam@skillboost.edu",
        timestamp: Date.now() - 3600000 * 20,
        replies: [
          {
            content: "It is generally better to create calendar tables in Power Query (M code) because it compresses better and keeps the model clean, though DAX CALENDARAUTO() is fine for quick setups.",
            author: "bi.expert@skillboost.edu",
            timestamp: Date.now() - 3600000 * 16
          }
        ]
      }
    ],
    'web-dev': [
      {
        id: 'wd-d1',
        title: "What is the difference between LocalStorage and SessionStorage?",
        content: "Both store key-value pairs in the browser, but how do they handle persistence?",
        author: "web.learner@skillboost.edu",
        timestamp: Date.now() - 3600000 * 10,
        replies: [
          {
            content: "LocalStorage persists indefinitely until cleared manually. SessionStorage only persists as long as the tab/window is open, and is wiped once the tab is closed.",
            author: "fullstack.dev@skillboost.edu",
            timestamp: Date.now() - 3600000 * 8
          }
        ]
      }
    ],
    cybersecurity: [
      {
        id: 'sec-d1',
        title: "What is the difference between hashing and encryption?",
        content: "Are they both used to hide passwords? Can I decrypt a hash?",
        author: "sec.newbie@skillboost.edu",
        timestamp: Date.now() - 3600000 * 28,
        replies: [
          {
            content: "Hashing is a one-way function (cannot be decrypted, e.g. SHA-256 for passwords). Encryption is a two-way function designed to be decrypted later using keys (e.g. AES for messages).",
            author: "infosec.pro@skillboost.edu",
            timestamp: Date.now() - 3600000 * 24
          }
        ]
      }
    ],
    cloud: [
      {
        id: 'cloud-d1',
        title: "What is the difference between a container and a virtual machine?",
        content: "Both run isolated software, but how do they share hardware?",
        author: "cloud.student@skillboost.edu",
        timestamp: Date.now() - 3600000 * 14,
        replies: [
          {
            content: "Virtual Machines package a full guest OS, hypervisor, and application (heavy). Containers share the host OS kernel and package only the application and libraries (lightweight).",
            author: "devops.lead@skillboost.edu",
            timestamp: Date.now() - 3600000 * 11
          }
        ]
      }
    ]
  };

  localStorage.setItem('skillboost-doubts', JSON.stringify(initialDoubts));
}

function renderDoubtsBoard(skillId) {
  const container = document.getElementById('doubtsBoard');
  if (!container) return;

  const doubtsDb = JSON.parse(localStorage.getItem('skillboost-doubts') || '{}');
  const skillDoubts = doubtsDb[skillId] || [];

  let html = '';

  // 1. Post Question Form
  if (currentUser) {
    html += `
      <div class="post-doubt-card" style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2.5rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🙋</span> Ask a New Doubt
        </h3>
        <form id="postDoubtForm" style="display: flex; flex-direction: column; gap: 1rem;">
          <input type="text" id="doubtTitle" class="form-input" style="background: var(--bg); border: 1px solid var(--border); color: var(--text); padding: 0.75rem; border-radius: var(--radius); font-size: 0.9rem;" required placeholder="Brief title of your doubt (e.g. Understanding semantic tags)">
          <textarea id="doubtContent" class="form-input" rows="3" style="background: var(--bg); border: 1px solid var(--border); color: var(--text); padding: 0.75rem; border-radius: var(--radius); font-size: 0.9rem; resize: vertical;" required placeholder="Describe what you are struggling with in detail..."></textarea>
          <button type="submit" class="btn btn-primary" style="align-self: flex-start; padding: 0.6rem 1.2rem; font-size: 0.85rem;">Post Question</button>
        </form>
      </div>
    `;
  } else {
    html += `
      <div class="doubts-auth-prompt" style="text-align: center; padding: 2rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); margin-bottom: 2.5rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">Sign in to ask a new doubt or reply to other students.</p>
        <button class="btn btn-primary" id="doubtsSignInBtn" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">Sign In to Participate</button>
      </div>
    `;
  }

  // 2. Questions List
  if (skillDoubts.length === 0) {
    html += `
      <div style="text-align: center; padding: 3rem 1.5rem; color: var(--text-muted);">
        <p style="font-size: 1rem; margin-bottom: 0.5rem;">No doubts posted yet for this skill.</p>
        <p style="font-size: 0.8rem;">Be the first to ask a question!</p>
      </div>
    `;
  } else {
    const doubtItemsHtml = skillDoubts.map((doubt) => {
      const dateStr = new Date(doubt.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const avatarInitial = doubt.author ? doubt.author.charAt(0).toUpperCase() : 'U';

      const repliesHtml = (doubt.replies || []).map(reply => {
        const repAvatar = reply.author ? reply.author.charAt(0).toUpperCase() : 'U';
        const repDate = new Date(reply.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        return `
          <div class="doubt-reply-item" style="display: flex; gap: 0.75rem; padding: 1rem; background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); margin-top: 0.75rem;">
            <span style="flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--surface); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; border: 1px solid var(--border);">
              ${repAvatar}
            </span>
            <div style="flex-grow: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">${reply.author}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${repDate}</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text); white-space: pre-line; margin: 0; line-height: 1.5;">${escapeHTML(reply.content)}</p>
            </div>
          </div>
        `;
      }).join('');

      let replyFormHtml = '';
      if (currentUser) {
        replyFormHtml = `
          <form class="doubt-reply-form" data-doubt-id="${doubt.id}" style="display: flex; gap: 0.5rem; margin-top: 1rem; align-items: center;">
            <input type="text" class="form-input reply-input" style="flex-grow: 1; background: var(--bg); border: 1px solid var(--border); color: var(--text); padding: 0.5rem 0.75rem; border-radius: 8px; font-size: 0.85rem;" required placeholder="Write a helpful response...">
            <button type="submit" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem; flex-shrink: 0;">Reply</button>
          </form>
        `;
      }

      return `
        <div class="doubt-card" style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
            <span style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; background: var(--gradient); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700;">
              ${avatarInitial}
            </span>
            <div style="flex-grow: 1;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">${doubt.author}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${dateStr}</span>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; line-height: 1.4;">${escapeHTML(doubt.title)}</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted); white-space: pre-line; margin: 0; line-height: 1.6;">${escapeHTML(doubt.content)}</p>
            </div>
          </div>
          
          <div class="doubt-replies-section" style="border-top: 1px solid var(--border); padding-top: 0.5rem; margin-left: 2.75rem;">
            ${repliesHtml ? `
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent); margin-bottom: 0.25rem;">Replies (${doubt.replies.length}):</div>
              ${repliesHtml}
            ` : '<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem;">No replies yet.</div>'}
            ${replyFormHtml}
          </div>
        </div>
      `;
    }).join('');

    html += `<div class="doubts-list">${doubtItemsHtml}</div>`;
  }

  container.innerHTML = html;

  const daBtn = document.getElementById('doubtsSignInBtn');
  if (daBtn) {
    daBtn.addEventListener('click', () => {
      openAuthModal('signin');
    });
  }

  const postForm = document.getElementById('postDoubtForm');
  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('doubtTitle').value.trim();
      const content = document.getElementById('doubtContent').value.trim();
      if (!title || !content) return;

      const newDoubt = {
        id: `${skillId}-d-${Date.now()}`,
        title,
        content,
        author: currentUser.email,
        timestamp: Date.now(),
        replies: []
      };

      const db = JSON.parse(localStorage.getItem('skillboost-doubts') || '{}');
      if (!db[skillId]) db[skillId] = [];
      db[skillId].push(newDoubt);
      localStorage.setItem('skillboost-doubts', JSON.stringify(db));

      renderDoubtsBoard(skillId);
    });
  }

  const replyForms = container.querySelectorAll('.doubt-reply-form');
  replyForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const doubtId = form.dataset.doubtId;
      const input = form.querySelector('.reply-input');
      const content = input.value.trim();
      if (!content) return;

      const db = JSON.parse(localStorage.getItem('skillboost-doubts') || '{}');
      const doubts = db[skillId] || [];
      const doubt = doubts.find(d => d.id === doubtId);
      if (doubt) {
        if (!doubt.replies) doubt.replies = [];
        doubt.replies.push({
          content,
          author: currentUser.email,
          timestamp: Date.now()
        });
        localStorage.setItem('skillboost-doubts', JSON.stringify(db));
      }

      renderDoubtsBoard(skillId);
    });
  });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', async () => {
  initSupabase();
  await checkAuthSession();
  setupAuthListener();
  initLocalStorageDoubts();

  updateAuthUI();
  initRouter();
});

