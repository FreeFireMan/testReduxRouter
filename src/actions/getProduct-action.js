import {
    FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR} from '../action-types'

export function fetchProductPending() {
    return {
        type: FETCH_PRODUCT_PENDING
    }
}

export function fetchProductSuccess(product) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export function fetchProductError(error) {
    return {
        type: FETCH_PRODUCT_ERROR,
        payload: error
    }
}