import { sumar,restar,multiplicar,dividir } from "./operaciones";

let numero1 = document.getElementById (num1);
let numero2 =document.getElementById (num2);
let resultado=document.getElementById(resultado);
let btnsumar=document.getElementById(btnsumar);
let btnrestar=document.getElementById(btnrestar);
let btnmultiplicar=document.getElementById(btnmultiplicar);
let btndividir=document.getElementById(btndividir);
let error1 = document.getElementById(error1)

let numero1V=0;
let numero2V=0;
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
res = sumar (n1.value,n2.value);

resultado.innerHTML=res;
resultador.style.color ="cyan"

})

btnrestar.addEventListener("click", function(e){
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
    res = restar (n1.value,n2.value);
    
    resultado.innerHTML=res;
    resultador.style.color ="red"
    
    })

btnmultiplicar.addEventListener("click", function(e){
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
        res = multiplicar (n1.value,n2.value);
        
        resultado.innerHTML=res;
        resultador.style.color ="greenyellow"
        
        })

btndividir.addEventListener("click", function(e){
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
            res = dividir (n1.value,n2.value);
            
            resultado.innerHTML=res;
            resultador.style.color ="violet"
            
            })