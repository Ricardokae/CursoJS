const btn = document.getElementById("btn")
const welcomeContainer = document.getElementById("welcome")
const listContainer = document.getElementById("list")
const nameInput = document.getElementById('name')

const listName =  JSON.parse(localStorage.getItem('name')) || []

 function createList(){
    const createLi =  document.createElement('li')
    createLi.textContent = nameInput.value
    listContainer.appendChild(createLi)
    savePerson()

    
 }

 function addNameList(){
    const name = nameInput.value
    listName.push(name)
    savePerson()
 }
//local Store

 function savePerson(){    
     localStorage.setItem('name', JSON.stringify(listName))     
    }


//event
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    addNameList()
    createList()
})



// appication start


