import { robots } from "./robots.js";
import { getRobotById} from "./funciones.js";
import { getRobotBySeries} from "./funciones.js";
import { robotCardsRow} from "./funciones.js";


console.log(getRobotById("005"));
 console.log(getRobotById ("007"));

 console.log(getRobotBySeries(1));
 console.log(getRobotBySeries(5));