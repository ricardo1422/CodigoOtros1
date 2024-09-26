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
              displayUser(data)
          }
      ).catch((error)=>console.log("Problema con el Json",error))
      //se cambio en donde se llama la función del error
    }).catch((err), handleError(error));
}
//se cambio el como semuestran los datos 
function displayUser(data) {
  name.textContent = `Nombre: ${data.name}`;
  blog.textContent = `Blog: ${data.blog}`;
  location2.textContent = `Locación: ${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}


