const currency = (amount) =>{
    const [amountResult,decimals] = amount.toString().split("."); 
    console.log(amountResult +" "+decimals);    
    if(decimals === undefined){
        return {amountResult,decimals:"00"}
    }
    return {amountResult , decimals}
}

module.exports = currency;