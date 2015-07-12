var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    decription: {
        type: String
    }
});

var Category =  module.exports =  mongoose.model("Category", categorySchema);

module.exports.getCategories = function(callback) {
    Category.find(callback);
}

//Get Category by Id
module.exports.getCategoryById = function(id, callback) {
    Category.findById(id, callback);
}

//Get Articles by Category
module.exports.getArticleByCategory =  function(category, callback) {
    var query = {category : category}
    Article.find(query, callback);
}

//Create Category
module.exports.createCategory =  function(newCategory, callback) {
    newCategory.save(callback);
}