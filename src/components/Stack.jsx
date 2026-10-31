import { useRef } from 'react'
import Section from './Section.jsx'
import { skills } from '../data.js'

function SkillCard({ group, items, index }) {
  const ref = useRef(null)

  // Inclina la tarjeta según dónde esté el mouse
  function handleMove(e) {
    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    card.style.setProperty('--rx', `${-y * 8}deg`)
    card.style.setProperty('--ry', `${x * 8}deg`)
    card.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    card.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  function handleLeave() {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className="skill-card" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="skill-card-top">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{items.length} tecnologías</span>
      </div>
      <h3 className="skill-title">{group}</h3>
      <ul className="skill-items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Stack() {
  const all = skills.flatMap((g) => g.items)

  return (
    <Section id="stack" index="03" title="Stack">
      {/* La lista va duplicada para que la cinta se repita sin cortes */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...all, ...all].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <div className="skill-grid">
        {skills.map((g, i) => (
          <SkillCard key={g.group} index={i} group={g.group} items={g.items} />
        ))}
      </div>
    </Section>
  )
}