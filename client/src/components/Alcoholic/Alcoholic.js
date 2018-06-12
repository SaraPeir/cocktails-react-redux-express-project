import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import SelectGin from './GinDrinks/Select';
import DrinkCardGin from './GinDrinks/DrinkCard';

import SelectVodka from './VodkaDrinks/Select';
import DrinkCardVodka from './VodkaDrinks/DrinkCard';

import SelectRhum from './RhumDrinks/Select';
import DrinkCardRhum from './RhumDrinks/DrinkCard';


class Alcoholic extends Component {

  render() {
    return (
      <div>
      <h1>Alcoholic</h1>
      <SelectGin />
      <DrinkCardGin />
      <SelectVodka />
      <DrinkCardVodka />
<SelectRhum />
<DrinkCardRhum />
      </div>
    );
  }
}

export default Alcoholic;
