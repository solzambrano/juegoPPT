/**recooriendo el htmlCollection */
let imagenes=document.getElementsByClassName("imagen");
let boton=document.getElementById('boton');
let section=document.getElementsByClassName('seccion');
boton.addEventListener("click",selectOption);
let opcionUsuario="";
let seccionResultado=document.getElementById("resultado");
let botonAgain=document.getElementById('again');
botonAgain.addEventListener('click',refresh);
let begin=false

/**otra manera de recorrer un collection */
Array.from(imagenes).forEach((imagen)=>{
    imagen.addEventListener("click",(e)=>{
         opcionUsuario=e.target.alt
         begin=true
        let picture=choiceElement(e.target.alt)
        section[0].style.display="none";
          setTimeout(()=>{
        section[1].innerHTML=`<img src="./assets/${picture}.png" width=60%/>`},500
    )
}
)
})
function refresh(){
    location.reload()
}

 function choiceElement(option){
    switch (option){
        case '0': return 'Piedra';
        case '1': return 'Papel';
        case '2': return 'Tijera' 
    }

 }
 
 function resultGame(resultado){
    seccionResultado.style.display="block";
    let diff=Number(opcionUsuario)-resultado
    if(diff ==1 ||diff ==-2){
        section[4].innerHTML=`<h2>Ganaste!!</h2>`
    }else{
        if(diff ==0){
            section[4].innerHTML=`<h2>Empate!!</h2>`
        }
        else section[4].innerHTML=`<h2>Perdiste :(</h2>`
        
    }
 }
 
 function selectOption(){
    if(begin){
    let selection=Math.floor(Math.random() * 3);
    let resultado=choiceElement(selection.toString())
    section[2].style.display="none";
    let mensaje=true;
    setTimeout(()=>{
        section[3].innerHTML=`<img src="./assets/${resultado}.png" width=60%/>`}
        ,500)
    setTimeout(()=>{
        if(mensaje){
            resultGame(selection)
            }
    },800)
    }else alert('Debe seleccionar una imagen para empezar')
    
 }
/**TODO hacer una lista de rachas y guardarla en storage */


/**recorriendo lista de nodos */
// let imagenes=document.querySelectorAll('.imagen')
//  console.log(imagenes)
// console.log(imagenes.length)
/**recorrido */
// imagenes.forEach((imagen)=>{
//     console.log(imagen)
//     imagen.addEventListener("click",(e)=>{
// })
// })
