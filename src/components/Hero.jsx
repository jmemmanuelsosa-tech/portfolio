import { profile } from '../data.js'

function CodeCard() {
  return (
    <figure className="code-card" aria-label="Presentación en forma de código Java">
      <div className="code-bar">
        <span className="code-dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="code-file">Developer.java</span>
      </div>
      <pre className="code">
        <code>
          <span className="k">public record</span> <span className="t">Developer</span>(
          {'\n'}    <span className="t">String</span> name,
          {'\n'}    <span className="t">String</span> role,
          {'\n'}    <span className="t">List</span>&lt;<span className="t">String</span>&gt; stack,
          {'\n'}    <span className="t">boolean</span> openToWork
          {'\n'}) {'{}'}
          {'\n'}
          {'\n'}<span className="k">var</span> juan = <span className="k">new</span> <span className="t">Developer</span>(
          {'\n'}    <span className="s">"Juan Sosa"</span>,
          {'\n'}    <span className="s">"Java Backend"</span>,
          {'\n'}    <span className="t">List</span>.<span className="f">of</span>(<span className="s">"Spring Boot"</span>, <span className="s">"Jakarta EE"</span>,
          {'\n'}            <span className="s">"Docker"</span>, <span className="s">"Linux"</span>),
          {'\n'}    <span className="k">{String(profile.available)}</span>
          {'\n'});
        </code>
      </pre>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-text">
        <p className="eyebrow">
          <span className="nowrap">{profile.role}</span> <span className="sep">/</span>{' '}
          <span className="nowrap">{profile.focus}</span> <span className="sep">/</span>{' '}
          <span className="nowrap">{profile.location}</span>
        </p>

        <h1 className="hero-title">
          Construyo backends <em>sólidos</em>, seguros y fáciles de mantener.
        </h1>

        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">
            Descargar CV
          </a>
        </div>

        {profile.available && (
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Abierto a nuevas oportunidades
          </p>
        )}
      </div>

            <div className="hero-visual">
        <img
          className="hero-photo"
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          width="800"
          height="1000"
        />
        <CodeCard />
      </div>
    </section>
  )
}
