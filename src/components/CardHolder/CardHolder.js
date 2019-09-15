import React, {Component} from 'react'
import {fetchProductPending, fetchProductSuccess, fetchProductError} from "../../actions/getProduct-action";
import {connect} from "react-redux";

class CardHolder extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
    componentWillMount() {
        const {thisfetchProductPending,thisfetchProductSuccess,thisfetchProductError} = this.props;
        const {filterFlag,pageSize} = this.props.storeProduct;

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
        console.log("shouldComponentRender")
        const {pendingProduct} = this.props;
        if (pendingProduct === false) return false;
        // more tests
        return true;
    }


render() {
    if (!this.shouldComponentRender()) {
        return <div>Loading</div>
    }
    return(<div>
      {/*  <div key={this.props.items.id} className="card m-1" style={{width: "260px"}}>
            <label className="containerForTree">
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <img src={this.props.items.baseImage} className="card-img-top" style={{width: "250px"}} alt="..."/>
            <div className="card-body">
                <h6 className="card-title">Код производителя: {this.props.items.partNumber}</h6>
                <p className="card-text">{this.props.items.article}</p>
                 <a href={items.id} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>*/}
        Test</div>
    )
}
}
const mapStateToProps = ({storeProduct}) => {
    return {storeProduct}
}

const mapDispatchToProps = (dispatch) => ({
    thisfetchProductPending : ()=> dispatch(fetchProductPending()),
    thisfetchProductSuccess: (result)=> dispatch(fetchProductSuccess(result)),
    thisfetchProductError: (error) => dispatch(fetchProductError(error))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardHolder);