const nameForm = document.getElementById("name-form")
const welcomeContainer = document.getElementById("welcome")
const logoutBtn = document.getElementById("logout")

function checkUser() {
    const userName = localStorage.getItem('name')
    if(userName){
        nameForm.style.display = "none"
        welcomeContainer.style.display = 'block'

        const userNameElement = document.getElementById("username")
        userNameElement.textContent = userName
    }else{
        nameForm.style.display = "block"
        welcomeContainer.style.display = 'none'
    }
}
//event
nameForm.addEventListener('click', (e)=>{
    e.preventDefault();

    const nameInput = document.getElementById('name')

    localStorage.setItem('name', nameInput.value)

    nameInput.value = ""
    checkUser()
})

logoutBtn.addEventListener('click', ()=>{
    localStorage.removeItem("name")
    checkUser()
})

// appication start
checkUser()

