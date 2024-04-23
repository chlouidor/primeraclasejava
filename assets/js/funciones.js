import { robots } from "./robots.js";


export const getRobotById =(id='013') => {
    return robots.find((robot)=>{
         return robot.id === id;
    });
 }

 export const getRobotBySeries =(series=1)=>{
    return robots.filter((robot)=>{
        return robot.series ===series;

    });
}

const createCard = ( series,id,name,weapon,avatar,sprite1) => {
    return`
    
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="card" 
        <img src="${avatar}" class="card-img-top" alt="${name}">
        <img src="${sprite1}" class="card-img-top mt-1 w-50" alt="${name}">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p>${series} </p>
        <p>${weapon} </p>
        </div>
    
    </div>
    </div>
`;

}


export const robotCardsRow = document.getElementById('robotCardsRow');
    robots.map ( (robot)=>{
        const card = createCard (robot.series,robot.id,robot.name,robot.weapon,robot.avatar,robot.sprite1)
        robotCardsRow.innerHTML += card;

    } );