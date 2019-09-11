import {ADD_ITEM_TO_CART} from '../action-types'
export const toggleItemToCart = (id) =>{
    return{
        type: ADD_ITEM_TO_CART,
        payload: id
    }
};