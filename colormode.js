var icon = document.getElementById("icon");
const isdarkmode = localStorage.getItem('darkmode') === 'enabled';

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "asset/UI ICON/sun.png";
    // Set dark mode in local storage
    localStorage.setItem('darkmode', 'enabled');
  } else {
    icon.src = "asset/UI ICON/moon.png";
    // Remove dark mode from local storage
    localStorage.removeItem('darkmode');
  }
}

// Apply dark mode if previously enabled
if (isdarkmode) {
  document.body.classList.add('dark-theme');
} else {
	document.body.classList.Remove('dark-theme');
}
