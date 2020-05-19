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
            <div className="main">
                {/* This method itierates through the state and each element of the array
                accepts info as an argument and returns a child div. Each child div has a 
                property called BasicInfo that is equal to the data from this.state. */}
                {this.state.person.map(
                    info => {
                        return <Child BasicInfo = {info} />
                    }
                )}
            </div>
           
        );
    }
}

// the child renders data from the state through the BasicInfo prop, which
// then allows us to call on the keys from state.
class Child extends Hard {
    render () {
        return (
            <div className="hard">
            <p>{this.props.BasicInfo.Name}</p>
            <p>{this.props.BasicInfo.Number}</p>
            <p>{this.props.BasicInfo.DOB}</p>
            </div> 
        );
    }
}



export default Hard; 