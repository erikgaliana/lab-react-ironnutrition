import React, { Component } from 'react';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';


class App extends Component {
  state = {

    foodArray : foods,
    filteredArray : foods ,
    showForm : true,
    textbutton : "Show form"

  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
    if (this.state.showForm) this.setState({ textbutton : "Show Form"}) ;
    else this.setState({ textbutton :  "Hide Form"}); 
  }
 

  addFood = (foodObj) => {
    const foodUpdated= [foodObj,...this.state.foodArray];

    this.setState({ foodArray : foodUpdated , filteredArray  : foodUpdated });
   
  }

  searchFood = (foodName) => {
      

       const result = this.state.foodArray.filter(meal => meal.name.toLowerCase().includes(foodName.name.toLowerCase()));
        console.log("result",result);
        console.log("palabra a vbuscar",foodName.name);
       
       this.setState({ filteredArray  : result});
   }

  render() {
    return (

      <div className="App">

       
        <button onClick={this.toggleForm}>
        {this.state.textbutton}

        </button>

        { this.state.showForm ?
          <AddFood AddOneFood={this.addFood} /> 
          :
          null
        }

          <SearchFood searchforFoods={this.searchFood}/>
       
       
     
      <div className="listContainer">
      { this.state.filteredArray.map(( oneFood,index) => {
        return <FoodBox key={index} food={oneFood}/>
      })}
      
      </div>
      

      </div>
    );
  }
}

export default App;
