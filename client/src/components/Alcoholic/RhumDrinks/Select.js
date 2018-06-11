import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { changeRhumSelectText } from '../../../actions';
import store from '../../../index.js';


class SelectRhum extends Component {
constructor(){
  super();
  this.state = {
    arrayRhumDrinks: []
  }
}

updateArray(){
  let array = this.props.arrayList;
    this.setState({
      arrayRhumDrinks: array
    });
  console.log('this.state.arrayRhumDrinks', this.state.arrayRhumDrinks)
}

updateArraySetTimeout(){
  setTimeout(this.updateArray.bind(this), 2000);  //In order to resolve the problem that arrayList3 was seen in its initial state (a void array, length = 0)
}

componentWillMount(){
  this.updateArraySetTimeout()
}

createOptions(){
  let array = this.state.arrayRhumDrinks;
    if(array != undefined && array.length > 0){
      let options = array[0].data.map((x, index) => <option key={index}> {x.name}</option>)
        return  options
      } else {
        return  <option>Array todavía vacío</option>
        }
    }

  render() {
    return (
      <div>
        <select>{this.createOptions()}</select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrayList: state.dataRhum.drinksDataRhum,
    selectedOption: state.selValRhum.selectRhumValue
  }
}

export default connect(mapStateToProps, { changeRhumSelectText })(SelectRhum)
