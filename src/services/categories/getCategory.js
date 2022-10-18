const { models } = require('../../database');

module.exports = async () => {
    const categories = await models['category'].findAll();

    return categories;
}

