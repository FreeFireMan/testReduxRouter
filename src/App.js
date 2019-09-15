import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBarView from "./components/SideBar";
import CardHolder from "./components/CardHolder";


class App extends React.Component {

    render() {
        return (
            <div id="wrapper" className="container">
                <Header/>
                <div>
                    <div id="category" className="row">
                            <SideBarView/>
                        <div id="featured" className="col-md-9">
                            <CardHolder/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default App
