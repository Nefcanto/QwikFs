const red = '\x1b[31m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const cyan = '\x1b[36m%s\x1b[0m';
const green = '\x1b[32m%s\x1b[0m';

const logger = {
    error(message, ...optionalParams) {
        console.error(red, message, ...optionalParams)
    },
    warn(message, ...optionalParams) {
        console.warn(yellow, message, ...optionalParams)
    },
    info(message, ...optionalParams) {
        console.info(cyan, message, ...optionalParams)
    },
    success(message, ...optionalParams) {
        console.info(green, message, ...optionalParams)
    }
}

export default logger
