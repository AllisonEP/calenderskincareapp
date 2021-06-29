// global variablese
//any initializations of the app
// dont start in here and refactor bc chaos

const base_url = "http://127.0.0.1:3000"
const productService = new ProductService(base_url)


Product.productForm.addEventListener('submit', handleSubmit)

productService.getProducts() //as soon as page loads i get this index method requested
Product.renderForm()

function handleSubmit(){
    //productService.createProduct()
    event.preventDefault()
    productService.createProduct()
    event.target.reset()
}

