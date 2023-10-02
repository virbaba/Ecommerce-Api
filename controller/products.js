const Products = require('../model/product');
module.exports.product = (req, res) => {
    return res.json({
        error:{ 
            message: "page not found"
        }
    })
}

// creating product 
module.exports.create = async(req, res) => {
    try{
        const product = await Products.create(req.body);
        const response = {
            "data": {
              "product": {
                "name": product.name,
                "quantity": product.quantity
              }
            },
            message: "creating succussfully",
          }
       
        return res.json(response);
    }catch(err){
        return res.json({
            "error": "Error in creation of product"
        })
    }
}

// display
module.exports.display = async (req, res) => {
    try{
        const products = await Products.find({});
        const response = {
            "data": {
              "product": products
            },
          }
        return res.json(response);
    }catch(err){
        return res.json({
            "error": "Error in display of product"
        })
    }
}

// update
module.exports.update = async (req, res) => {
    try{
        const product = await Products.findById(req.params.id);
        product.quantity = req.query.number;
        // saving the final state
        product.save();
        const response = {
            "data": {
              "product": product
            },
            message:"Update Successfully"
          }
        return res.json(response);
    }catch(err){
        return res.json({
            "error": `Error in Update the product ${err}`
        })
    }
}

// delete
module.exports.delete = async (req, res) => {
   try{
        await Products.deleteOne({_id: req.params.id});
        
        const response = {
            "data": {
                message:"Deleted Successfully"
            },
        }
        return res.json(response);
   }catch(err){
    return res.json({
        "error": `Error in Deleting the product ${err}`
    })
}
}