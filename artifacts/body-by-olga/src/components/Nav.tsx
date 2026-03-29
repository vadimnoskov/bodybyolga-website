import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    menuRef.current?.classList.remove("open");
  };

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("open");
  };

  const scrollTo = (id: string) => {
    closeMenu();
    if (isHome) {
      const el = document.querySelector(id);
      if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <nav className="nav" ref={navRef} id="nav">
      <div className="ni">
        <Link href="/" className="nl" onClick={closeMenu}>Body by Olga</Link>
        <div className="nk" ref={menuRef} id="nk">
          {isHome ? (
            <>
              <a href="#method" onClick={(e) => { e.preventDefault(); scrollTo("#method"); }}>The Method</a>
              <a href="#results" onClick={(e) => { e.preventDefault(); scrollTo("#results"); }}>Results</a>
            </>
          ) : (
            <>
              <Link href="/#method" onClick={closeMenu}>The Method</Link>
              <Link href="/#results" onClick={closeMenu}>Results</Link>
            </>
          )}
          <Link href="/blog" onClick={closeMenu} style={location === "/blog" || location.startsWith("/blog/") ? { color: "var(--text)" } : {}}>Blog</Link>
          {isHome ? (
            <a href="#pricing" className="nc" onClick={(e) => { e.preventDefault(); scrollTo("#pricing"); }}>Start Free Trial</a>
          ) : (
            <Link href="/#pricing" className="nc" onClick={closeMenu}>Start Free Trial</Link>
          )}
          <Link href="/coaching" className="nq" onClick={closeMenu}>Coaching</Link>
        </div>
        <button className="nt" id="nt" aria-label="Menu" onClick={toggleMenu}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
