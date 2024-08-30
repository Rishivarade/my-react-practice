import { DECREMENT, INCREMENT } from "../ActionType";

export function CounterIncrement(){
    return {type:INCREMENT,payload:1}
}
export function CounterDecrement(){
    return {type:DECREMENT,payload:1}
}