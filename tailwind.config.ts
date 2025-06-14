
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
			screens: {
				"2xl": "1120px",
			},
		},
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"sans-serif",
				],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				background: "#f8fafc",
				foreground: "#22223b",
				primary: {
					DEFAULT: "#4f46e5",
					foreground: "#fff",
				},
				accent: {
					DEFAULT: "#6d28d9",
					foreground: "#fff",
				},
				secondary: {
					DEFAULT: "#fff",
					foreground: "#22223b",
				},
				muted: {
					DEFAULT: "#e5e7eb",
					foreground: "#6b7280",
				},
				card: {
					DEFAULT: "#fff",
					foreground: "#22223b",
				},
				border: "#e5e7eb",
			},
			boxShadow: {
				card: "0 4px 24px 0 rgb(80 140 255 / 6%)",
				navbar: "0 2px 8px 0 rgb(0 0 0 / 7%)",
			},
			borderRadius: {
				"2xl": "1.5rem",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
