/**
 * PolyWiz Design Tokens
 * Warm, arts-friendly palette based on Oatmeal template direction.
 * See DESIGN.md for full specification.
 */
export const polywizTokens = {
  colors: {
    primary: {
      DEFAULT: '#E07A5F', // Coral/Terracotta
      light: '#E8957E',
      dark: '#C96A51',
      subtle: '#FEF0EC',
    },
    secondary: {
      DEFAULT: '#81B29A', // Sage Green
      light: '#9BC4B0',
      dark: '#6A9A82',
      subtle: '#EFF7F3',
    },
    accent: {
      DEFAULT: '#F2CC8F', // Warm Gold
      light: '#F5D9A8',
      dark: '#D4A853',
      subtle: '#FDF6E8',
    },
    polymashBlue: '#0399FE',
    background: {
      page: '#FAFAF8',
      surface: '#FFFFFF',
      muted: '#F5F3F0',
      warm: '#FDF8F3',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
      muted: '#9BA4A8',
      onPrimary: '#FFFFFF',
    },
    border: {
      DEFAULT: '#DFE6E9',
      subtle: '#EDF0F2',
      primary: '#E07A5F',
    },
  },

  typography: {
    fonts: {
      heading: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    },
  },

  shadows: {
    sm: '0 1px 2px rgba(45, 52, 54, 0.05)',
    md: '0 4px 12px rgba(45, 52, 54, 0.08)',
    lg: '0 12px 32px rgba(45, 52, 54, 0.10)',
    primary: '0 4px 16px rgba(224, 122, 95, 0.20)',
  },
} as const;
