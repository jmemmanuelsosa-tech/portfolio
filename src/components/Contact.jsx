import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  // Copia el email al portapapeles y muestra "Copiado" por 2 segundos
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contacto" index="05" title="Contacto">
      <div className="contact">
        <p className="contact-lead">
          ¿Tenés un proyecto o una búsqueda abierta? <em>Hablemos.</em>
        </p>

        <div className="contact-email">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button onClick={copyEmail} className="copy-btn">
            {copied ? 'Copiado' : 'Copiar'}
          </button>
        </div>

        <ul className="contact-links">
          <li>
            <span className="muted">LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              /in/jmemmanuelsosa <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <span className="muted">GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              @jmemmanuelsosa-tech <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <span className="muted">WhatsApp</span>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              {profile.phone} <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}
