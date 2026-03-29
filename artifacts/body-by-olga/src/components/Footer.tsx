import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ctn">
        <div className="ft-g">
          <div>
            <div className="ft-logo">Body by Olga</div>
            <p className="ft-tag">Strength, food skills, and consistency for women 40+. Strength is ageless.</p>
          </div>
          <div>
            <div className="ft-ct">Navigate</div>
            <div className="ft-lk">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#results">Results</Link>
              <Link href="/#pricing">Start Free Trial</Link>
              <Link href="/coaching">Coaching</Link>
            </div>
          </div>
          <div>
            <div className="ft-ct">Connect</div>
            <div className="ft-lk">
              <a href="https://www.instagram.com/olganoskov/" target="_blank" rel="noopener">Instagram</a>
              <a href="#">YouTube</a>
              <a href="mailto:hello@bodybyolga.app">hello@bodybyolga.app</a>
            </div>
          </div>
        </div>
        <div className="ft-b">
          <span className="ft-c">&copy; 2026 Body by Olga. All rights reserved.</span>
          <div className="ft-so">
            <a href="https://www.instagram.com/olganoskov/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
