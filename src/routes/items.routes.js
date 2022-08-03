
const express = require("express");
const router = express.Router();
const itemDetailMap = require("../Mapper/itemDetailMap");
const itemsMap = require("../Mapper/itemMap");
const { getAllItems, getItemById, getItemDescriptionById } = require("../service/items.service");


router.get("/", async (req,res)=>{
    let query = req.query.q;
    let response =  await getAllItems(query);
    if(response.error){
        res.error(response);
      
    }else{
        let itemsModel = itemsMap(response.data)    
        res.send(itemsModel);
    }
    
});

router.get("/:id",async (req,res)=>{
    let responseItem = await getItemById(req.params.id);
    let responseDescription = null;
    
    if(responseItem.error){
        res.error(responseItem);   
    }
    responseDescription = await getItemDescriptionById(req.params.id);       

    if(responseDescription.error){
        res.error(responseDescription);
    }
   
    let itemModel = itemDetailMap(responseItem.data, responseDescription.data);
    res.send(itemModel);
});


module.exports = router;