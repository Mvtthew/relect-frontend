module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        indent: [
            'error',
            4,
        ],
        'vue/script-indent': [
            'error',
            4,
        ],
        'vue/html-indent': [
            'error',
            4,
        ],
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        semi: [
            'error',
            'always',
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
    },
};
