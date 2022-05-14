const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: {
					// light: '#355BE4',
					DEFAULT: '#439CEF',
					// dark: '#355BE4,/
				},
				negative: {
					DEFAULT: '#F17070',
				},
				secondary: '#4397E5',
				gray: colors.gray,
				blue: colors.blue,
				// red: colors.rose,
				// yellow: colors.amber,
				white: '#ffffff',
				black: '#2B3139',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				'noto-kr': ['Noto Sans KR', 'sans-serif'],
			},
			backgroundImage: {
				's1-01': "url('./images/s1.jpg')",
				's3-01': "url('./images/s3_01.png')",
				's3-02': "url('./images/s3_02.png')",
				'video-01': "url('../public/images/gradient.svg')",
			},
		},
	},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
