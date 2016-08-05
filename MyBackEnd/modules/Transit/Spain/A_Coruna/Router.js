var express = require('express');
var router = express.Router();
var transitAPI = require("./TransitAPI");

/* GET users listing. */
router.get('/lines', function(req, res, next) {
    transitAPI.getLines({
        end: function (data) {
            res.statusCode = 200;
            res.end(data);
        },
        error: function(error) {
            res.statusCode = 500;
            res.end(error);
        }
    });
});

router.get('/routes/:id', function (req, res, next) {
    transitAPI.routes(req.params.id, {
        end: function (data) {
            res.statusCode = 200;
            res.end(data);
        },
        error: function (error) {
            res.statusCode = 500;
            res.end(error);
        }
    });
})

module.exports = router;
