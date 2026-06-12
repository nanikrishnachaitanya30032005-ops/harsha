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
              <div class="skill-detail-meta">
                <button class="btn btn-primary" id="startLearningBtn" data-skill="${skillId}">Start Learning</button>
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
    </main>
    ${renderFooter()}
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;


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
}

function initRouter() {
  window.addEventListener('hashchange', () => {
    navInitialized = false;
    renderApp();
    initNav();
    if (getSkillIdFromHash()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      initSkillDetailPage();
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

  grid.innerHTML = SKILLS.map(
    (s) => `
      <a href="#skill/${s.id}" class="skill-card" data-skill="${s.id}">
        <div class="skill-icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <span class="skill-card-link">View Details →</span>
      </a>
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
  renderApp();
  initNav();
  
  if (getSkillIdFromHash()) {
    initSkillDetailPage();
  } else {
    initHomePage();
  }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', async () => {
  initSupabase();
  await checkAuthSession();
  setupAuthListener();

  updateAuthUI();
  initRouter();
});
