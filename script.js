// Mode toggle
const toggleBtn = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '🩵 Light Blue';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '🩵 Light Blue' : '💙 Dark Blue';
});

// Menu highlight
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

// Efek animasi saat scroll masuk
document.addEventListener('DOMContentLoaded', () => {
  const fadeEl = document.querySelector('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fadeEl.classList.add('visible');
      }
    });
  });

  observer.observe(fadeEl);
});

function showMore() {
  const moreText = document.getElementById("moreText");
  moreText.classList.toggle("d-none");
}

// Animate progress bars when they are in view
document.addEventListener('DOMContentLoaded', function () {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');

  function showProgress() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        bar.style.width = value + '%';
        bar.textContent = value + '%';
      });
      window.removeEventListener('scroll', showProgress);
    }
  }

  window.addEventListener('scroll', showProgress);
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (fullName && email && phone && address) {
      alertBox.classList.remove('d-none');
      contactForm.reset();

      setTimeout(() => {
        alertBox.classList.add('d-none');
      }, 5000);
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (fullName && email && phone && address && message) {
    response.classList.remove("d-none");
    document.getElementById("contactForm").reset();

    setTimeout(() => {
      response.classList.add("d-none");
    }, 3000);
  } else {
    alert("Please complete all fields.");
  }
});




