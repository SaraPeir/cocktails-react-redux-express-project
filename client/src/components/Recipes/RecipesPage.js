import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import Form from './Form';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class RecipesPage extends Component {

  render() {
    return (
      <div>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'black', textAlign: 'center'}}><button>Home</button></Link>
        <Form />
      </div>
    );
  }
}

export default RecipesPage;