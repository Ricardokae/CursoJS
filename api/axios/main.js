const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response =>{
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error =>console.log(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


function getUser(ide){
    axios.get(`${url}/${ide}`)
    .then(response =>{

        const data = response.data

        id.textContent = `id: ${data.id}`
        userName.textContent = `nome: ${data.name}`
        userCity.textContent = `cidade: ${data.city}`
        UserAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

function getUpdateUser(updateUser, id){
    axios.put(`${url}/${id}`, updateUser)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.log(error))
}


function deleteUser(id){
    axios.delete(`${url}/${id}`)
}

const updateUser ={
    name: "Julio more",
    avatar: "http://picsum.photos/400/200",
    city: "Guaíra"
}

const newUser = {
    name: "Ricardo Bento Caetano",
    avatar: "http://picsum.photos/400/200",
    city: "Miguelopolis"
}

/*addNewUser(newUser)*/
getUsers()
getUser(3)
deleteUser(19)
getUpdateUser(updateUser, 3)