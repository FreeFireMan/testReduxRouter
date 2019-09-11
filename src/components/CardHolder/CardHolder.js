import React, {Component} from 'react'
class CardHolder extends Component {
render() {
    return(
        <div key={this.props.items.id} className="card m-1" style={{width: "260px"}}>
            <label className="containerForTree">
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
            <img src={this.props.items.baseImage} className="card-img-top" style={{width: "250px"}} alt="..."/>
            <div className="card-body">
                <h6 className="card-title">Код производителя: {this.props.items.partNumber}</h6>
                <p className="card-text">{this.props.items.article}</p>
                {/* <a href={items.id} className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    )
}
}
export default CardHolder;