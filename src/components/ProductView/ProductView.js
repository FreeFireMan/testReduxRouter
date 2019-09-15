import React, {Component} from 'react'
import {fetchProductError, fetchProductPending, fetchProductSuccess} from "../../actions/getProduct-action";
import {connect} from "react-redux";


class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {thisfetchProductPending, thisfetchProductSuccess, thisfetchProductError} = this.props;
        const {pageSize} = this.props.storeProduct;
        const {filterFlag} = this.props;

        fetch(`http://localhost:8080/api/categories/${filterFlag}/products?page=1&size=${pageSize}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        }).then(response => {
            return response.json();
        })
            .then(result => {
                thisfetchProductSuccess(result)
                thisfetchProductPending();
            })
            .catch(error => {
                thisfetchProductError(error)
            });
    }

    shouldComponentRender() {
        console.log("shouldComponentRender", this.props)
        const {pendingProduct} = this.props.storeProduct;
        if (pendingProduct === false) return false;
        // more tests
        return true;
    }


    render() {
        if (!this.shouldComponentRender()) {
            return <div>Loading</div>
        }
        const {product} = this.props.storeProduct
        return (
            <div id="MaineContent" className="d-flex align-content-stretch flex-wrap">
                {
                    product.map(items =>
                        <div key={items.id} className="card m-1" style={{width: "260px"}}>
                            <label className="containerForTree">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <img src={items.baseImage} className="card-img-top" style={{width: "250px"}} alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">Код производителя: {items.partNumber}</h6>
                                <p className="card-text">{items.article}</p>
                                <a href={items.id} className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = ({storeProduct, storeTree:{filterFlag}}) => {
    return {storeProduct, filterFlag}
}

const mapDispatchToProps = (dispatch) => ({
    thisfetchProductPending: () => dispatch(fetchProductPending()),
    thisfetchProductSuccess: (result) => dispatch(fetchProductSuccess(result)),
    thisfetchProductError: (error) => dispatch(fetchProductError(error))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);