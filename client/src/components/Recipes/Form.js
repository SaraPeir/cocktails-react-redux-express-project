import React from 'react';
import { Component } from 'react';

class Form extends Component { 
  render() {
    return (
      <div>
      <input type="text" placeholder="Name" onChange={this.props.onWriteName} value={this.props.cocktailName} />
      <textarea rows="4" cols="50" placeholder="Ingredients" onChange={this.props.onWriteIngredients} value={this.props.cocktailIngredients}></textarea>
      <textarea rows="4" cols="50" placeholder="Recipe" onChange={this.props.onWriteRecipe} value={this.props.cocktailRecipe}></textarea>
      <button onClick={this.props.onUpdateData}>Ok</button>
      </div>
    );
  }
}

export default Form;


// import React from 'react';
// import { Component } from 'react';

// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//           name: '',
//           ingredients: '',
//           recipe: '',
//           data: []
//         }
    
//         this.writeName = this.writeName.bind(this);
//         this.writeIngredients = this.writeIngredients.bind(this);
//         this.writeRecipe = this.writeRecipe.bind(this);
//         this.updateData = this.updateData.bind(this);
//       }
    
//       writeName(event){
//         this.setState({
//           name: event.target.value
//         });
//       }

//       writeIngredients(event){
//         this.setState({
//           ingredients: event.target.value
//         });
//       }

//       writeRecipe(event){
//         this.setState({
//           recipe: event.target.value
//         });
//       }

//       updateData(){
//         const {name, ingredients, recipe, data} = this.state;
//         const newName = name;
//         const newIngredients = ingredients;
//         const newRecipe = recipe;
//         if(newName !== '' && newIngredients !== '' && newRecipe !== '') {
//             this.setState({
//                 data: data.concat({newName, newIngredients, newRecipe})
//             });
//         }
        
//         console.log('data', this.state.data);
        
//         this.resetName();
//         this.resetIngredients();
//         this.resetRecipe();
//       }

//       resetName(){
//         this.setState({
//             name: ''
//           });
//       }

//       resetIngredients(){
//         this.setState({
//             ingredients: ''
//           });
//       }

//       resetRecipe(){
//         this.setState({
//             recipe: ''
//           });
//       }
 
//   render() {
//     return (
//       <div>
//       <input type="text" placeholder="Name" onChange={this.writeName} value={this.state.name} />
//       <textarea rows="4" cols="50" placeholder="Ingredients" onChange={this.writeIngredients} value={this.state.ingredients}></textarea>
//       <textarea rows="4" cols="50" placeholder="Recipe" onChange={this.writeRecipe} value={this.state.recipe}></textarea>
//       <button onClick={this.updateData}>Ok</button>
//       </div>
//     );
//   }
// }

// export default Form;

