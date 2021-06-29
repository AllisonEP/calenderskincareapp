//where I will make all the ser calls re: product obj

class ProductService{
    constructor(endpoint){
        this.endpoint = endpoint 
    }

//this is like an initialize method, where we set properties efor eaech instance of the class and then set endpoint at initialization, gets instantiated as global in indeex.js
//bc I am going to have a base url I don't want to change this repeatedly or write it or if I change port don't want to have to change everywhere 

//create my read fetch/index of products

    getProducts(){
        fetch(`${this.endpoint}/products`) //hitting and index endpoint here for array of object
        .then(resp => resp.json()) //jsonify bc all responses return as strings and we want in json format for javascript wortk
        .then(products => {
//now need to appen to dom dont write code in here, segway to product class which is responsible for this, where we create js object for each of these products inside the array and then use the instance methods associated with that class to append them to the dom
            for (const product of products){
            const p = new Product(product)
            p.appendOnDom()
            }
        })
    }

    createProduct(){
        const product = {
            name: document.getElementById('name').value,
            brand: document.getElementById('brand').value,
            main_ingredient: document.getElementById('main_ingredient').value,
            user_id: 1
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        }

        fetch(`${this.endpoint}/products`, configObj)
        .then(resp => resp.json())
        .then(product => {
            const p = new Product(product)
            p.appendOnDom()
        })
    }

    deleteProduct(id){
        fetch(`${this.endpoint}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {debugger})
    }
}
//^this method isnt called get so call in index.js
//but we don't want to keep making these calls to service we want to do just one time and remember those items if we wanty to do something like use a filter.