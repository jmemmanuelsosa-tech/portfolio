import Section from './Section.jsx'
import { education, languages } from '../data.js'

export default function Education() {
  return (
    <Section id="formacion" index="04" title="Formación">
      {education.map((e) => (
        <article key={e.title} className="row">
          <p className="row-meta">{e.period}</p>
          <div className="row-content">
            <h3 className="row-title">{e.title}</h3>
            <p className="row-sub">{e.place}</p>
            {e.summary && <p className="row-summary">{e.summary}</p>}
          </div>
        </article>
      ))}

      <article className="row">
        <p className="row-meta">Idiomas</p>
        <div className="row-content">
          <ul className="langs">
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  )
}