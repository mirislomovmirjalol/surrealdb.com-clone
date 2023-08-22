import type {Config} from 'tailwindcss'
import {ColorScale, nextui} from "@nextui-org/react";

type BaseColors = {
    background: '#1A202D'; // the page background color
    foreground: ColorScale; // the page text color
    divider: ColorScale; // used for divider and single line border
    overlay: ColorScale; // used for modal, popover, etc.
    focus: ColorScale; // used for focus state outline
    content1: ColorScale; // used for card, modal, popover, etc.
    content2: ColorScale;
    content3: ColorScale;
    content4: ColorScale;
};

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                "base": {
                    DEFAULT: '#1A202D',
                    300: '#272E3C',
                    200: '#373d4d',
                },
                "base-invert": '#FFFFFF',
                "base-invert-2": {
                    DEFAULT: '#989CAD',
                    700: '#727383',
                },
            },
            container: {
                center: true,
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1200px',
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        prefix: "nextui", // prefix for themes variables
        addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
        defaultTheme: "dark", // default theme from the themes object
        defaultExtendTheme: "dark", // default theme to extend on custom themes
        layout: {}, // common layout tokens (applied to all themes)
        themes: {
            dark: {
                layout: {}, // dark theme layout tokens
                colors: {
                    primary: {
                        DEFAULT: '#F700A5',
                        700: '#5e0041',
                        300: '#ff5dca',
                    },
                    secondary: '#8F00F9',
                }, // dark theme colors
            },
            // ... custom themes
        },
    }),],
}
export default config
