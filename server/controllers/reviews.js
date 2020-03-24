const Review = require('../models/review.js').Review
const Restaurant = require('../models/review.js').Restaurant

module.exports={
    index:function(req, res){
        Restaurant.find()
        .then(cakes => res.json(cakes))
        .catch(err => res.json(err));
    },

    createRestaurant: function(req, res){
        const restaurant = new Restaurant();
        restaurant.name = req.body.name;
        restaurant.cuisine = req.body.cuisine;
        restaurant.save()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.json(err));
    },

    restaurantReviews: function(req, res){
        Restaurant.findOne({_id:req.params.id})
        .then(selected => res.json(selected))
        .catch(err=> res.json(err));
    },

    review: function(req,res){
        Restaurant.findOne({_id: req.params.id})
        .then(restaurant => {
            restaurant.reviews.push({customer: req.body.customer, stars: req.body.stars, description: req.body.description})
            restaurant.save()
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err))
        })
        .catch(err => res.json(err));
    },
    
    updateRestaurant: function(req,res){
        Restaurant.findOne({_id:req.params.id})
        .then(restaurant => {
            restaurant.name = req.body.name;
            restaurant.cuisine = req.body.cuisine;
            restaurant.save()
            .then(r => res.json(r))
            .catch(err => res.json(err))
        })
        .catch(err => res.json(err));
    },

    deleteRestaurant: function(req,res){
        Restaurant.remove({_id:req.params.id})
        .then(removedRestaurant => res.json(removedRestaurant))
        .catch(err => res.json(err))
    },


}