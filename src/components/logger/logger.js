const logger = () => {
    const info = (message) => console.log(message)

    return {
        info
    }
}

module.exports = logger;
