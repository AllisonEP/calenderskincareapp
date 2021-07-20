// global variablese
//any initializations of the app
// dont start in here and refactor bc chaos

const base_url = "http://127.0.0.1:3000"
const productService = new ProductService(base_url)
const userService = new UserService(base_url)
const mondayContainer = document.getElementById('M')
const userLoginForm = document.getElementById("login-cotainer")





Product.productForm.addEventListener('submit', handleSubmit)


userService.getUsers()
User.renderUserForm()


productService.getProducts() //as soon as page loads i get this index method requested
Product.renderForm()

function handleSubmit(event){
    event.preventDefault()
    productService.createProduct()
    event.target.reset()
}

function submitSomething(event){
    event.preventDefault()
    userService.createUser()
    event.target.reset();    
}




function handleButton(event){ 
    event.preventDefault()
    if (event.target.innerText === 'Delete'){
        productService.deleteProduct(event.target)
    }
    else if (event.target.innerText === 'Mon'){
        productService.findAddToCalMon(event.target)
    }
    else if (event.target.innerText === 'Tues'){

        productService.findAddToCalTues(event.target)
    }
    else if (event.target.innerText === 'Wed'){
        productService.findAddToCalWeds(event.target)
    }
    else if (event.target.innerText === 'Thu'){
        productService.findAddToCalThurs(event.target)
    }
    else if (event.target.innerText === 'Fri'){
        productService.findAddToCalFri(event.target)
    }
    else if (event.target.innerText === 'Sat'){
        productService.findAddToCalSat(event.target)
    }
    else if (event.target.innerText === 'Sun'){
        productService.findAddToCalSun(event.target)
    }

}

