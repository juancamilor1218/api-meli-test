const currency = (amount) =>{
    const [amountResult,decimals] = amount.toString().split(".");    
    if(decimals === undefined){
        return {amountResult,decimals:"00"}
    }
    return {amountResult , decimals}
}

module.exports = currency;