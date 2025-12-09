const PROFILE_TEXT = {
    title: "Profile",
    welcome: "Welcome to your profile page.",
    namePrefix: "Name: ",
    emailPrefix: "Email: ",
    logout: "Logout",
  };
  
  window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
    }, 3000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      // لو مفيش User، رجّعيه للـ Home
      window.location.href = "index.html";
      return;
    }
  
    const user = JSON.parse(raw);
  
    document.getElementById("profile-title").textContent = PROFILE_TEXT.title;
    document.getElementById("profile-welcome").textContent =
      PROFILE_TEXT.welcome;
  
    document.getElementById("profile-name-line").textContent =
      PROFILE_TEXT.namePrefix + (user.name || "");
    document.getElementById("profile-email-line").textContent =
      PROFILE_TEXT.emailPrefix + (user.email || "");
  
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.textContent = PROFILE_TEXT.logout;
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "index.html";
    });
  });
  