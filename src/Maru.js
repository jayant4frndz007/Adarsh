import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Maru extends Component{
    constructor(props){
            super(props);
            console.log('Constructor Part');
            this.state={
                val:1,
            }
    }
    componentWillMount(){
        console.log('componentWillMount Part');
    }
    callMaru=()=>{
        let a=(this.state.val);
            this.setState({val:a});
    }
    shouldComponentUpdate(nextprops,nextState){
        console.log('shouldComponentUpdate Part',nextState.val, this.state.val);
        if(nextState.val !== this.state.val)
                return true;

        return false
    }
    render(){
        console.log('render Part');
        return(<div>Maru

            <button style={{backgroundColor:'lightblue'}} onClick={this.callMaru}>Click Maru</button>
            Increment {this.state.val}
        </div>)
    }
    componentDidMount(){
        console.log('componentDidMount Part');
    }
}
