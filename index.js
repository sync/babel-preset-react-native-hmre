module.exports = {
    plugins: [
        [ require('babel-plugin-react-transform').default, {
            transforms: [ {
                transform: require.resolve( 'react-transform-hmr' ),
                imports: [ 'react-native' ],
                locals: [ 'module' ]
            } ]
        } ]
    ]
};
