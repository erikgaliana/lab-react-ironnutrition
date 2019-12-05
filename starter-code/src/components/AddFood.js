import React, { Component } from 'react';

class AddFood extends Component {
    state = {
        name : '',
        calories : '',
        image : ''
    };

handleInput = (e) =>  {
console.log("e.target : ", e.target);
    let { name,value } = e.target;
    console.log ("name" , name);
    console.log ("value" ,value);
    this.setState({ [name]: value });
   
}

handleSubmit = (e) => {
    e.preventDefault();
  

    this.props.AddOneFood(this.state);

    this.setState ({  name :'',calories :'',image :''});

    }




render () {
return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <label> Name</label>
            
            <input onChange={this.handleInput} type="text" name="name" value={this.state.name} />
            <label> Calories</label>
            <input onChange={this.handleInput} type="text" name="calories" value={this.state.calories} />
            <label> Image</label>
            <input onChange={this.handleInput} type="text" name="image" value={this.state.image} />
            <button>Submit</button>
        </form>



    </div>
);
}
}

export default AddFood;


