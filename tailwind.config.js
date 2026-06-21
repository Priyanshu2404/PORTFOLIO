/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      // ─── TYPOGRAPHY ─────────────────────────────────────────────────────────
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Courier New"', 'monospace'],
        sans: ['"JetBrains Mono"', 'monospace'], // Override sans to mono globally
      },

      // ─── COLORS ─────────────────────────────────────────────────────────────
      colors: {
        // Base terminal blacks
        terminal: {
          black:   '#000000',   // pure void — page background
          void:    '#060606',   // near-black body bg
          surface: '#0d0d0d',   // card / section bg
          panel:   '#111111',   // elevated panels
          border:  '#1f1f1f',   // subtle borders
          muted:   '#2a2a2a',   // dividers / disabled states
        },
        // Phosphor green accent family
        phosphor: {
          DEFAULT: '#00ff41',   // primary terminal green
          dim:     '#00c832',   // hover / secondary green
          faint:   '#003d10',   // background glow tint
          glow:    '#00ff4133', // transparent glow for box-shadow
        },
        // Smoke gray scale for text
        smoke: {
          100: '#e8e8e8',       // high-contrast body text
          200: '#b4b4b4',       // secondary text
          300: '#7a7a7a',       // muted / placeholder
          400: '#4a4a4a',       // very muted
          500: '#2e2e2e',       // borders / separators
        },
        // System status accent colors — use sparingly
        sys: {
          ok:   '#00ff41',      // success = phosphor green
          warn: '#ffd700',      // warning = amber
          err:  '#ff3333',      // error = red
          info: '#5cbbf6',      // info = cool blue
          dim:  '#555555',      // inactive
        },
      },

      // ─── FONT SIZE SCALE ────────────────────────────────────────────────────
      fontSize: {
        'xs2':           ['0.65rem',  { lineHeight: '1rem' }],
        'terminal-sm':   ['0.75rem',  { lineHeight: '1.25rem' }],
        'terminal-base': ['0.875rem', { lineHeight: '1.6rem' }],
        'terminal-lg':   ['1rem',     { lineHeight: '1.6rem' }],
        'terminal-xl':   ['1.25rem',  { lineHeight: '1.75rem' }],
        'terminal-2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        'terminal-hero': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1' }],
      },

      // ─── TIMING FUNCTIONS (ALL LINEAR — no bouncy easing) ───────────────────
      transitionTimingFunction: {
        'terminal':     'linear',
        'terminal-in':  'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'terminal-out': 'cubic-bezier(0.8, 0.0, 1.0, 1)',
      },
      transitionDuration: {
        'fast':   '80ms',
        'normal': '150ms',
        'slow':   '300ms',
      },

      // ─── KEYFRAMES ──────────────────────────────────────────────────────────
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%':           { opacity: '0.4' },
          '98%':           { opacity: '0.8' },
        },
        typeIn: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '33%':      { transform: 'translateX(-2px)' },
          '66%':      { transform: 'translateX(2px)' },
        },
        progressFill: {
          from: { width: '0%' },
          to:   { width: '100%' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-8px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'blink':         'blink 1s step-end infinite',
        'scanline':      'scanline 6s linear infinite',
        'flicker':       'flicker 8s linear infinite',
        'type-in':       'typeIn 0.6s linear forwards',
        'glitch':        'glitch 0.15s linear 2',
        'progress-fill': 'progressFill 1.2s linear forwards',
        'fade-in-left':  'fadeInLeft 0.2s linear forwards',
      },

      // ─── BOX SHADOW ─────────────────────────────────────────────────────────
      boxShadow: {
        'terminal':         '0 0 0 1px #1f1f1f',
        'phosphor':         '0 0 12px 2px #00ff4133, 0 0 40px 4px #00ff410d',
        'phosphor-sm':      '0 0 6px 1px #00ff4126',
        'inset-phosphor':   'inset 0 0 12px #00ff410d',
        'phosphor-border':  '0 0 0 1px #00ff41',
      },

      // ─── BORDER RADIUS — sharp terminal corners ──────────────────────────────
      borderRadius: {
        DEFAULT: '0px',
        sm:      '0px',
        md:      '2px',
        lg:      '2px',
        xl:      '2px',
        '2xl':   '2px',
        full:    '9999px',
      },

      // ─── BACKGROUND IMAGES ──────────────────────────────────────────────────
      backgroundImage: {
        'scanlines': `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,0,0,0.10) 2px,
          rgba(0,0,0,0.10) 4px
        )`,
        'terminal-grid': `
          linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'terminal-grid': '40px 40px',
      },

    },
  },
  plugins: [],
};