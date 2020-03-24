const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    customer: {type:String, required:true, minlength: 3},
    stars: {type:Number, required:true, max: 5},
    description: {type:String, required:true, minlength: 3},
}, {timestamps:true});

const RestaurantSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength: 3},
    cuisine: {type:String, required:true, minlength: 3},
    reviews: [ReviewSchema],
}, {timestamps:true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Review = mongoose.model('Rating', ReviewSchema);
module.exports = {
    Review: Review,
    Restaurant: Restaurant 
}