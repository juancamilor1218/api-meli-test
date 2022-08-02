
const express = require("express");
const router = express.Router();
const itemDetailMap = require("../Mapper/itemDetailMap");
const itemsMap = require("../Mapper/itemMap");
const { getAllItems, getItemById, getItemDescriptionById } = require("../service/items.service");


router.get("/", async (req,res)=>{
    let query = req.query.q;
    let items =  await getAllItems(query);
    //TODO: Mapper 
    let itemsModel = itemsMap(items)
    //console.log(itemModel);
    res.send(itemsModel);
});

router.get("/:id",async (req,res)=>{    
    let item = await getItemById(req.params.id);
    let description = await getItemDescriptionById(req.params.id);
    let itemModel = itemDetailMap(item, description);
    res.send(itemModel);
});


module.exports = router;