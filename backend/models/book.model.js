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
            type: Sequelize.TEXT   // almacena dataURL/base64 sin truncar
        }
    });
    
    return Book;
};