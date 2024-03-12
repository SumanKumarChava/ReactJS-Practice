import React from 'react';
class UserClass extends React.Component{

    //let {name, location} = this.props;

    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const {name, location} = this.props;
        return(
            <div class="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Occupation : Mr Cool</h4>
            </div>
        )
    }
}

export default UserClass;