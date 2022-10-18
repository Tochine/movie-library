const CategoryService = require('../services/categories');

module.exports.getCategory =  async (req, res, next) => {
    try {
        const result = await CategoryService.getCategory();
        return res.send({
            status: "successful",
            data: result
        });
    } catch (error) {
        return next(error);
    }
}

