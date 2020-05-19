// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor. 
// Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. 
// (This challenge should not change the look of the page)



import React, { Component } from 'react';

// parent 
class Medium extends Component {
    constructor (props) {
        super(props);
      
          this.state = {
            person: 
              {
              Name: "Adrianna Isom-Owen",
              Number: "704-333-3333",
              DOB: "09/21/1995"
              }
      
          }
      
        }
    render () {
        return (
           <Child BasicInfo = {this.state} />
        );
    }
}


class Child extends Medium {
    render () {
        return (
            <div className="medium">
            <p>{this.props.BasicInfo.person.Name}</p>
            <p>{this.props.BasicInfo.person.Number}</p>
            <p>{this.props.BasicInfo.person.DOB}</p>
            </div> 
        );
    }
}



export default Medium; 


