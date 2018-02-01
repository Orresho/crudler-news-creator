var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.post('/', (req, res) => {

    // Check if the fields are filled in
    if (!req.body.title) {
        res.json({ success: false, message: 'Title is missing' });
    } else {
        if (!req.body.thumbnailImage) {
            res.json({ success: false, message: 'Image is missing' });
        } else {
            if (!req.body.preamble) {
                res.json({ success: false, message: 'Preamble is missing' });
            } else {
                if (!req.body.bodyText) {
                    res.json({ success: false, message: 'text body is missing' });
                } else {
                    storePost();
                }
            }
        }
    }


    function storePost() {

        let date = new Date();
        // post to database
        const post = new Post({
            title: req.body.title,
            thumbnailImage: req.body.thumbnailImage,
            preamble: req.body.preamble,
            bodyText: req.body.bodyText,
            createdAt: Date.now(),
            
        });

        post.save((err) => {
            let length = 0;
            if (err) {
                // res.json({ success: false, message: err});

                if (err.errors) {
                    if (err.errors.title) {

                        // Make sure the title is not below the min length
                        if (err.errors.title.kind === 'minlength') {
                            length = err.errors.title.properties.value.length;
                            res.json({ success: false, message: 'Title too short, min 6 characters. Your title: ' + length });
                        }

                        // Make sure the title is not above the max length
                        if (err.errors.title.kind === 'maxlength') {
                            length = err.errors.title.properties.value.length;
                            res.json({ success: false, message: 'Title too long, max 20 characters. Your title: ' + length });
                        }
                    } else {

                        if (err.errors.preamble) {

                            // Make sure the preamble is not below the min length
                            if (err.errors.preamble.kind === 'minlength') {
                                length = err.errors.preamble.properties.value.length;
                                res.json({ success: false, message: 'Preamble too short, min 20 characters. Your title: ' + length });
                            }

                            // Make sure the preamble is not above the max length
                            if (err.errors.preamble.kind === 'maxlength') {
                                length = err.errors.preamble.properties.value.length;
                                res.json({ success: false, message: 'Preamble too long, max 60 characters. Your title: ' + length });
                            }
                        } else {

                            if (err.errors.bodyText) {

                                // Make sure the body text is not below the min length
                                if (err.errors.bodyText.kind === 'minlength') {
                                    length = err.errors.bodyText.properties.value.length;
                                    res.json({ success: false, message: 'Body text too short, min 100 characters. Your title: ' + length });
                                }

                                // Make sure the body text is not above the max length
                                if (err.errors.bodyText.kind === 'maxlength') {
                                    length = err.errors.bodyText.properties.value.length;
                                    res.json({ success: false, message: 'Body text too long, max 1000 characters. Your title: ' + length });
                                }
                            }
                        }
                    }
                }
            } else {
                res.json({ success: true, message: 'success!' });
            }
        })
    }

    // // Function for later refactoring code
    // function checkLength(err, objString, length) {

    //     // Make sure the title is not below the min length
    //     if (err.errors.objString.kind === 'minlength') {
    //         length = err.errors.objString.properties.value.length;
    //         res.json({ success: false, message: 'Title too short, min 6 characters. Your title: ' + length });
    //     }

    //     // Make sure the title is not above the max length
    //     if (err.errors.objString.kind === 'maxlength') {
    //         length = err.errors.objString.properties.value.length;
    //         res.json({ success: false, message: 'Title too long, max 20 characters. Your title: ' + length });
    //     }
    // }

});

router.get('/', (req, res) => {

    Post.find({}, (err, posts) => {
        if (err) {
            res.json({ success: false, message: err })
        } else {
            res.json({ success: true, message: posts });
        }
    }).sort({createdAt: -1}); // sort by latest posts
})

module.exports = router;