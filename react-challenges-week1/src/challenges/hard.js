// HARD: Now that you have a basic react app to display one person’s worth of information, 
// now modify the app to iterate over an array of people’s basic information, while still keeping 
// the new list of contacts in the top-level of state. 
// (Optional: add styling to space out each person’s info)


import React, { Component } from 'react';

// parent 
class Hard extends Component {
    constructor (props) {
        super(props);
      
          this.state = {
            person: [
                {
                    Name: "Adrianna" ,
                    Number: "704-333-3333",
                    DOB: "09/21/1995"
                },
                {
                    Name: "Alex" ,
                    Number: "919-333-3333",
                    DOB: "08/13/1993"
                  },
                  {
                    Name: "August" ,
                    Number: "980-333-3333",
                    DOB: "03/25/2021"
                  }
            ]
              
      
          }
      
        }
    render () {
        return (
            // person.map(//child element) or for each 
            // // map through and render 3 times
           <Child BasicInfo = {this.state} />
        );
    }
}


class Child extends Hard {
    render () {
        return (
            <div className="hard">
            <p>{this.props.BasicInfo.person.Name}</p>
            </div> 
        );
    }
}



export default Hard; 