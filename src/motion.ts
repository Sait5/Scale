export function setupMotion() {
  const targets = document.querySelectorAll('section, .product-panel, .text-generator, .provider, .architecture-layers article, .resource-card, .application-card, .site-footer')
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle('in-view', entry.isIntersecting)
  }, { threshold: 0.12 })
  targets.forEach(target => observer.observe(target))
  const visibility = () => document.documentElement.classList.toggle('page-hidden', document.hidden)
  document.addEventListener('visibilitychange', visibility)
  return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility) }
}
