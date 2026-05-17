import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

/** Paleta azul aço (site original glanzhaus.ch). Substitui o primary «emerald» padrão do Aura. */
const primaryPalette = {
  50: '#f2f6f9',
  100: '#e1e9f0',
  200: '#c3d4e2',
  300: '#9bb5cc',
  400: '#6d90b0',
  500: '#4a769b',
  600: '#3f6789',
  700: '#365673',
  800: '#314961',
  900: '#2c3f54',
  950: '#1e2a38',
} as const;

/** Superfícies neutras levemente azuladas — alinhadas à marca, em vez do slate padrão. */
const surfaceLightPalette = {
  0: '#ffffff',
  50: '#f4f7fa',
  100: '#e8eef4',
  200: '#d7e0eb',
  300: '#bcc9d9',
  400: '#94a5bb',
  500: '#6f849d',
  600: '#5a6e82',
  700: '#4a5a6b',
  800: '#3f4d5c',
  900: '#2c3f54',
  950: '#1e2a38',
};

export const glanzhausAuraPreset = definePreset(Aura, {
  semantic: {
    primary: { ...primaryPalette },
  },
  colorScheme: {
    light: {
      surface: { ...surfaceLightPalette },
    },
  },
  components: {
    tag: {
      colorScheme: {
        light: {
          success: {
            background: '{primary.100}',
            color: '{primary.800}',
          },
        },
      },
    },
    toast: {
      colorScheme: {
        light: {
          success: {
            background: 'color-mix(in srgb, {primary.50}, transparent 5%)',
            borderColor: '{primary.200}',
            color: '{primary.700}',
            detailColor: '{surface.700}',
            shadow: '0px 4px 8px 0px color-mix(in srgb, {primary.500}, transparent 96%)',
            closeButton: {
              hoverBackground: '{primary.100}',
              focusRing: {
                color: '{primary.600}',
                shadow: 'none',
              },
            },
          },
        },
      },
    },
  },
});
