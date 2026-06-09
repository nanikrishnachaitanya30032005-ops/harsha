let supabaseClient = null;

function initSupabase() {
  const url = window.SUPABASE_CONFIG?.url || '';
  const anonKey = window.SUPABASE_CONFIG?.anonKey || '';
  if (!url || !anonKey) {
    return null;
  }

  try {
    supabaseClient = window.supabase.createClient(url, anonKey);
    return supabaseClient;
  } catch (err) {
    console.error('Supabase initialization failed:', err);
    return null;
  }
}

function setActiveTab(tabName) {
  document.querySelectorAll('.auth-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  document.querySelectorAll('.auth-form').forEach((form) => {
    form.classList.toggle('active', form.id === `${tabName}Form`);
  });
  hideAuthMessages();
}

function hideAuthMessages() {
  const errorElements = document.querySelectorAll('.form-alert.error');
  const successElements = document.querySelectorAll('.form-alert.success');
  errorElements.forEach((el) => { el.hidden = true; el.textContent = ''; });
  successElements.forEach((el) => { el.hidden = true; el.textContent = ''; });
}

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

function showSuccess(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
}

async function handleSignIn(event) {
  event.preventDefault();
  hideAuthMessages();

  if (!supabaseClient) {
    showError('signInError', 'Unable to connect to Supabase. Please check your config.');
    return;
  }

  const email = document.getElementById('signInEmail').value.trim();
  const password = document.getElementById('signInPassword').value.trim();
  if (!email || !password) {
    showError('signInError', 'Please enter both email and password.');
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;

    if (data.user) {
      showSuccess('signInSuccess', 'Welcome back! Redirecting to home...');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    }
  } catch (err) {
    console.error('Sign in failed:', err);
    showError('signInError', err.message || 'Sign in failed.');
  }
}

async function handleSignUp(event) {
  event.preventDefault();
  hideAuthMessages();

  if (!supabaseClient) {
    showError('signUpError', 'Unable to connect to Supabase. Please check your config.');
    return;
  }

  const email = document.getElementById('signUpEmail').value.trim();
  const password = document.getElementById('signUpPassword').value.trim();
  if (!email || !password) {
    showError('signUpError', 'Please enter both email and password.');
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) throw error;

    if (data.user) {
      showSuccess('signUpSuccess', 'Account created! Check your email and then sign in.');
      setTimeout(() => {
        setActiveTab('signin');
      }, 1500);
    }
  } catch (err) {
    console.error('Sign up failed:', err);
    showError('signUpError', err.message || 'Sign up failed.');
  }
}

async function checkSession() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      console.error('Supabase session check error:', error);
      return;
    }
    if (data?.session) {
      showSuccess('signInSuccess', 'Already signed in. Redirecting to home...');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    }
  } catch (err) {
    console.error('Session check failed:', err);
  }
}

function initAuthPage() {
  const connected = initSupabase();
  if (!connected) {
    showError('signInError', 'Supabase configuration missing. Please check js/config.js.');
    showError('signUpError', 'Supabase configuration missing. Please check js/config.js.');
  }

  document.querySelectorAll('.auth-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      setActiveTab(tab.dataset.tab);
    });
  });

  document.getElementById('signInForm')?.addEventListener('submit', handleSignIn);
  document.getElementById('signUpForm')?.addEventListener('submit', handleSignUp);

  checkSession();
}

document.addEventListener('DOMContentLoaded', initAuthPage);
