// fonts.ts
import localFont from 'next/font/local';

export const neonVortex = localFont({
    src: '../fonts/NeonVortex.ttf',  // Correct path to your font file
    variable: '--font-neon-vortex',  // Define the global CSS variable
});
