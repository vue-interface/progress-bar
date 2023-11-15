module.exports = {
    content: [
        './index.html',
        './src/*.vue'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
    ],
    safelist: [
        ...require('@vue-interface/variant/tailwindcss/safelist')(),
    ]
};