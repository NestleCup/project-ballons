let navItems = document.querySelectorAll('.burger-menu__link');
const navToggle = document.querySelector('#burger-toggle');

navItems.forEach((item) => {
  item.addEventListener('click', function () {
    if (navToggle.checked) {
      navToggle.checked = false;
    } else {
      navToggle.checked = true;
    }
  });
});
