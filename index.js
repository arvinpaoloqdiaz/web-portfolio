const changeTheme = document.getElementById('mode');
changeTheme.onchange = (e) => {
  if (changeTheme.checked === false) {
    console.log("Checked")

    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  } else {
    console.log("Not Checked")
    
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
  }
}
const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  changeTheme.checked = false;
  document.documentElement.classList.remove("light")
  document.documentElement.classList.add("dark")
}

if (mode == 'light') {
  changeTheme.checked = true;
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")
}