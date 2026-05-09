"use client";

import { useRef, useEffect, useState, useCallback, CSSProperties } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 15;
const DEFAULT_SPOTLIGHT_RADIUS = 350;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: '#120F17',
    title: 'AI Chatbot',
    description: 'ChatGPT, Claude, Gemini & more',
    label: '12 TOOLS'
  },
  {
    color: '#120F17',
    title: 'AI Image',
    description: 'Midjourney, DALL-E, Firefly',
    label: '24 TOOLS'
  },
  {
    color: '#120F17',
    title: 'AI Video',
    description: 'Sora, Runway, Pika',
    label: '15 TOOLS'
  },
  {
    color: '#120F17',
    title: 'AI Automation',
    description: 'Zapier, Make, Bardeen',
    label: '14 TOOLS'
  },
  {
    color: '#120F17',
    title: 'AI Coding',
    description: 'Cursor, Copilot, Replit',
    label: '20 TOOLS'
  },
  {
    color: '#120F17',
    title: 'AI Writing',
    description: 'Jasper, Copy.ai, Rytr',
    label: '18 TOOLS'
  }
];

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 8px rgba(${color}, 0.8);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}: ParticleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    ) as HTMLDivElement[];
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

interface GlobalSpotlightProps {
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}: GlobalSpotlightProps) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }: { children: React.ReactNode, gridRef: React.RefObject<HTMLDivElement | null> }) => (
  <div
    className="bento-section grid gap-6 p-3 max-w-[70rem] select-none relative mx-auto"
    style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface MagicBentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  onSelect?: (cat: string | null) => void;
}

const MagicBento = ({
  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  onSelect
}: MagicBentoProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 flex items-center justify-between">
           <h2 className="text-5xl font-black text-white tracking-tighter">Browse By Categories</h2>
           <button 
             onClick={() => onSelect?.(null)}
             className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-purple-400 transition-all"
           >
             VIEW ALL TOOLS →
           </button>
        </div>

        <style>
          {`
            .bento-section {
              --glow-x: 50%;
              --glow-y: 50%;
              --glow-intensity: 0;
              --glow-radius: 200px;
              --glow-color: ${glowColor};
              --border-color: rgba(255, 255, 255, 0.08);
              --background-dark: #0f0c14;
              --white: hsl(0, 0%, 100%);
              --purple-primary: rgba(132, 0, 255, 1);
              --purple-glow: rgba(132, 0, 255, 0.2);
              --purple-border: rgba(132, 0, 255, 0.8);
            }
            
            .card-responsive {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-auto-rows: 200px;
              gap: 24px;
              width: 100%;
            }
            
            @media (max-width: 1023px) {
              .card-responsive {
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 250px;
              }
              .card-responsive .card { grid-column: span 1 !important; grid-row: span 1 !important; top: 0 !important; }
            }

            @media (min-width: 1024px) {
              .card-responsive .card:nth-child(1) { grid-column: span 5; grid-row: span 2; }
              .card-responsive .card:nth-child(2) { grid-column: span 3; grid-row: span 1; }
              .card-responsive .card:nth-child(3) { grid-column: span 4; grid-row: span 2; }
              .card-responsive .card:nth-child(4) { grid-column: span 3; grid-row: span 1; position: relative; top: -100px; left: -100%; }
              /* Adjusted for better flow based on audit */
              .card-responsive .card:nth-child(2) { grid-column: 6 / span 3; grid-row: 1; }
              .card-responsive .card:nth-child(4) { grid-column: 6 / span 3; grid-row: 2; top: 0; left: 0; }
              .card-responsive .card:nth-child(3) { grid-column: 9 / span 4; grid-row: span 2; }
              .card-responsive .card:nth-child(5) { grid-column: span 6; grid-row: 3; }
              .card-responsive .card:nth-child(6) { grid-column: 7 / span 6; grid-row: 3; }
            }
            
            .card--border-glow::after {
              content: '';
              position: absolute;
              inset: 0;
              padding: 2px;
              background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                  rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                  rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                  transparent 60%);
              border-radius: inherit;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              mask-composite: exclude;
              pointer-events: none;
              opacity: 1;
              transition: opacity 0.3s ease;
              z-index: 1;
            }
          `}
        </style>

        {enableSpotlight && (
          <GlobalSpotlight
            gridRef={gridRef}
            disableAnimations={shouldDisableAnimations}
            enabled={enableSpotlight}
            spotlightRadius={spotlightRadius}
            glowColor={glowColor}
          />
        )}

        <BentoCardGrid gridRef={gridRef}>
          <div className="card-responsive">
            {cardData.map((card, index) => {
              const baseClassName = `card flex flex-col justify-between relative w-full h-full p-10 rounded-[50px] border border-solid overflow-hidden transition-all duration-500 ease-out hover:border-purple-500/50 hover:bg-white/[0.02] cursor-pointer ${
                enableBorderGlow ? 'card--border-glow' : ''
              }`;

              const cardStyle: CSSProperties = {
                backgroundColor: 'rgba(15, 12, 20, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--white)',
                position: 'relative'
              };

              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  <div 
                    className="h-full w-full flex flex-col justify-between"
                    onClick={() => onSelect?.(card.title)}
                  >
                    <div className="card__header relative z-10">
                      <span className="text-[11px] font-black uppercase tracking-[0.4em] text-purple-500/80">{card.label}</span>
                    </div>
                    <div className="card__content relative z-10">
                      <h3 className="font-black text-4xl text-white mb-3 tracking-tighter leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed max-w-[250px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </ParticleCard>
              );
            })}
          </div>
        </BentoCardGrid>
      </div>
    </section>
  );
};

export default MagicBento;
