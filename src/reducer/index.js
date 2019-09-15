import { combineReducers } from 'redux'
import storeTree from './tree'
import storeProduct from './product'

export default combineReducers({
    storeTree,
    storeProduct
})