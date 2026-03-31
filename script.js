// Section references
const sections = {
  register: document.getElementById('registerSection'),
  login: document.getElementById('loginSection'),
  profile: document.getElementById('profileSection'),
  upload: document.getElementById('resumeSection')
};

function showSection(id) {
  Object.values(sections).forEach(section => section.classList.remove('active'));
  if (sections[id]) {
    sections[id].classList.add('active');
  }
}

// Navbar click handlers
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
  });
});

// Form transitions
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showSection('login');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showSection('profile');
});

document.getElementById('getProfileForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showSection('upload');
});

document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Resume uploaded (simulated).");
});
