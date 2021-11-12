import { SET_ACTIVE_ID, SET_BILL, SET_CUSTOM_PERCENT, SET_PEOPLE_COUNT, SET_STATIC_PERCENT } from "./actions/actionTypes";

const initialState = {
   bill: '',
   staticPercent: '',
   customPercent: '',
   peopleCount: '1',
   activeId: null
}

const tipReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_BILL:
         return {
            ...state,
            bill: action.payload
         }
      case SET_STATIC_PERCENT:
         return {
            ...state,
            staticPercent: action.payload
         }
      case SET_CUSTOM_PERCENT:
         return {
            ...state,
            customPercent: action.payload
         }
      case SET_PEOPLE_COUNT:
         return {
            ...state,
            peopleCount: action.payload
         }
      case SET_ACTIVE_ID:
         return {
            ...state,
            activeId: action.payload
         }
      default:
         return state
   }
}


export default tipReducer;