document.addEventListener("DOMContentLoaded", () => {
  console.log("Theme toggle script is running");

  // Check for saved preference first
  const savedTheme = localStorage.getItem("darkTheme");
  if (savedTheme === "true") {
    document.documentElement.classList.add("dark-theme");
  }

  // Create the toggle button
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.setAttribute("aria-label", "Toggle dark mode");
  themeToggle.innerHTML = "🌓";
  document.body.appendChild(themeToggle);

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    console.log("Theme toggled");

    // Save user preference
    const isDarkTheme =
      document.documentElement.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);
  });
});
