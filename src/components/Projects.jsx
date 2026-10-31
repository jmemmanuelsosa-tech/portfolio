import Section from './Section.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="proyectos" index="02" title="Proyectos">
      <ol className="projects">
        {projects.map((p, i) => (
          <li key={p.title} className="project">
            <span className="project-num">{String(i + 1).padStart(2, '0')}</span>

            <div className="project-main">
              <p className="project-kind">
                {p.kind} <span className="sep">/</span> {p.year}
              </p>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer">
                  Código <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Demo <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
