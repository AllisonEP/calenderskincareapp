// global variablese
//any initializations of the app
// dont start in here and refactor bc it can cause a lot of confusion

const base_url = "http://127.0.0.1:3000"
const productService = new ProductService(base_url)

productService.getProducts() //as soon as page loads i get this index method requested
