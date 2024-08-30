import { legacy_createStore } from "redux"
import { reduer } from "./counter/reducer"
const initialstate={
    counter:0
}
export const store=legacy_createStore(reduer,initialstate)