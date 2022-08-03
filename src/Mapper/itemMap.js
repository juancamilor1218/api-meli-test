const currency = require("../utils/currency");

const itemsMap = (itemsResponse) =>{
   
    let items = itemsResponse.results;
    let categories = itemsResponse.filters.length > 0 ? itemsResponse.filters[0].values[0].path_from_root : [];
    let itemModel ={
        author: {
            name: "",
            lastname: ""
        },
        categories: mapCategories(categories),
        items: mapItem(items)
    }
    
    return itemModel;
}

const mapItem = (items) => {
    return items.map((item)=>{
        let itemDto = {
            id:item.id,
            title:item.title,
            price:{
                currency:item.currency_id,
                amount:currency(item.price).amountResult,
                decimals:currency(item.price).decimals        
            },
            picture:item.thumbnail,
            condition:item.condition,
            free_shipping:item.shipping.free_shipping,
            city:item.address.city_name
        }
        return itemDto;
    })
}

const mapCategories = (categories) =>{   
    return categories.map((category)=>{       
        return category.name;
    })
}

module.exports = itemsMap;