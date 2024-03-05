let sidebarSwitch = false;

// sidebar handler function
function sidebarHandler() {
  if (sidebarSwitch) {
    sidebar.style.transform = 'translateX(-100%)';
    content.style.transform = 'translateX(0)';
    sidebarSwitch = !sidebarSwitch;
  } else {
    sidebar.style.transform = 'translateX(0)';
    content.style.transform = 'translateX(75%)';
    sidebarSwitch = !sidebarSwitch;
  }
}


// sidebar handler function
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  let isMobileView = window.innerWidth < 768;

  main.addEventListener('scroll', function() {
    var currentScroll = main.scrollTop;
    if (isMobileView && !sidebarSwitch && currentScroll > lastScrollTop) {
      // Scrolling down
      header.classList.add('header--hidden');
    } else {
      // Scrolling up
      header.classList.remove('header--hidden');
    }
    lastScrollTop = currentScroll;
  });
});


