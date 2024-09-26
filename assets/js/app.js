const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se cambio el nombre de las variable para que no usen caracters especiales y usen nombres iguales para mas facil identificación
//se cambio por document.getbyid para manejar más facil los elementso
const name = document.getElementById('name');
const blog = document.getElementById('blog');
const location2 = document.getElementById('location');
//se modifico el metodo para obtener la promesa
getData('stolinski');
function getData(username){
  name.textContent = 'cargando...';
  const response = fetch(`${usersEndpoint}/${username}`,{method:"GET"});
  response.then((res)=>{
      res.json().then(
          (data)=>{
              console.log(data);
              displayUser()
          }
      ).catch((error)=>console.log("Problema con el Json",error))
    }).catch((err)=>console.log("Exitio un problema en la solicitud",err))
}
function displayUser() {
  console.log(data);
  name.textContent = `${data.name}`;
  blog.textContent = `${data.blog}`;
  location2.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}


