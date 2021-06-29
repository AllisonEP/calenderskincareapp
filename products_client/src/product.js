class Product {
//the way we remember the objects here is:
    static all = []
    static productsContainer = document.getElementById("products-container")
    //i have to remove this elemt outside this array if i delete bc delete does not refresh the page and this array will be populated w whatever you keep back from first fetch, so first time fetches everything in backend, so might need to add add method to front end to filter out and remove that element from this array.
    static  productForm = document.getElementById("form-container")

    constructor({id, name, brand, main_ingredient, user_id}){
        this.id = id
        this.name = name
        this.brand = brand
        this.main_ingredient = main_ingredient
        this.user_id = user_id
        
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `product-${this.id}`
        this.element.addEventListener('click', this.handleClick)


        Product.all.push(this) //this is referencing the newly made instance
    }

    productHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.brand} - ${this.main_ingredient}</p>
            </div>
            <button id="delete-bttn">Delete</button>
            <br>
            <br>
        `
        return this.element
    }

    appendOnDom(){
        Product.productsContainer.append(this.productHTML())
       // Product.productsContainer.appendChild(productHTML())
    }

    static renderForm(){
        Product.productForm.innerHTML += `
        <form id="new-product-form">
            Product Name: <input type="text" id="name">
            Brand: <input type="text" id="brand"> 
            Main/Active Ingredient: <input type="text" id="main_ingredient"> 
            <input type="submit" id="create"> 
        <form>
        `
    }

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove(this.id)
            productService.deleteProduct(this.id)
        }
     }
  
}

//event.preventDefault()
//productService.createProduct()
//event.target.reset()