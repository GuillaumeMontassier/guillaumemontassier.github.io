module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                linkedin: '#0a66c2'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}