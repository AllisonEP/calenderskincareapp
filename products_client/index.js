// global variablese
//any initializations of the app
// dont start in here and refactor bc chaos

const base_url = "http://127.0.0.1:3000"
const productService = new ProductService(base_url)
//const userService = new UserService(base_url)
const mondayContainer = document.getElementById('M')

// const userService = new UserService(base_url)
// const body = document.querySelector("body")
// const logInput = document.querySelector("#login-form > p > input")
//const product_list = document.getElementById("product_list")
//const days = document.getElementById("day")
//const product_lists = document.getElementById("product_list")




Product.productForm.addEventListener('submit', handleSubmit)
//User.userForm.addEventListener('click', handleButton)
// User.userForm.addEventListener('click', handleClick)

//userService.getUsers()
//User.renderUserForm()


productService.getProducts() //as soon as page loads i get this index method requested
Product.renderForm()

function handleSubmit(){
    //productService.createProduct()
    event.preventDefault()
    productService.createProduct()
    event.target.reset()
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

// function handleOnClick(){
//     //productService.createProduct()
//     event.preventDefault()
//     userService.createUser()
//     event.target.reset()
// }


// body.addEventListener("click", event => {
//     //   hide & seek with the form
//     if (event.target.id === "login") {
//         const name = logInput.value
//         appBodyContainer.style.display = ""
        
//         loginContainer.style.display = "none"
        
//         renderGuestName(name)
//     }
//     else if (event.target.className === "logout") {
//         appBodyContainer.style.display = "none"
//         loginContainer.style.display = ""
        
//     }
// })
// })
