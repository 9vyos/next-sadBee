/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: [
    './components//.{js,vue,ts}',
    './layouts/**/.vue',
    './pages//*.vue',
    './plugins//.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './stories/**/.{js,ts,jsx,tsx}', // 새로 추가한 부분
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
