import { robots } from "./robots.js";


 const {series, id, name} =robots[0];
 console.log("------------------------------");
 console.log(`la serie es : ${series}`);
 console.log(`El id es : ${id}`);
console.log( ` El nombre es : ${name}`);


                // find 
                // Es para sacar una sola cosa

 const getRobotById =(id='013') => {
    return robots.find((robot)=>{
         return robot.id === id;
    });
 }

 console.log(getRobotById("005"));
 console.log(getRobotById ("007"));


    // lo mismo pero con function
    // Solo se puede usar uno a la vez

//function getRobotById (id){

//    return robots.find(function(robot){
//        return robot.id ===id;

//    })
// }
// let robot = getRobotById("002");
// console.log(robot);


            // FILTER
            // Es para sacar varias cosas

const getRobotBySeries =(series=1)=>{
    return robots.filter((robot)=>{
        return robot.series ===series;

    });
}
console.log(getRobotBySeries(1));

//para mostrar en formato de  tabla se usa el clt

console.table(getRobotBySeries(2));

        // como lo declaramos en el 33 podriamos usar lo de abajo en vez de volver a escribir el clg

//robot = getRobotBySeries(2);
//console.table(robot);



                //Map
                // Recorre cada uno

                


