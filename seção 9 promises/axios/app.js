import axios from "axios";
axios.get('https://api.github.com/users/maykbrito')
  .then(respose => axios.get(res.data.user.repos_url))
  .then(repos => console.log(repos.data))
  .catch(err => console.log(err));

//promises all 

import axios from "axios";
Promise.all([
  axios.get('https://api.github.com/users/maykbrito'),
  axios.get('https://api.github.com/users/ricardokae'),
])
.then( response =>{
  console.log(response[0].data.events_url)
  console.log(response[1].data.bio)
})
.catch(err => console.log(err))

//axios com async await

import axios from 'axios'

async function fetchRepos(){
  try{
   const url = 'https://api.github.com/users/ricardokae'
  const user = await axios.get(url)
  const repos = await axios.get(user.data.repos_url)
  console.log(repos) 
  }catch(err){
    console.log(err)
  }
  
}
fetchRepos()