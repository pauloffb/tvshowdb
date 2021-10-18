module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.svelte'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('daisyui'),
    ]
}