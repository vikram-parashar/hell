import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		flex: {
  			'30': '0 0 30%',
  			'100': '0 0 100%'
  		},
  		keyframes: {
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'caret-blink': 'caret-blink 1.25s ease-out infinite'
  		},
  		colors: {
  			rosePine: {
  				base: '#191724',
  				surface: '#1f1d2e',
  				overlay: '#26233a',
  				muted: '#6e6a86',
  				subtle: '#908caa',
  				text: '#e0def4',
  				love: '#eb6f92',
  				gold: '#f6c177',
  				rose: '#ebbcba',
  				pine: '#31748f',
  				foam: '#9ccfd8',
  				iris: '#c4a7e7',
  				highlightLow: '#21202e',
  				highlightMed: '#403d52',
  				highlightHigh: '#524f67'
  			},
  			rosePineMoon: {
  				base: '#232136',
  				surface: '#2a273f',
  				overlay: '#393552',
  				muted: '#6e6a86',
  				subtle: '#908caa',
  				text: '#e0def4',
  				love: '#eb6f92',
  				gold: '#f6c177',
  				rose: '#ea9a97',
  				pine: '#3e8fb0',
  				foam: '#9ccfd8',
  				iris: '#c4a7e7',
  				highlightLow: '#2a283e',
  				highlightMed: '#44415a',
  				highlightHigh: '#56526e'
  			},
  			rosePineDawn: {
  				base: '#faf4ed',
  				surface: '#fffaf3',
  				overlay: '#f2e9e1',
  				muted: '#9893a5',
  				subtle: '#797593',
  				text: '#575279',
  				love: '#b4637a',
  				gold: '#ea9d34',
  				rose: '#d7827e',
  				pine: '#286983',
  				foam: '#56949f',
  				iris: '#907aa9',
  				highlightLow: '#f4ede8',
  				highlightMed: '#dfdad9',
  				highlightHigh: '#cecacd'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
