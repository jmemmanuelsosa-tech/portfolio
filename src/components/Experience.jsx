import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experiencia" index="01" title="Experiencia">
      {experience.map((job) => (
        <article key={job.company} className="row">
          <p className="row-meta">{job.period}</p>
          <div className="row-content">
            <h3 className="row-title">
              {job.role} <span className="at">en</span> {job.company}
            </h3>
            <ul className="points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="tags">
              {job.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Section>
  )
}
