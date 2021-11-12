import { SET_ACTIVE_ID, SET_BILL, SET_CUSTOM_PERCENT, SET_PEOPLE_COUNT, SET_STATIC_PERCENT } from "./actionTypes"

const validation = value => value.replace(/\D/g, '');

export const setBill = value => {
   return {
      type: SET_BILL,
      payload: validation(value)
   }
}

export const setStaticPercent = value => {
   return {
      type: SET_STATIC_PERCENT,
      payload: value
   }
}

export const setCustomPercent = value => {
   return {
      type: SET_CUSTOM_PERCENT,
      payload: validation(value)
   }
}

export const setPeopleCount = value => {
   return {
      type: SET_PEOPLE_COUNT,
      payload: validation(value)
   }
}

export const setActiveId = id => {
   return {
      type: SET_ACTIVE_ID,
      payload: id
   }
}