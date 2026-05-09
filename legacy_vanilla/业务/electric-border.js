/**
 * Electric Border Animation (Vanilla JS Version)
 * Adapted from ReactBits
 */

class ElectricBorder {
  constructor(container, options = {}) {
    this.container = container;
    this.canvas = container.querySelector('.electric-border-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.options = {
      color: options.color || '#a855f7',
      speed: options.speed || 1,
      chaos: options.chaos || 0.12,
      radius: options.radius || 24,
      ...options
    };
    
    this.points = [];
    this.time = 0;
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    
    // Scale for high DPI
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = (this.width + 40) * dpr;
    this.canvas.height = (this.height + 40) * dpr;
    this.ctx.scale(dpr, dpr);
    
    this.canvas.style.width = `${this.width + 40}px`;
    this.canvas.style.height = `${this.height + 40}px`;
  }

  // Simplified Noise for electricity
  noise(t) {
    return Math.sin(t * 10) * Math.cos(t * 7) * 0.5 + Math.sin(t * 23) * 0.2;
  }

  draw() {
    const { ctx, width, height, options } = this;
    const r = options.radius;
    const padding = 20; // Matches CSS top/left -20px
    
    ctx.clearRect(0, 0, width + 40, height + 40);
    ctx.save();
    ctx.translate(padding, padding);

    this.time += 0.02 * options.speed;

    ctx.strokeStyle = options.color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = options.color;

    ctx.beginPath();
    
    // Electric line generation logic
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const pos = this.getRoundedRectPoint(0, 0, width, height, r, t);
      
      const chaosX = this.noise(this.time + t * 10) * width * options.chaos;
      const chaosY = this.noise(this.time + t * 15) * height * options.chaos;
      
      if (i === 0) ctx.moveTo(pos.x + chaosX, pos.y + chaosY);
      else ctx.lineTo(pos.x + chaosX, pos.y + chaosY);
    }

    ctx.stroke();
    ctx.restore();
  }

  getRoundedRectPoint(x, y, w, h, r, t) {
    const perimeter = 2 * (w + h) - 8 * r + 2 * Math.PI * r;
    let dist = t * perimeter;

    // Top
    if (dist < w - 2 * r) return { x: x + r + dist, y: y };
    dist -= w - 2 * r;
    // Top-Right Corner
    if (dist < 0.5 * Math.PI * r) {
      const angle = dist / r - 0.5 * Math.PI;
      return { x: x + w - r + Math.cos(angle) * r, y: y + r + Math.sin(angle) * r };
    }
    dist -= 0.5 * Math.PI * r;
    // Right
    if (dist < h - 2 * r) return { x: x + w, y: y + r + dist };
    dist -= h - 2 * r;
    // Bottom-Right Corner
    if (dist < 0.5 * Math.PI * r) {
      const angle = dist / r;
      return { x: x + w - r + Math.cos(angle) * r, y: y + h - r + Math.sin(angle) * r };
    }
    dist -= 0.5 * Math.PI * r;
    // Bottom
    if (dist < w - 2 * r) return { x: x + w - r - dist, y: y + h };
    dist -= w - 2 * r;
    // Bottom-Left Corner
    if (dist < 0.5 * Math.PI * r) {
      const angle = dist / r + 0.5 * Math.PI;
      return { x: x + r + Math.cos(angle) * r, y: y + h - r + Math.sin(angle) * r };
    }
    dist -= 0.5 * Math.PI * r;
    // Left
    if (dist < h - 2 * r) return { x: x, y: y + h - r - dist };
    dist -= h - 2 * r;
    // Top-Left Corner
    const angle = dist / r + Math.PI;
    return { x: x + r + Math.cos(angle) * r, y: y + r + Math.sin(angle) * r };
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on elements with [data-electric-border]
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.electric-border-container').forEach(el => {
    new ElectricBorder(el, {
      color: el.dataset.ebColor,
      speed: parseFloat(el.dataset.ebSpeed),
      chaos: parseFloat(el.dataset.ebChaos)
    });
  });
});
