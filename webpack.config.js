var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    .createSharedEntry('layout', './assets/js/layout.js')
    .addEntry('rep_log_react', './assets/js/rep_log_react.js')
    .addEntry('login', './assets/js/login.js')

    .enableBuildNotifications()
    // fixes modules that expect jQuery to be global
    .autoProvidejQuery()

    .disableSingleRuntimeChunk()

    .addPlugin(new CopyWebpackPlugin([
        // copies to {output}/static
        { from: './assets/static', to: 'static' }
    ]))

    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()

    .configureBabel((babelConfig) => {
        if ( Encore.isProduction() ){
            babelConfig.plugins.push(
                'transform-react-remove-prop-types'
            )
        }
        babelConfig.plugins.push('@babel/plugin-transform-object-rest-spread')
    }, {
        useBuiltIns: 'usage',
        corejs: 2,
    })
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
