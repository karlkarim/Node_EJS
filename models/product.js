const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(bookTitle){
        this.title = bookTitle;
    }

    saveProduct() {
        const dataPath = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'product.json'

        );
        fs.readFile(dataPath, (error,fileContent) => {
            let products = [];
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(dataPath, JSON.stringify(products), (error) => {
                console.log(error);                
            });
           
        });
    }


    static fetchAllProducts(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'product.json'
        );

        fs.readFile(dataPath, (error, fileContent) => {
            if(error){
                return callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

}