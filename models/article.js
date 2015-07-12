var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        index: true,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});


var Article =  module.exports =  mongoose.model("Article", articleSchema);

module.exports.getArticles = function(callback) {
    Article.find(callback);
}

//Get Article by Id
module.exports.getArticleById =  function(id, callback) {
    Article.findById(id, callback);
}

//Get Articles by Category
module.exports.getArticleByCategory =  function(category, callback) {
    var query = {category : category}
    Article.find(query, callback);
}


