const axios = require('axios');

const URL_BASE = 'https://api.mercadolibre.com/'

const getAllItems = async (query) =>{
    try{
        const res = await axios.get(`${URL_BASE}sites/MLA/search?q=${query}`);
        return res.data ;
    }catch(err){
        console.log(err);
    }
   
}

const getItemById = async (id) =>{
    try{
        const res = await axios.get(`${URL_BASE}items/${id}`);
        return res.data ;
    }catch(err){
        console.log(err);
    }
   
}

const getItemDescriptionById = async (id) =>{
    try{
        const res = await axios.get(`${URL_BASE}items/${id}/description`);
        return res.data ;
    }catch(err){
        console.log(err);
    }
   
}

module.exports = {getAllItems, getItemById , getItemDescriptionById};