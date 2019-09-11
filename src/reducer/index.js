import {ADD_ITEM_TO_CART} from '../action-types';
const initialState={
    prod_data: [],
    isLoadingProd: true,
    tree_data: {},
    isLoadingTree: true,
    filterFlag: 0,
    pageSize: 21,
    totalPages: 0,
    currentPage: 1,
    filter: [],
    isLoadingFilter: true,
    //    currentFilter: ["Возраст от", "Возраст до", "Launch Date", "Пол ребенка", "Content status", "Product Category", "Количество деталей"], // for lego
    currentFilter:["Диагональ экрана","Тип экрана","Цвет корпуса"], //for tpv
    arrayFilter: [], //храню чекнутые параметры в фильтре
    filterToUrl: {},

}
export default (state = initialState ,action)=>{
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            const {payload} = action;
            const {product} = state;
            const productCopy = [...product];
            console.log(product,state,action)
            const indexOfCurrentItem = productCopy.findIndex((el)=>el.id === payload);
            console.log(indexOfCurrentItem);
            productCopy[indexOfCurrentItem].isAddedToCart = !productCopy[indexOfCurrentItem].isAddedToCart;
            const upDateCount = productCopy.filter(el=> el.isAddedToCart);

            return {...state, product: productCopy,count: upDateCount.length};

        default : return state;
    }
}