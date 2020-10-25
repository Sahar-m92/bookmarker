import React, {Component} from 'react';
import User from './user'
class Users extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <User age="20">sahar</User>
                <User age="30">shahab</User>
                <User age="5">karim</User>
            </div>

        ) 
    }
}
export default Users;