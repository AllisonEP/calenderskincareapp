//where I will make all the ser calls re: produ
class ProductService{
    static daysContainer = document.getElementById('days')
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
        event.preventDefault()
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

    deleteProduct(element){
        event.preventDefault()
        element.parentElement.remove()
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {alert})
    }

    findAddToCalMon(element) {
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.mondayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            `
        })
        
    }

    findAddToCalTues(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.tuesdayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }

    findAddToCalWeds(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.wednesdayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }

    findAddToCalThurs(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.thursdayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }

    findAddToCalFri(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.fridayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }


    findAddToCalSat(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.saturdayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }

    findAddToCalSun(element) {
        
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.sundayContainer.innerHTML +=
            `<h3 id='${product.id}'>${product.name}</h3>
            <p>${product.main_ingredient}</p>
            `
        })
        
    }

    RemoveFromCal(element) {
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`)
         .then(resp => resp.json())
         .then(product => {
            Product.parentNode.removeChild(element);  
        })
        
    }

    deleteElement(element){
        element.parentElement.remove()
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {alert})
    }
}
