// https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md#conf
module.exports = {
    twin: {
        preset: 'styled-components',
        /*styled: {
            import: 'default',
            from: 'styled-components/macro',
        },
        autoCssProp: true,*/
        config: './tailwind.config.js'
    }
}
