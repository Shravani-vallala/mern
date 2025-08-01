import { useState, useEffect, useRef } from 'react';
import '../App.css';

const slides = [
  {
    title: "Mukhyamantri Kamdhenu Scheme, Goa",
    buttonText: "Know More",
    backgroundImage: "/image.png",
    onClick: () => { alert('Know More clicked'); },
  },
  {
    title: "Most Trusted Livestock Marketplace",
    buttonText: "Buy / Book Now",
    backgroundImage: "/image1.png",
    onClick: () => { alert('Buy / Book Now clicked'); },
  },
  {
    title: "Fresh Cattle Offers",
    buttonText: "Explore",
    backgroundImage: "/image2.png",
    onClick: () => { alert('Explore clicked'); },
  },
  {
    title: "Verified Sellers",
    buttonText: "See Sellers",
    backgroundImage: "/image3.png",
    onClick: () => { alert('See Sellers clicked'); },
  },
];

export default function HeroSection() {
  const PAIR_SIZE = 2; // two slides side by side
  const totalPages = Math.ceil(slides.length / PAIR_SIZE);
  const [page, setPage] = useState(0); // which pair (0-based)
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const delay = 5000;

  const resetAuto = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // autoplay cycle through pairs
  useEffect(() => {
    resetAuto();
    timeoutRef.current = setTimeout(() => {
      setPage((p) => (p + 1) % totalPages);
    }, delay);
    return () => resetAuto();
  }, [page, totalPages]);

  // pause on hover
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const enter = () => resetAuto();
    const leave = () => {
      timeoutRef.current = setTimeout(() => {
        setPage((p) => (p + 1) % totalPages);
      }, delay);
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, [totalPages]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  // compute slice for current pair
  const startIdx = page * PAIR_SIZE;
  const currentPair = slides.slice(startIdx, startIdx + PAIR_SIZE);

  return (
    <div className="hero-pair-wrapper" ref={containerRef}>
      <div className="hero-pair">
        {currentPair.map((slide, idx) => (
          <div
            key={startIdx + idx}
            className="pair-slide"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="overlay">
              <h2>{slide.title}</h2>
              <button onClick={slide.onClick}>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow prev" onClick={prev} aria-label="Previous pair">
        ‹
      </button>
      <button className="arrow next" onClick={next} aria-label="Next pair">
        ›
      </button>

      <div className="controls">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`dot ${page === i ? 'selected' : ''}`}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
