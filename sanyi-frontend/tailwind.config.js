/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#4bb869'
}
},
boxShadow: {
card: '0 6px 24px rgba(0,0,0,0.06)'
},
borderRadius: {
xl2: '1rem'
}
},
},
plugins: [],
}