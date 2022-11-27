const mainController = () => {
    const getRandomValue = () => {
        console.log('get random value');
        return `random value = ${Math.random() * 100}`;
    }

    return {
        getRandomValue
    }
}

module.exports = mainController;
