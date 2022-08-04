const express = require('express');
// const app = require('../../app');
const router= express.Router();


router.get('/',(req,res, next)=>{
res.status(200).json(
    {
        message: 'success',
    }
);
});

router.post('/',(req,res ,next)=>{
    //objects
    const product = 
    {
        name : req.body.name,
        price : req.body.price
    };
    res.status(200).json(
        {
            message: 'We are using post method',
            createdProduct :product
        }
    );
    });
router.get('/:productId',(req,res, next)=>{
    const id =req.params.productId;
    if(id =='special')
    {
        res.status(200).json({
            message: 'Special ID',
            id: id
        });
    }
    else
    {
        res.status(200).json({
            message: 'Here we go',
    });
}
});
router.patch('/:productId',(req,res)=>{
    res.status(202).json(
        {
            message: 'productId successfully updated',
        }
    );
    });
    router.delete('/:productId',(req,res)=>{
        res.status(202).json(
            {
                message: 'Product deleted successfully',
            }
        );
        });




 


module.exports = router;