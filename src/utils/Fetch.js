let is_ok = true;

const data=["Sal","Frutos secos","Fideos de Arroz"]
let mostrar=(data)=>{
    return data
}

const Fetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        if (is_ok) {
        setTimeout(() =>{
                resolve(task)
              }, time);
            } else {
                reject("Error in the Fetch : (");
            }
    }); 
}

Fetch (10000,mostrar(data))
.then(datos => console.log(datos))
.catch(err => console.log(err))

export default Fetch;