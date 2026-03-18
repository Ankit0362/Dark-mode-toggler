const btn = document.getElementById("togglebtn");

// Support system preference and local storage
const currentTheme = localStorage.getItem("theme") || 
                     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  updateUI(true);
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateUI(isDark);
});

function updateUI(isDark) {
  if (isDark) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
}
