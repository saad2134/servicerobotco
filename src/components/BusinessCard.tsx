'use client';

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface BusinessCardProps {
  isPrintOnly?: boolean;
}

export default function BusinessCard({ isPrintOnly = false }: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    setRotateX(-mouseY * 20);
    setRotateY(mouseX * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    setRotateX(0);
    setRotateY(0);
  };

  const cardStyle = {
    transform: isFlipped 
      ? "rotateY(180deg)" 
      : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
  };

  // Shared inner contents
  const FrontInner = () => (
    <>
      <div className="card-logo-container">
        <Image 
          src="/logos/mark.png" 
          alt="Service Robot Co. Mark" 
          width={32} 
          height={32}
          priority
        />
        <div>
          <div className="card-wordmark">Service Robot Co.</div>
          <div className="card-tagline">Commercial Robotics Integrator</div>
        </div>
      </div>
      
      <div className="card-middle">
        <div className="card-name">Operations & Integrations</div>
        <div className="card-job">Deployment, Training & Service</div>
      </div>
      
      <div className="card-footer-info">
        <div>
          <div className="card-contact-item">
            <span>✉</span>
            <span>team@servicerobotco.com</span>
          </div>
          <div className="card-contact-item">
            <span>📞</span>
            <span>(650) 362-8736</span>
          </div>
        </div>
        <div>
          <span>www.servicerobotco.com</span>
        </div>
      </div>
    </>
  );

  const BackInner = () => (
    <div className="card-back-content">
      <div className="card-qr-container">
        <svg width="64" height="64" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h7v7H0V0zm1 1v5h5V1H1zm1 1h3v3H2V2zm6-2h1v1H8V0zm1 2h1v1H9V2zM8 3h2v1H8V3zm0 2h1v1H8V5zm1-4h1v1H9V1zm11-1h7v7h-7V0zm1 1v5h5V1h-5zm1 1h3v3h-3V2zM0 22h7v7H0v-7zm1 1v5h5v-5H1zm1 1h3v3H2v-3zm12-22h1v1h-1V2zm1 2h1v1h-1V4zm1-2h1v1h-1V2zm2 1h1v1h-1V3zm0-2h1v1h-1V1zm2 3h1v1h-1V4zm-4 2h2v1h-2V6zm2 2h1v1h-1V8zm-4-1h1v1h-1V7zm0 2h2v1h-2V9zm-2-1h1v1h-1V8zm3 4h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-3-1h1v1h-1v-1zm2 4h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm3-1h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-7-9h1v1H8v-1zm1 1h1v1H9v-1zm-2 2h1v1H7v-1zm2 1h1v1H9v-1zm2-3h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm1 1h1v1h-1v-1zm2-3h1v1h-1v-1zm2-1h1v1h-1v-1zm-1 3h1v1h-1v-1zm2-2h1v1h-1v-1zm1 3h1v1h-1v-1zm-3 2h1v1h-1v-1zm1 1h1v1h-1v-1zm2-3h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm-4 4h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1zm7-5h1v1h-1v-1zm1 1h1v1h-1v-1zm-2 2h1v1h-1v-1z" fill="#B4FF00"/>
        </svg>
      </div>
      
      <div className="card-wordmark" style={{ fontSize: "1.25rem" }}>Service Robot Co.</div>
      <div className="card-back-details">
        ALL 50 STATES • REGIONAL SERVICE DEPOTS
        <div style={{ marginTop: "0.25rem", color: "#B4FF00", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Equipment Integration & 24/7 Field Maintenance
        </div>
      </div>
    </div>
  );

  // If in print-only mode, render BOTH sides flat next to each other
  if (isPrintOnly) {
    return (
      <div className="print-card-grid">
        <div className="card-scene print-scene-layout">
          <div className="card-frame static-frame">
            <div className="card-face card-face-front">
              <FrontInner />
            </div>
          </div>
        </div>
        <div className="card-scene print-scene-layout">
          <div className="card-frame static-frame">
            <div className="card-face card-face-back" style={{ transform: "none" }}>
              <BackInner />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="card-scene"
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className={`card-frame ${isFlipped ? "is-flipped" : ""}`}
        style={cardStyle}
      >
        {/* FRONT SIDE */}
        <div 
          className="card-face card-face-front"
          style={{ 
            visibility: isFlipped ? "hidden" : "visible",
            opacity: isFlipped ? 0 : 1,
            transition: "opacity 0.2s ease, visibility 0.2s"
          }}
        >
          <FrontInner />
        </div>

        {/* BACK SIDE */}
        <div 
          className="card-face card-face-back"
          style={{ 
            visibility: !isFlipped ? "hidden" : "visible",
            opacity: !isFlipped ? 0 : 1,
            transition: "opacity 0.2s ease, visibility 0.2s"
          }}
        >
          <BackInner />
        </div>
      </div>
    </div>
  );
}
