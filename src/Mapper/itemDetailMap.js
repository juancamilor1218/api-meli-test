const currency = require("../utils/currency");


const itemDetailMap = (itemDetail,description) =>{    
    let price = currency(itemDetail.price);
    let itemDto = {
        author:{
            name:"",
            lastname:""
        },
        item:{
            id:itemDetail.id,
            title:itemDetail.title,
            price:{
                currency:itemDetail.currency_id,
                amount:price.amountResult,
                decimals:price.decimals
            },
            picture:itemDetail.pictures[0].url,
            condition:itemDetail.condition,
            free_shipping:itemDetail.shipping.free_shipping,
            sold_quantity:itemDetail.sold_quantity,
            description:description.plain_text
        }
   
    }
    return itemDto;
}

module.exports = itemDetailMap;