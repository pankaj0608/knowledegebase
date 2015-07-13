var express = require('express');
var router = express.Router();

var Article = require("../models/article");

/* GET users listing. */
router.get('/', function (req, res, next) {
    Article.getArticles(function (err, articles) {
        if (err) {
            console.log(err);
        }

        res.json(articles);

    })
});

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    Article.getArticleById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        }

        res.json(article);

    });
});

/* GET users listing. */
router.get('/category/:category', function (req, res, next) {
    Article.getArticleByCategory(req.params.category, function (err, articles) {
        if (err) {
            console.log(err);
        }
        res.json(articles);

    });
});

/* Create articles */
router.post('/', function (req, res, next) {
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;

    var newArticle = new Article({
        title: title,
        category: category,
        body: body
    });

    Article.createArticle(newArticle, function (err, article) {
        if (err) {
            console.log(err);
        }
        else {
            res.location('/articles');
            res.redact('/articles');
        }
    })
});


/* Update articles */
router.put('/', function (req, res, next) {
    var id = req.body.id;
    var data = {
        title: req.body.title,
        category: req.body.category,
        body: req.body.body
    }

    Article.updateArticle(id, data, function (err, article) {
        if (err) {
            console.log(err);
        }
        else {
            res.location('/articles');
            res.redact('/articles');
        }
    })
});


/* Delete articles */
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;

    Article.removeArticle(id, function (err, article) {
        if (err) {
            console.log(err);
        }
        else {
            res.location('/articles');
            res.redact('/articles');
        }
    })
});

module.exports = router;
