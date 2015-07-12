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



module.exports = router;
