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


var Article = module.exports = mongoose.model("Article", articleSchema);

module.exports.getArticles = function (callback) {
    Article.find(callback);
}

//Get Article by Id
module.exports.getArticleById = function (id, callback) {
    Article.findById(id, callback);
}

//Get Articles by Category
module.exports.getArticleByCategory = function (category, callback) {
    var query = {category: category}
    Article.find(query, callback);
}

//Get Articles by Category
module.exports.createArticle = function (newArticle, callback) {
    newArticle.save(callback);
}

//Update Articles
module.exports.updateArticle = function (id, data, callback) {
    var title = data.title;
    var body = data.body;
    var category = data.category;

    var query = {_id: id};

    Article.findById(id, function (err, article) {
        if (!article) {
            return next(new Error('Could not find article'));
        }
        else {
            article.title = title;
            article.body = body;
            article.category = category;
            article.save(callback);
        }
    });
}


//Remove Articles
module.exports.removeArticle = function (id, callback) {

    Article.find({_id:id}).remove(callback);
}