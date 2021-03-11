module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                md: "840px",
                lg: "1250px",
                xl: "1660px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
