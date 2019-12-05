import React, { Component } from 'react';

class SearchFood extends Component {


    state = {
        name : '',
    };

handleInput = (e) =>  {
    e.preventDefault();
    let { name,value } = e.target;
    // console.log ("name" , name);
    // console.log ("value" ,value);
    this.setState({ [name]: value });
    this.props.searchforFoods(this.state);
}

// handleSubmit = (e) => {
//     e.preventDefault();
  
//     this.props.searchforFoods(this.state);

//     this.setState ({  name :''});

//     }

render () {
    return (
        <div>
            {/* <form onSubmit={this.handleSubmit}> */}
                   
            <input onChange={this.handleInput} className="input" placeholder="Search food ..." type="text" name="name" value={this.state.name} />
            {/* <button type="submit">Search</button> */}
           
        />

        </div>
        )
}




}

export default SearchFood;