const INTER_FONT =
  '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

export default function FooterSection() {
  return (
    <footer
      className="site-footer"
      style={{
        position: 'relative',
        zIndex: 100,
        overflow: 'hidden',
        background: '#000000',
        color: '#ffffff',
        fontFamily: INTER_FONT,
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'geometricPrecision',
      }}
    >
      {/* Animated dots strip */}
      <div className="footer-dots" aria-hidden="true" style={{ position: 'relative', height: 120, overflow: 'hidden', background: '#000000' }}>
        <div
          className="footer-dots__line"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            width: '200%',
            height: 70,
            opacity: 0.75,
            transform: 'translateY(-50%)',
            backgroundImage: [
              'radial-gradient(circle, rgb(255 255 255 / 0.55) 1.5px, transparent 2px)',
              'radial-gradient(circle, rgb(255 255 255 / 0.35) 1px, transparent 1.5px)',
              'radial-gradient(circle, rgb(255 255 255 / 0.45) 1.2px, transparent 1.8px)',
            ].join(', '),
            backgroundPosition: '0 8px, 24px 22px, 48px 14px',
            backgroundSize: '72px 38px, 110px 44px, 160px 52px',
            animation: 'footerDotsMove 18s linear infinite',
          }}
        />
      </div>

      {/* Footer inner */}
      <div className="site-footer__inner" style={{ margin: '0 auto', padding: 'clamp(34px, 4vw, 66px) 0 clamp(18px, 2vw, 34px)' }}>
        {/* Top grid */}
        <div className="site-footer__top">
          <h2 style={{ maxWidth: 680, margin: 0, color: '#ffffff', fontSize: 'clamp(34px, 3.5vw, 62px)', fontWeight: 220, letterSpacing: 0, lineHeight: 1.06 }}>
            Administration systèmes &amp; réseaux — prêt à rejoindre votre équipe.
          </h2>

          <nav aria-label="Navigation du pied de page" className="site-footer__nav">
            {[
              { label: 'Profil', href: '#about' },
              { label: 'Stage ICT Vision', href: '#stage' },
              { label: 'Compétences', href: '#services' },
              { label: 'Parcours', href: '#projects' },
              { label: 'Témoignages', href: '#feedback' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Liens de contact" className="site-footer__nav">
            {[
              { label: 'Email', href: 'mailto:majmaieayad@gmail.com' },
              { label: 'GSM', href: 'tel:+32465298047' },
              { label: 'Charleroi, Belgique', href: '#contact' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Liens sociaux" className="site-footer__nav">
            <a
              href="https://wa.me/32465298047?text=Bonjour%20Ayad%2C%20je%20vous%20contacte%20apr%C3%A8s%20avoir%20vu%20votre%20CV%20en%20ligne."
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link"
            >
              WhatsApp
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-nav-link">
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Brand row */}
        <div style={{ width: '100%', marginTop: 'clamp(18px, 3vw, 46px)' }}>
          <a href="#top" aria-label="Ayad Majmaie — retour en haut" className="site-footer__brand">
            <span aria-hidden="true" className="site-footer__mark">
              <span aria-hidden="true" className="site-footer__mark-pattern" />
            </span>
            <span className="site-footer__wordmark">Ayad&nbsp;Majmaie</span>
          </a>
        </div>

        {/* Legal line */}
        <div className="site-footer__legal">
          <p style={{ margin: 0 }}>© 2026 Ayad Majmaie. Tous droits réservés.</p>
          <a href="#privacy" className="footer-legal-link">Politique de confidentialité</a>
          <a href="#terms" className="footer-legal-link">Conditions d&apos;utilisation</a>
        </div>
      </div>
    </footer>
  )
}
