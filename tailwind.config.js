module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    theme: {
        extend: {
            colors: {
                primary: '#0c0335',
                secondary: '#e8265d'
            }
        }
    },
    corePlugins: {},
    plugins: []
}
