const { Model } = require("sequelize")

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        coverImage: {
            type: Sequelize.TEXT('long') // permite almacenar base64 grandes
        }
    });
    
    return Book;
};