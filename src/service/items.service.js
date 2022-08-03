const axios = require('axios');

const URL_BASE = 'https://api.mercadolibre.com/'

const getAllItems = async (query) =>{
    try{
        const res = await axios.get(`${URL_BASE}sites/MLA/search?q=${query}`);
        return {data:res.data , error:false};
    }catch(err){
        return {data:err.response.data , error:true};        
    }
   
}

const getItemById = async (id) =>{
    try{
        const res = await axios.get(`${URL_BASE}items/${id}`);
        return {data:res.data , error:false};
    }catch(err){
        return {data:err.response.data , error:true};
    }
   
}

const getItemDescriptionById = async (id) =>{
    try{
        const res = await axios.get(`${URL_BASE}items/${id}/description`);
        return {data:res.data , error:false};
    }catch(err){
        return {data:err.response.data , error:true};
    }
   
}

module.exports = {getAllItems, getItemById , getItemDescriptionById};