import React, {Component} from 'react';


class Header extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            title: 'Keywords are here:',
            keywords: ''
        }
    }
    
    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.filterS(event.target.value)
    }
    render(){
        return(
            <header>
                <div className="logo" onClick={()=>{console.log('Clicked')}}>Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
                <div className="KeywordsHeader">{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header;