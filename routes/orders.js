const express = require('express');
// const app = require('../../app');
const router= express.Router();


router.get('/',(req,res, next)=>{
res.status(202).json(
    {
        message: 'Orders were fetched in the server',
    }
);
});

router.post('/',(req,res, next)=>{
   const order = 
   {
    productId: req.body.productId,
    quantity: req.body.quantity
   };
    res.status(201).json(
        {
            message: 'Orders have been created in the server',
            order:order
        }
    );
    });

router.get('/:orderId',(req,res, next)=>{
        res.status(200).json({
            message: 'Order details',
            orderId: req.params.orderId

        });
    });


router.delete('/:orderId',(req,res)=>{
        res.status(200).json(
            {
                message: 'Order deleted successfully',
            }
        );
        })
module.exports = router;