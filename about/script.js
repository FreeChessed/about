document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.inner-wrapper, .nav-item');
  const footer = document.querySelector('.footer');

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => {
        nav.classList.remove('nav-item');
        nav.classList.add('inner-wrapper');
        const label = nav.querySelector('.label, .text-wrapper');
        if (label) {
          label.className = 'text-wrapper';
        }
      });

      this.classList.remove('inner-wrapper');
      this.classList.add('nav-item');
      const label = this.querySelector('.label, .text-wrapper');
      if (label) {
        label.className = 'label';
      }
    });
  });

  footer.addEventListener('click', () => {
    footer.style.transform = 'scale(0.98)';
    setTimeout(() => {
      footer.style.transform = 'scale(1)';
    }, 200);
  });

  const logo = document.querySelector('.logo');
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => {
    logo.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      logo.style.transform = 'rotate(0deg)';
    }, 2000);
  });
  logo.style.transition = 'transform 2s ease';
});
</script>
