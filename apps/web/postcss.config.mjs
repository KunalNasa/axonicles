const postcssConfig = {
    plugins: {
        '@tailwindcss/postcss': {
            base: process.cwd() + '/../..',
        },
    },
}
export default postcssConfig;
