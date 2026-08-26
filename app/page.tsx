"use client";

import { useEffect, useState } from "react";

const chapters = ["Dawn", "About", "Journey", "Work", "Notes", "Dusk"];

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const jump = (index: number) => {
    document.getElementById(`chapter-${index}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ "--journey": progress } as React.CSSProperties}>
      <div className="world" aria-hidden="true">
        <div className="stars" />
        <div className="sun" />
        <div className="haze" />
        <div className="range range-far" />
        <div className="range range-mid" />
        <div className="range range-near" />
        <div className="trail"><span /></div>
        <div className="trees trees-left" />
        <div className="trees trees-right" />
      </div>

      <header className="topbar">
        <button className="mark" onClick={() => jump(0)} aria-label="Back to dawn">M<span>·</span></button>
        <div className="time"><span>{progress < .18 ? "SUNRISE" : progress > .82 ? "SUNSET" : "DAYLIGHT"}</span><b>{String(Math.round(progress * 100)).padStart(2, "0")}</b></div>
        <button className="availability">Available for new trails <i /></button>
      </header>

      <nav className="chapters" aria-label="Journey chapters">
        {chapters.map((label, index) => {
          const active = Math.round(progress * (chapters.length - 1)) === index;
          return <button key={label} onClick={() => jump(index)} className={active ? "active" : ""}><span>{label}</span><i /></button>;
        })}
      </nav>

      <section id="chapter-0" className="chapter hero">
        <p className="eyebrow">A personal landscape · 2026</p>
        <h1>YOUR<br /><em>NAME</em></h1>
        <p className="intro">Designer, developer, and curious human.<br />I make thoughtful things for the digital world.</p>
        <button className="begin" onClick={() => jump(1)}>Begin the ascent <span>↓</span></button>
      </section>

      <section id="chapter-1" className="chapter align-right">
        <div className="card"><p className="number">01 · MORNING LIGHT</p><h2>A little about<br />the person behind<br /><em>the work.</em></h2><p>This is where your story will live — what drives you, where you are, and the perspective you bring.</p></div>
      </section>

      <section id="chapter-2" className="chapter">
        <div className="card"><p className="number">02 · THE RIDGELINE</p><h2>The path so far.</h2><p>A place for your experience, education, and the moments that shaped your direction.</p><div className="placeholder-row"><span>Experience</span><span>Education</span><span>Milestones</span></div></div>
      </section>

      <section id="chapter-3" className="chapter align-right">
        <div className="card wide"><p className="number">03 · HIGH NOON</p><h2>Selected work,<br /><em>made with care.</em></h2><div className="project-grid"><article><b>01</b><span>Project title</span></article><article><b>02</b><span>Project title</span></article><article><b>03</b><span>Project title</span></article></div></div>
      </section>

      <section id="chapter-4" className="chapter">
        <div className="card"><p className="number">04 · GOLDEN HOUR</p><h2>Ideas gathered<br />along the way.</h2><p>Notes, experiments, photographs, or the things you are learning right now.</p></div>
      </section>

      <section id="chapter-5" className="chapter finale">
        <p className="eyebrow">The view is better together</p>
        <h2>LET&apos;S MAKE<br /><em>SOMETHING</em></h2>
        <a href="mailto:hello@example.com" className="contact">hello@example.com <span>↗</span></a>
        <footer><span>YOUR NAME © 2026</span><span>Made somewhere between sunrise and sunset.</span></footer>
      </section>
    </main>
  );
}
