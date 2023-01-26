const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json() )
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

function getUser(){
    fetch(`${url}/35`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

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

const newUser = {
    name:"ricardoKae",
    avatar: "http://picsum.photos/400/200",
    city: "Miguelópolis"
}

addUser(newUser)

getUsers()
getUser()