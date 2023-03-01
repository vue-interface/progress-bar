const plugin = require('tailwindcss/plugin');
const lightGradientColor = 'rgba(255, 255, 255, .15)';
const darkGradientColor = 'rgba(0, 0, 0, .15)';

module.exports = plugin(function({ addComponents, theme }) {
    const progress = {
        // ':root': {
        //     '--progress-display': theme('progress.display'),
        //     '--progress-overflow': theme('progress.overflow'),
        //     '--progress-height': theme('progress.height'),
        //     '--progress-font-size': theme('progress.fontSize'),
        //     '--progress-background-color': theme('progress.backgroundColor'),
        //     '--progress-border-radius': theme('progress.borderRadius'),
        //     '--progress-box-shadow': theme('progress.boxShadow'),

        //     '--progress-bar-display': theme('progress.bar.display'),
        //     '--progress-bar-flex-direction': theme('progress.bar.flexDirection'),
        //     '--progress-bar-justify-content': theme('progress.bar.justifyContent'),
        //     '--progress-bar-overflow': theme('progress.bar.overflow'),
        //     '--progress-bar-color': theme('progress.bar.color'),
        //     '--progress-bar-text-align': theme('progress.bar.textAlign'),
        //     '--progress-bar-white-space': theme('progress.bar.whiteSpace'),
        //     '--progress-bar-transition': theme('progress.bar.transition'),
        //     '--progress-bar-animation': theme('progress.bar.animation'),

        //     '--progress-striped-background-image': theme('progress.striped.backgroundImage'),
        //     '--progress-striped-background-size': theme('progress.striped.backgroundSize'),

        //     '--progress-light-background-image': theme('progress.light.backgroundImage'),
        // },

        '.progress': {
            display: theme('progress.display'),
            overflow: theme('progress.overflow'),
            height: theme('progress.height'),
            fontSize: theme('progress.fontSize'),
            backgroundColor: theme('progress.backgroundColor'),
            borderRadius: theme('progress.borderRadius'),
            boxShadow: theme('progress.boxShadow'),

            '.progress-bar': {
                display: theme('progress.bar.display'),
                flexDirection: theme('progress.bar.flexDirection'),
                justifyContent: theme('progress.bar.justifyContent'),
                overflow: theme('progress.bar.overflow'),
                color: theme('progress.bar.color'),
                textAlign: theme('progress.bar.textAlign'),
                whiteSpace: theme('progress.bar.whiteSpace'),
                transition: theme('progress.bar.transition')
            },

            '.progress-bar-striped': {
                backgroundImage: theme('progress.striped.backgroundImage'),
                backgroundSize: theme('progress.striped.backgroundSize')
            },

            '.bg-light.progress-bar-striped,.bg-muted.progress-bar-striped': {
                backgroundImage: theme('progress.light.backgroundImage'),
            },

            '.progress-bar-animated': {
                animation: theme('progress.bar.animation')
            }
        },
        ['@keyframes progress-bar-stripes']: {
            ['0%']: {
                backgroundPositionX: theme('progress.height')
            }
        }
    };

    addComponents(progress);
}, {
    theme: {
        progress: theme => ({
            display: 'flex',
            overflow: 'hidden',
            height: '1rem',
            fontSize: '.75rem',
            backgroundColor: 'rgba(0, 0, 0, .025)',
            borderRadius: '.25rem',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .075)',
            bar: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
                color: '#FFF',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                transition: 'width .6s ease',
                animation: 'progress-bar-stripes 1s linear infinite'
            },
            striped: {
                backgroundImage: `linear-gradient(45deg, ${lightGradientColor} 25%, transparent 25%, transparent 50%, ${lightGradientColor} 50%, ${lightGradientColor} 75%, transparent 75%, transparent)`,
                backgroundSize: `1rem 1rem`
            },
            light: {
                backgroundImage: `linear-gradient(45deg, ${darkGradientColor} 25%, transparent 25%, transparent 50%, ${darkGradientColor} 50%, ${darkGradientColor} 75%, transparent 75%, transparent)`
            }
        })
    }
});