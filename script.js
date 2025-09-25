// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!form.checkValidity()) {
    status.textContent = "Please fill all fields correctly.";
    return;
  }

  if (message.length < 10) {
    status.textContent = "Message must be at least 10 characters.";
    return;
  }

  status.textContent = "Thanks! Your message was saved locally (demo).";

  // Demo: Save to localStorage
  const saved = JSON.parse(localStorage.getItem("messages") || "[]");
  saved.push({ name, email, message, time: new Date().toISOString() });
  localStorage.setItem("messages", JSON.stringify(saved));

  form.reset();
});
