const express = require('express')
const router = express.Router()
const degree = require('../models/Degree')
const mongoose = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await degree.find()
        if(results){
            res.status(200).json(results)
        }

        else{
            res.status(404).send("Sorry,No data found!")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error !")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const results = await degree.find({ _id: id });

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, no data found!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});


router.get('/:code/:cid', async (req, res) => {
    try {
        const code = req.params.cid;
        const results = await degree.find({ code: code });

        const count = results.length;
        console.log(count);

        if (count > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, no data found!");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});





module.exports=router  


