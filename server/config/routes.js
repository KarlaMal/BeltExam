const restaurant = require('../controllers/reviews.js')
module.exports = function(app){
    app.get('/all', (req, res) => {
        restaurant.index(req, res);
    })

    app.post('/restaurant/create', (req,res)=>{
        restaurant.createRestaurant(req,res);
    })
    
    app.get('/restaurant/find/:id', (req,res)=>{
        restaurant.restaurantReviews(req,res);
    })

    app.post('/restaurant/review/:id', (req,res)=>{
        restaurant.review(req,res);
    })

    app.post('/restaurant/update/:id', (req,res)=>{
        restaurant.updateRestaurant(req,res);
    })

    app.delete('/restaurant/delete/:id', (req,res)=>{
        restaurant.deleteRestaurant(req,res);
    })
}