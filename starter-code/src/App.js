import React, { Component } from 'react';

import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends Component {
  state = {

    foodArray : foods,
    showForm : true

  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }


  // addFood = () => {
  //   const foodUpdated= [foodObj,...this.state.foodArray];

  //   this.setState({ foodArray : foodUpdated });
  //   // const moviesUpdated= [movieObj,...this.state.movies];// merge movie object with array movies

  //   // this.setState({movies : moviesUpdated});
  // }

  render() {
    return (

      <div className="App">

        {/* <AddFood  AddOneFood={this.addFood} /> */}
        <button onClick={this.toggleForm}>Show form</button>

        { this.state.showForm ?
          <AddFood  /> 
          :
          null
        }
        
       
      {/* <FoodBox foodName={foods[0].name} foodCalories={foods[0].calories} foodImages={foods[0].image}/> */}

      {/* { foods.map(( oneFood) => {
        return <FoodBox foodName={oneFood.name} foodCalories={oneFood.calories} foodImages={oneFood.image}/>
      })} */}

      { this.state.foodArray.map(( oneFood,index) => {
        return <FoodBox key={index} food={oneFood}/>
      })}
      {/* this.state.movies.map( (oneMovie, index) => {
            return <ImprovedCard key={index} {...oneMovie} clickToDelete={ ()=> this.deleteMovie(index)} />
          }) */}


     

      </div>
    );
  }
}

export default App;
