import { useEffect, useRef, useState } from 'react'

// Molde de cada sección: número, título y animación al aparecer
export default function Section({ id, index, title, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`section container ${visible ? 'is-visible' : ''}`}>
      <header className="section-head">
        <span className="section-index">{index}</span>
        <h2 className="section-title">{title}</h2>
      </header>
      <div className="section-body">{children}</div>
    </section>
  )
}
