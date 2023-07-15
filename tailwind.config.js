module.exports = {
    presets: [
        require('./TailwindBase.js')
    ],
    theme: {
        extend: {
            colors: {
                paydar: {
                    color1: '#222357',
                    color2: '#ff9127',
                    color21: '#ff9e42',
                    color3: '#f5f8fc',
                    color31: '#545454',
                    color32: '#4d4d4d',
                }
            }
        },
        fontFamily: {
            IRANSans: ["IRANSans"],
        },
    },
    plugins: [],
    important: true
}
