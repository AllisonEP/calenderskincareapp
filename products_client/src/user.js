class User {
    //the way we remember the objects here is:
        static all = []
        static usersContainer = document.getElementById("users-container").value
        static calendarContainer = document.getElementById("calendar-container")
        //i have to remove this elemt outside this array if i delete bc delete does not refresh the page and this array will be populated w whatever you keep back from first fetch, so first time fetches everything in backend, so might need to add add method to front end to filter out and remove that element from this array.
        static userForm = document.getElementById("login-container")
        static userAvatar = document.getElementById("avid")

        
    
        
        constructor({id, name}){
            this.id = id
            this.name = name
            this.element = document.createElement('ol')
            this.element.dataset.id = `${this.id}`
            this.element.id = `user-${this.id}`
            this.element.addEventListener('click', handleButton)
           
            User.all.push(this) //this is referencing the newly made instance
           
        }
    
        userHTML(){
             this.element.innerHTML +=
             `  <div class='avatarname'>
                    <h3 class='current_user' id='${this.id}'>${this.name}</h3>
                </div>
                <br>
                <br>
            `
            return this.element


        }
    
    
    
        appendOnDom(){
            User.userAvatar.append(this.userHTML())
        }

    
        
    
        static renderUserForm(){
            User.userForm.innerHTML += 
`
            <form class="login-form" id="login-container">
                Name: <input type="text" id="username">
                <br>
                <br>
                <button 
                type="button"
                class="onClickButton" 
                onclick="submitSomething()">Submit</button>
 
            </form>
            `
        }
    
    }
    
    