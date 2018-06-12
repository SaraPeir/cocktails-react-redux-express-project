import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import {Image1} from '../../images/image1.jpeg';
import {Image2} from '../../images/image2.jpeg';


class Home extends Component {




  render() {


    return (
      <div className = "home-div">
        <div className = "image-div">
        </div>
        <div className = "text-div">
        <Link to={`/alcoholic`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Alcoholic drinks</button></Link>
        <Link to={`/analcolic`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>No alcoholic drinks</button></Link>
      </div>
  </div>
    );
  }
}

export default Home;
