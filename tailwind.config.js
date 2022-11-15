/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                'auth-color': '#1E293C',
                'input-border': '#ebebeb',
                'auth-bg-button': '#216ce7'
            },
            backgroundImage: {
                'auth-image': "url('/src/assets/auth-background.png')"
            },
            colors: {
                'auth-color-button': '#f9f9f8',
                'auth-link': '#216ce7'
            },
            animation: {
                pan: 'pan 6s infinite alternate linear'
            }
        }
    },
    plugins: []
};
