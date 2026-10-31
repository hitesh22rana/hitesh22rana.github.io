(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reduced.matches) continue;
      entry.target.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 500, easing: getComputedStyle(document.documentElement).getPropertyValue('--ease-out').trim() },
      );
    }
  }, { threshold: 0.12 });

  document.querySelectorAll('header, .intro > *, .section-heading, .projects > li, .company, .experience > li, .more-link, footer')
    .forEach((element) => observer.observe(element));
})();
