import {FETCH_TREE_PENDING,
    FETCH_TREE_SUCCESS,
    FETCH_TREE_ERROR} from '../action-types'

export function fetchTreePending() {
    return {
        type: FETCH_TREE_PENDING
    }
}

export function fetchTreeSuccess(tree) {
    return {
        type: FETCH_TREE_SUCCESS,
        payload: tree
    }
}

export function fetchTreeError(error) {
    return {
        type: FETCH_TREE_ERROR,
        payload: error
    }
}