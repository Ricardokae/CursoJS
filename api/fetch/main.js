const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json() )
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

function getUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}
/* POST */ 
function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}
/* PUT */
function getUpdateUser(updatedUser , id){
    fetch(`${url}/${id}`,{
        method:"PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then( data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

/* DELETE */
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}


const newUser = {
    name:"ricardoKae",
    avatar: "http://picsum.photos/400/200",
    city: "Miguelópolis"
}


const updateUser = {
    name: "marcelo",
    avatar: "http://picsum.photos/400/200",
    city: "polito"
    
}

getUsers()
getUser(1)
/*addUser(newUser)*?
/*getUpdateUser(updateUser, 1)*/
deleteUser(30)
