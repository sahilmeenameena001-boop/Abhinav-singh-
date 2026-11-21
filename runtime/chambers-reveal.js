const teamCopy = document.querySelector(".chambers-team-copy");

if (teamCopy && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      teamCopy.classList.add("is-revealed");
      observer.disconnect();
    }
  }, { threshold: 0.25 });

  observer.observe(teamCopy);
}
