import { combineReducers } from 'redux'
import storeTree from './tree-reducer'
import storeProduct from './product-reducer'

export default combineReducers({
    storeTree,
    storeProduct
})