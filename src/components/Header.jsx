import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
]

function getInitialTheme() {
  const saved = document.documentElement.dataset.theme
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [scrolled, setScrolled] = useState(false)

  // Guarda el tema elegido y lo aplica al <html>
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // si el navegador no deja guardar, se ignora
    }
  }, [theme])

  // Agrega un borde inferior al header cuando se hace scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container topbar-inner">
        <a href="#top" className="brand" aria-label="Inicio">
          <span className="brand-mark">js</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="Secciones">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? 'Claro' : 'Oscuro'}
        </button>
      </div>
    </header>
  )
}
