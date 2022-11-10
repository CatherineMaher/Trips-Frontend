import { station } from "./station";

export interface trips{
    id:number,
    startDate:string,
    endDate:string,
    fromStation:station,
    toStation:station,
}