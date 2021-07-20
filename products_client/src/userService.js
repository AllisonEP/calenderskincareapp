
// const userWelcome = document.querySelector('#avid')
// userWelcome.textContent = `${name}!`

class UserService{
    static avatarName = document.getElementById('avid')
    constructor(endpoint){
        this.endpoint = endpoint 
    }




    getUsers(){
        fetch(`${this.endpoint}/users`) //hitting and index endpoint here for array of object
        .then(resp => resp.json())
        .then(users => {
             //jsonify bc all responses return as strings and we want in json format for javascript wortk
        //now need to appen to dom dont write code in here, segway to product class which is responsible for this, where we create js object for each of these products inside the array and then use the instance methods associated with that class to append them to the dom
            for (const user of users){
            const u = new User(user)
            
            }
            User.all[User.all.length-1].appendOnDom()
        })
    }


    createUser(){
        const user = {
            name: document.getElementById('username').value,
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }

        fetch(`${this.endpoint}/users`, configObj)
        .then(resp => resp.json())
        .then(user => {
            console.log('test', user)
            const u = new User(user)
            u.appendOnDom()
        })
    }

    addName(element) {
        event.preventDefault()
        const id = element.parentElement.dataset.id
        fetch(`${this.endpoint}/users`)
         .then(resp => resp.json())
         .then(user => {
             UserService.avatarName.innerHTML +=
             `<p>${user.name}</p>`
             element.appendOnDom()
             
        })
        
}

deleteUsers(element){
    event.preventDefault()
    element.userElement.remove()
    const id = element.parentElement.dataset.id
    fetch(`${this.endpoint}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => {alert})
}
}