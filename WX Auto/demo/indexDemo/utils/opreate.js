function getElement(page,select,flag){
    if(flag==0){
        element = page.$(select)
    }
    else{
        element = page.$$(select)
    }
   return element
}


module.exports = {getElement}
