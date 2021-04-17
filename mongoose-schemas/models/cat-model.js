const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schemas are a mongoose object
//That enriches the model
//By adding validation to fields

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        enum: ['White', 'Black', 'Brown']
    },
    age: {
        type: Number,
        min: 0,
        max: 15
    },
    photo_url: {
        type: String,
        default: '/image/someCatImage.jpg'
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;