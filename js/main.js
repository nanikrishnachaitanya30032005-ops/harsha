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
const SUBJECT_OPTIONS = [
  { value: 'skills', label: 'Skill Guidance' },
  { value: 'career', label: 'Career Roadmap' },
  { value: 'resources', label: 'Learning Resources' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' },
];

const STORAGE_KEY = 'skillboost-progress';

const HASH = (id) => `#${id}`;

function getSkillIdFromHash() {
  const hash = window.location.hash || '';
  const match = hash.match(/^#skill\/([a-z0-9-]+)$/);
  return match ? match[1] : null;
}

function getSkillById(id) {
  return SKILLS.find((s) => s.id === id);
}

/* ===== Utilities ===== */
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
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
      await fetchAndMergeSupabaseProgress();
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
      const isNewUser = !currentUser;
      currentUser = session.user;
      if (isNewUser) {
        await uploadOfflineProgressToSupabase();
        await fetchAndMergeSupabaseProgress();
      }
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
  localStorage.removeItem(STORAGE_KEY);
  updateAuthUI();
}

/* ===== Sync Helper Functions ===== */
function showSyncingState(isSyncing) {
  const indicators = document.querySelectorAll('#syncStatusIndicator');
  indicators.forEach(indicator => {
    if (isSyncing) {
      indicator.innerHTML = `<span class="sync-spinner"></span> <span class="sync-text">Syncing...</span>`;
      indicator.className = 'sync-indicator';
    }
  });
}

function showSyncSuccess() {
  const indicators = document.querySelectorAll('#syncStatusIndicator');
  indicators.forEach(indicator => {
    indicator.innerHTML = `<span class="status-dot" style="background-color:var(--success)"></span> <span class="sync-text" style="color:var(--success)">Synced</span>`;
    indicator.className = 'sync-indicator';
  });
}

function showSyncError() {
  const indicators = document.querySelectorAll('#syncStatusIndicator');
  indicators.forEach(indicator => {
    indicator.innerHTML = `<span class="status-dot" style="background-color:var(--warning)"></span> <span class="sync-text" style="color:var(--warning)">Sync Error</span>`;
    indicator.className = 'sync-indicator';
  });
}

async function uploadOfflineProgressToSupabase() {
  if (!supabaseClient || !currentUser) return;
  const localData = getProgress();
  const entries = Object.entries(localData);
  if (entries.length === 0) return;

  showSyncingState(true);
  const upsertData = entries.map(([skillId, val]) => ({
    user_id: currentUser.id,
    skill_id: skillId,
    progress_percent: val,
    updated_at: new Date().toISOString()
  }));

  try {
    const { error } = await supabaseClient
      .from('skillboost_progress')
      .upsert(upsertData, { onConflict: 'user_id,skill_id' });
    if (error) throw error;
    showSyncSuccess();
  } catch (err) {
    console.error('Error uploading offline progress:', err);
    showSyncError();
  }
}

async function fetchAndMergeSupabaseProgress() {
  if (!supabaseClient || !currentUser) return;
  showSyncingState(true);
  try {
    const { data, error } = await supabaseClient
      .from('skillboost_progress')
      .select('skill_id, progress_percent');
    if (error) throw error;

    const localData = getProgress();
    let merged = { ...localData };
    if (data && data.length > 0) {
      data.forEach(row => {
        merged[row.skill_id] = Math.max(localData[row.skill_id] || 0, row.progress_percent);
      });
    }
    saveProgress(merged, false);
    
    // Re-render local progress sections if present
    renderProgress();
    showSyncSuccess();
  } catch (err) {
    console.error('Error fetching progress from Supabase:', err);
    showSyncError();
  }
}

async function syncAllProgressToSupabase(data) {
  if (!supabaseClient || !currentUser) return;
  showSyncingState(true);
  const entries = Object.entries(data);
  if (entries.length === 0) {
    showSyncSuccess();
    return;
  }
  const upsertData = entries.map(([skillId, val]) => ({
    user_id: currentUser.id,
    skill_id: skillId,
    progress_percent: val,
    updated_at: new Date().toISOString()
  }));
  try {
    const { error } = await supabaseClient
      .from('skillboost_progress')
      .upsert(upsertData, { onConflict: 'user_id,skill_id' });
    if (error) throw error;
    showSyncSuccess();
  } catch (err) {
    console.error('Sync error:', err);
    showSyncError();
  }
}

function saveProgress(data, sync = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  if (sync && supabaseClient && currentUser) {
    syncAllProgressToSupabase(data);
  }
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
            <div id="syncStatusIndicator" class="sync-indicator">
              <span class="status-dot" style="background-color:var(--success)"></span> <span class="sync-text">Synced</span>
            </div>
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
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('progress'), label: 'Progress' },
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
    { href: HASH('quiz'), label: 'Quiz' },
    { href: HASH('progress'), label: 'Progress' },
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



function renderSkillDetailPage(skillId) {
  const skill = getSkillById(skillId);
  const detail = getSkillDetail(skillId);

  if (!skill || !detail) {
    return null;
  }

  const progress = getProgress()[skillId] || 0;

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
                <span class="skill-progress-badge">${progress}% Complete</span>
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
            <a href="index.html#progress" class="btn btn-secondary btn-lg">Track Your Progress</a>
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
  renderQuiz();
  renderProgress();
  renderResources();
}

function initSkillDetailPage() {
  const skillId = getSkillIdFromHash();
  if (!skillId) return;

  const startLearning = (id) => {
    const data = getProgress();
    if (!data[id] || data[id] === 0) {
      data[id] = 10;
      saveProgress(data);
      const badge = document.querySelector('.skill-progress-badge');
      if (badge) badge.textContent = '10% Complete';
    }
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
    if (CURRENT_PAGE === 'home') {
      if (getSkillIdFromHash()) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initSkillDetailPage();
      } else {
        initHomePage();
      }
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
