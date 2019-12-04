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

    this.setState({ [name]: value });
   
}


render () {
return (
    <div>
        <form>
            <label> Name</label>
            
            <input onChange={this.handleInput} type="text" name="name" value={this.state.name} />
            <label> Calories</label>
            <input onChange={this.handleInput} type="text" name="calories" value={this.state.calories} />
            <label> Image</label>
            <input onChange={this.handleInput} type="text" name="image" value={this.state.image} />

        </form>



    </div>
);
}
}

export default AddFood;


