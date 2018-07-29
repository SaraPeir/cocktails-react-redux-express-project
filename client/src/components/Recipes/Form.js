import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
//import { changeSelectText } from '../../actions';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
          name: '',
          ingredients: '',
          recipe: '',
          data: []
        }
    
        this.writeName = this.writeName.bind(this);
        this.writeIngredients = this.writeIngredients.bind(this);
        this.writeRecipe = this.writeRecipe.bind(this);
        this.updateData = this.updateData.bind(this);
      }
    
      writeName(event){
        this.setState({
          name: event.target.value
        });
      }

      writeIngredients(event){
        this.setState({
          ingredients: event.target.value
        });
      }

      writeRecipe(event){
        this.setState({
          recipe: event.target.value
        });
      }

      updateData(){
        const {name, ingredients, recipe, data} = this.state;
        const newName = name;
        const newIngredients = ingredients;
        const newRecipe = recipe;
        if(newName !== '' && newIngredients !== '' && newRecipe !== '') {
            this.setState({
                data: data.concat({newName, newIngredients, newRecipe})
            });
        }
        
        console.log('data', this.state.data);
        this.resetName();
      }

      resetName(){
        this.setState({
            name: ''
          });
      }
 
  render() {
    return (
      <div>
      <input type="text" placeholder="Name" onChange={this.writeName} value={this.state.name} />
      <textarea rows="4" cols="50" placeholder="Ingredients" onChange={this.writeIngredients}></textarea>
      <textarea rows="4" cols="50" placeholder="Recipe" onChange={this.writeRecipe}></textarea>
      <button onClick={this.updateData}>Ok</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     arrayList: state.dataNoAlc.drinksDataNoAlc,
//     selectedOption: state.selVal.selectValue
//   }

// }

export default Form;

// export default connect(mapStateToProps, { changeSelectText })(Form);

// <select value = {this.props.selectedOption} onChange = {this.props.changeSelectText}><option>Analcolic drinks</option>{this.createOptions()}</select>



