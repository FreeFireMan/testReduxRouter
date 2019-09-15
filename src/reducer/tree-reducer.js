import {FETCH_TREE_PENDING,
    FETCH_TREE_SUCCESS,
    FETCH_TREE_ERROR} from '../action-types'

const initialState = {
    pendingTree: false,
    tree: {},
    errorTree: null,
    displayChild: true,
    check: true,
    filterFlag: 0,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TREE_PENDING:
            const {pending} = state;
            return {
                ...state,
                pendingTree: true
            }
        case FETCH_TREE_SUCCESS:
            return {
                ...state,
                pendingTree: false,
                tree: action.payload
            }
        case FETCH_TREE_ERROR:
            return {
                ...state,
                pendingTree: false,
                errorTree: action.payload
            }
        default :
            return state;
    }
}
export const getTreePending = state => state.pendingTree;
export const getTree = state => state.tree;
export const getTreeError = state => state.errorTree;
