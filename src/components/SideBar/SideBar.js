import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTreePending, fetchTreeSuccess, fetchTreeError} from '../../actions/getTree-action'
import "./SideBar.css";
import ChildTree from "../ChildTree/ChildTree";


class SideBar extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {thisfetchTreePending,thisfetchTreeSuccess,thisfetchTreeError} = this.props;

        fetch("http://localhost:8080/api/catalog")
            .then(response => {
                return response.json();
            })
            .then(result => {
                thisfetchTreeSuccess(result)
                thisfetchTreePending();
            })
            .catch(error => {
                thisfetchTreeError(error)
            });
    }

    shouldComponentRender() {
        const {pendingTree} = this.props.storeTree;
        if (pendingTree === false) return false;
        // more tests
        return true;
    }

    render() {
        const {errorTree,tree,check,displayChild,filterFlag} = this.props.storeTree;
        if (!this.shouldComponentRender()) {
            return <div>Loading</div>
        }
        let children = null;
        if (displayChild){
            children = <ChildTree items={tree.children} filterFlag={filterFlag} handleClick={this.handleClick}/>
        }

        return (
            <div className="col-md-3 pl-0">
                {errorTree && <span className='col-md-3 pl-0'>{errorTree}</span>}
                <div>
                    <div id={tree.id} key={tree.id}>
                        <label className="containerForTree">{tree.name}
                            <input type="checkbox" onClick={this.expandParent} defaultChecked={check}/>
                            <span className="checkmark" data-toggle="popover" data-content="Disabled popover">
                                    </span>

                        </label>
                    </div>
                    {
                        children
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({storeTree}) => {
    return {storeTree}
}

const mapDispatchToProps = (dispatch) => ({
    thisfetchTreePending : ()=> dispatch(fetchTreePending()),
    thisfetchTreeSuccess: (result)=> dispatch(fetchTreeSuccess(result)),
    thisfetchTreeError: (error) => dispatch(fetchTreeError(error))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);