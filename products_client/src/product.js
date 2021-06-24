class Product {
//the way we remember the objects here is:
    static all = []
    //i have to remove this elemt outside this array if i delete bc delete does not refresh the page and this array will be populated w whatever you keep back from first fetch, so first time fetches everything in backend, so might need to add add method to front end to filter out and remove that element from this array. 

    constructor(){

        Products.all.push(this) //this is referencing the newly made instance
    }


}