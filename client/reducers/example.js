import { Types } from "../actions/example";

 export default (state = { message: "TEST" }, action) => {
    switch(action.type) {
      case Types.TEST:
        return {...state, message: "EXAMPLE" }
      default: return state;
    }
 }