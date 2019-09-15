import {FETCH_PRODUCT_PENDING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR} from '../action-types'

const initialState = {
    pendingProduct: false,
    product: {},
    errorProduct: null,
    pageSize : 21,
    totalPages: 0,
    currentPage: 1

}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_PENDING:
            return {
                ...state,
                pendingProduct: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pendingProduct: false,
                product: action.payload.content,
                totalPages: action.payload.page.totalPages,
                currentPage: action.payload.page.number + 1,

            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                pendingProduct: false,
                errorProduct: action.payload
            }
        default :
            return state;
    }
}
export const getProductPending = state => state.pendingProduct;
export const getProduct = state => state.treeProduct;
export const getProductError = state => state.errorProduct;
