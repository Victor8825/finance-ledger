const headerRef = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const headerHeight = headerRef.offsetHeight;
  document.documentElement.style.setProperty(
    '--scroll-padding',
    headerHeight - 1 + 'px'
  );
  if (document.body.clientWidth >= 768) {
    if (window.scrollY > 120) {
      // console.log('show header opacity');
      headerRef.classList.add('header--scroll');
    } else {
      headerRef.classList.remove('header--scroll');
    }
  } else {
    if (window.scrollY > 70) {
      // console.log('show header opacity');
      headerRef.classList.add('header--scroll');
    } else {
      // console.log('hide header opacity');
      headerRef.classList.remove('header--scroll');
    }
  }
});
