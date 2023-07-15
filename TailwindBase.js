import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'
const xsPixels = '360px'

const withOpacity = (colorVariable) => {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rbga(var(${colorVariable}), ${opacityValue})`
        }
        return `rgb(var(${colorVariable}))`
    }
}

const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            'xs': xsPixels,
            ...defaultTheme.screens,
        },
        extend: {
            animation: {
                wiggle: 'wiggle 5s infinite'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'translateY(0.5rem) scale(0.5)'
                    },
                    '50%': {
                        transform: 'translateY(0) scale(0.5)'
                    }
                }
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        typography,
        plugin(function ({ addVariant }) {
            addVariant('active-bullet', '& .swiper-pagination-bullet-active')
        })
    ],
    important: true
}

const zero = 0;
const xs = xsPixels.replace('px', '') * 1;
const sm = defaultTheme.screens.sm.replace('px', '') * 1;
const md = defaultTheme.screens.md.replace('px', '') * 1;
const lg = defaultTheme.screens.lg.replace('px', '') * 1;
const xl = defaultTheme.screens.xl.replace('px', '') * 1;
const xxl = defaultTheme.screens['2xl'].replace('px', '') * 1;

const getRem = tailwindValue => defaultTheme.spacing[tailwindValue]

const remPixelMaps =
{
    '0.25': '4',
    '0.5': '8',
    '0.75': '12',
    '1': '16',
    '1.25': '20',
    '1.5': '24',
    '1.75': '28',
    '2': '32',
    '2.25': '36',
    '2.5': '40',
    '2.75': '44',
    '3': '48',
    '3.5': '56',
    '4': '64',
    '5': '80',
    '6': '96',
    '7': '112',
    '8': '128',
    '9': '144',
    '10': '160',
    '11': '176',
    '12': '192',
    '13': '208',
    '14': '224',
    '15': '240',
    '16': '256',
    '18': '288',
    '20': '320',
    '24': '384',
    '0.125': '2',
    '0.375': '6',
    '0.625': '10',
    '0.875': '14'
}

const getPixel = tailwindValue => {
    const rem = getRem(tailwindValue)
    // return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    // console.log('rem:', rem)
    // console.log('pixel:', remPixelMaps[rem])
    return remPixelMaps[rem]
}

export default config
export { getPixel }
export { getRem }
export { lg }
export { md }
export { sm }
export { xl }
export { xs }
export { xxl }
export { zero }
