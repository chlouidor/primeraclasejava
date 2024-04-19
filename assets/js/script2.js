import { sumar,restar,multiplicar,dividir } from "./operaciones.js";

let numero1 = document.getElementById ("num1");
let numero2 =document.getElementById ("num2");
let resultado=document.getElementById("resultado");
let btnsumar=document.getElementById("btnsumar");
let btnrestar=document.getElementById("btnrestar");
let btnmultiplicar=document.getElementById("btnmultiplicar");
let btndividir=document.getElementById("btndividir");
let error1 = document.getElementById("error1");

let res=0;

btnsumar.addEventListener("click", function(e){
    e.preventDefault();

error1.innerHTML= "";

if (numero1.value ===""){
    error1.innerHTML ="Error, debe ingresar el primer numero"
    error1.style.color = "red";
    return;
}

if (numero2.value ===""){
    error1.innerHTML ="Error, debe ingresar el segundo numero"
    error1.style.color = "red";
    return;
}
res = sumar (numero1.value,numero2.value);

resultado.innerHTML=res;
resultado.style.color ="cyan";
resultado.style.backgroundColor="black";
resultado.style.borderRadius="0.4rem";

})

btnrestar.addEventListener("click", function(e){
    e.preventDefault();

    error1.innerHTML= "";
    let resFinal=0;
    
    if (numero1.value ===""){
        error1.innerHTML ="Error, debe ingresar el primer numero"
        error1.style.color = "red";
        return;
    }
    
    if (numero2.value ===""){
        error1.innerHTML ="Error, debe ingresar el segundo numero"
        error1.style.color = "red";
        return;
    }
    res = restar (numero1.value,numero2.value);
    
    resFinal= `el resultado es ${res}`;
    resultado.innerHTML=resFinal;
    resultado.style.color ="red"
    resultado.style.backgroundColor="black";
    resultado.style.borderRadius="0.4rem";
    
    })

btnmultiplicar.addEventListener("click", function(e){
        e.preventDefault();

        error1.innerHTML= "";
        let resFinal=0;
        
        if (numero1.value ===""){
            error1.innerHTML ="Error, debe ingresar el primer numero"
            error1.style.color = "red";
            return;
        }
        
        if (numero2.value ===""){
            error1.innerHTML ="Error, debe ingresar el segundo numero"
            error1.style.color = "red";
            return;
        }
        res = multiplicar (numero1.value,numero2.value);

        resFinal= `el resultado es ${res}`;
        resultado.innerHTML=resFinal;
        resultado.style.color ="greenyellow";
        resultado.style.backgroundColor="black";
        resultado.style.borderRadius="0.4rem";
        
        })

btndividir.addEventListener("click", function(e){
            e.preventDefault();
            
            let resFinal="0"
            error1.innerHTML= "";
            
            if (numero1.value ===""){
                error1.innerHTML ="Error, debe ingresar el primer numero"
                error1.style.color = "red";
                return;
            }
            
            if (numero2.value ===""){
                error1.innerHTML ="Error, debe ingresar el segundo numero"
                error1.style.color = "red";
                return;
            }
            res = dividir (numero1.value,numero2.value);
            
            resFinal= `el resultado es ${res}`;
            resultado.innerHTML=resFinal;
            resultado.style.color ="violet";
            resultado.style.backgroundColor="black";
            resultado.style.borderRadius="0.4rem";
           
            
            })