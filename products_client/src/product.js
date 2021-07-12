class Product {
//the way we remember the objects here is:
    static all = []
    static productsContainer = document.getElementById("products-container")
    static calendarContainer = document.getElementById("calendar-container")

    //i have to remove this elemt outside this array if i delete bc delete does not refresh the page and this array will be populated w whatever you keep back from first fetch, so first time fetches everything in backend, so might need to add add method to front end to filter out and remove that element from this array.
    static productForm = document.getElementById("form-container")
    static mondayContainer = document.getElementById('M')
    static tuesdayContainer = document.getElementById('TU')
    static wednesdayContainer = document.getElementById('WE')
    static thursdayContainer = document.getElementById('TH')
    static fridayContainer = document.getElementById('FR')
    static saturdayContainer = document.getElementById('SA')
    static sundayContainer = document.getElementById('SU')

    
    constructor({id, name, brand, main_ingredient, user_id}){
        this.id = id
        this.name = name
        this.brand = brand
        this.main_ingredient = main_ingredient
        this.user_id = user_id
        this.element = document.createElement('ol')
        this.element.dataset.id = `${this.id}`
        this.element.id = `product-${this.id}`
        this.element.addEventListener('click', handleButton) //this is effing things up
       
        Product.all.push(this) //this is referencing the newly made instance
    }

    productHTML(){
        
        this.element.innerHTML +=
        `   <div class='product_list'>
                <h3 class="new_product_name" id='${this.id}'>${this.name}</h3>
                <p class="new_product_brand"> Brand: ${this.brand}</p>
                <p class="new_product_ingredint"> Primary Ingredient: ${this.main_ingredient}</p>
            </div>
            <p>Choose when to use it: </p>
            <button class='bttn' id='M'>Mon</button>
            <button class='bttn' id='TU'>Tues</button>
            <button class='bttn' id='WE'>Wed</button>
            <button class='bttn' id='TH'>Thu</button>
            <button class='bttn' id='FR'>Fri</button>
            <button class='bttn' id='SA'>Sat</button>
            <button class='bttn' id='SA'>Sun</button>
            <br>
            <br>
            <button class='bttn'>Delete</button>
            <br>
            <br>
        `
        const bttns = document.querySelectorAll('button')
        for (const button of bttns){
            button.addEventListener('click', this.handleButton)
        }

        return this.element
    }



    appendOnDom(){
        Product.productsContainer.append(this.productHTML())
 
    }


    

    static renderForm(){
        Product.productForm.innerHTML += `
        <h3>What've you got?<h3/>
        <form id="new-product-form" class='form'>
            Product Name: <input type="text" id="name">
            Brand: <input type="text" id="brand"> 
            Main/Active Ingredient: <input type="text" id="main_ingredient">
            <input type="submit" class="submit_button" id="productsubmit" value="Add">
        </form>
        `
        
    }
      
}
