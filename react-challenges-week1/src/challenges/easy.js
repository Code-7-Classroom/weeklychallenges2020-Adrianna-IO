// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, 
// and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ 
// create a ‘person’ property and set it to an empty object.

import React, { Component } from 'react';


class Easy extends Component {
    constructor (props) {
        super(props);
      
          this.state = {
            person: {}
          }
      
        }
    render () {
        return (
            <div className="basicInfo">
                <p>Adrianna Isom-Owen</p>
                <p>704-333-3333</p>
                <p>09/21/1995</p>
            </div>
        );
    }
}


export default Easy; 
