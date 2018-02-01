const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

let date = new Date()

const postSchema = new Schema({
    title: { type: String, required: true, maxlength: 25, minlength: 6 },
    thumbnailImage: { type: String, required: true },
    preamble: { type: String, required: true, maxlength: 60, minlength: 20 },
    bodyText: { type: String, required: true, maxlength: 1000, minlength: 100 },
    createdAt: { type: Date, default: Date.now },
   
});

module.exports = mongoose.model('Post', postSchema);