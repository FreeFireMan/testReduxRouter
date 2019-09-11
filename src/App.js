import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="wrapper" className="container" >
      <Header/>
      <Footer/>
    </div>
  );
}

const mapStateToProps = ({tree_data}) =>{
    return{
        tree_data
    }
}
export default connect(mapStateToProps)(App);
