import React, {Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENT HEADER
import Header from './components/header'
//Importing JSON
import JSON from './db.json'
// Importing News list
import NewsList from './components/newslist'

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            news:JSON,
            filtered: JSON
        }
    }

    filtersearch(keywords){
        console.log(keywords);
        console.log(this.state.news);
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })
        console.log(filtered);
        console.log();
        this.setState({filtered});
    }

    render(){
        return(
            <div>
                <Header filterS={keywords=>this.filtersearch(keywords)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));