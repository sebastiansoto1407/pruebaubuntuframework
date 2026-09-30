import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>U</span>
          <span>Ubuntu Cloud</span>
        </div>
        <span className={styles.frameworkBadge}>Next.js framework</span>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.eyebrow}><span className={styles.liveDot} /> INSTANCIA EN LINEA</div>
          <h1>Tu sitio ya esta corriendo en Oracle Cloud.</h1>
          <p className={styles.lead}>
            Una base moderna con Next.js, lista para crecer sobre tu maquina virtual Ubuntu.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              Ver documentacion <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondary} href="https://github.com/sebastiansoto1407/pruebaubuntuframework" target="_blank" rel="noreferrer">
              Abrir repositorio
            </a>
          </div>
        </section>

        <section className={styles.statusPanel} aria-label="Estado de la instancia">
          <div className={styles.statusHeader}>
            <div>
              <span className={styles.panelKicker}>Resumen de despliegue</span>
              <h2>pruebahtml</h2>
            </div>
            <span className={styles.status}><span className={styles.statusDot} /> Running</span>
          </div>
          <div className={styles.details}>
            <div><span>IP publica</span><strong>137.131.130.209</strong></div>
            <div><span>IP privada</span><strong>10.0.0.251</strong></div>
            <div><span>Framework</span><strong>Next.js 16</strong></div>
            <div><span>Entorno</span><strong>Ubuntu / Node.js</strong></div>
          </div>
          <div className={styles.footerNote}>
            <span className={styles.checkIcon}>✓</span>
            Servidor preparado para recibir trafico web
          </div>
        </section>
      </main>

      <footer className={styles.footer}>Construido para <strong>pruebaubuntu</strong> <span>•</span> Produccion lista</footer>
    </div>
  );
}
