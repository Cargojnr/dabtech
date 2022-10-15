// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });

  const items = document.querySelectorAll ('#timeline li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0&& 
        rect.bottom <=
        (window.innerHeight ||
            document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth ||
                document.documentElement.clientWidth)
    );
};

const run = () =>
items.forEach(item => {
    if (isInViewport(item)) {
        item.classList.add('show');
    }
});

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

  
