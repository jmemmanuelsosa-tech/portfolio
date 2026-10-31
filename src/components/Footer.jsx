import { useEffect, useState } from 'react'
import { profile } from '../data.js'

// Devuelve la hora actual en Argentina, ej: "21:51"
function localTime() {
  return new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: profile.timezone,
  }).format(new Date())
}

export default function Footer() {
  const [time, setTime] = useState(localTime)

  // Actualiza el reloj cada 30 segundos
  useEffect(() => {
    const id = setInterval(() => setTime(localTime()), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="footer container">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="muted">
        Santo Tomé, AR <span className="sep">/</span> {time}
      </p>
    </footer>
  )
}
