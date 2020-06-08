import React from 'react';
import DisplayJsonData from './display';
import '../bootstrap.min.css';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            response:[],
            finalresults:[],
            flag:false,
            expandAll: true
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => this.setState({
            response: json 
        }));
    }

    handleChange = ({target}) =>{
        this.setState({
            [target.name]:[target.value]
        })
    }

    handleSubmittry = () =>{
        console.log("Hello i am handle submit")
      var results = [];
      var entry;
          for(var i=0; i < this.state.response.length;i++){
              entry = this.state.response[i]
                if(entry.email == this.state.email){
                    results.push(entry);
                    // console.log(" result of search ",results);
                    this.setState({ flag:false });
                    this.setState({ finalresults:results });
                }
          }
            if(results.length == 0){
            this.setState({ flag:true });
            // console.log(" in if ",this.state.flag);
            }
            else{
                this.setState({ flag:false });
                // console.log(" in else ",this.state.flag);
            }
    }

    showMoreMethod = () => {
        this.setState({ expandAll: !this.state.expandAll });
      }

    render(){
    return(
        <div className="jumbotron" style={{background:'darkorange',color:'black'}}>
          <h3>I am Home Component-!!</h3>
                    <label htmlFor="email">User Email ID</label>&nbsp;&nbsp;&nbsp;
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="email" 
                    id="email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    className="form-control" />
                    <p></p>
                    <button type="button" className="btn btn-primary" 
                    style={{width:'70px'}}
                    onClick={this.handleSubmittry}>Search</button>
                    <br/>
                    {this.state.flag ? <h5>{this.state.email}{" "}Email you Entered is InCorrect, Please Try Again</h5> 
                                                        : <DisplayJsonData res = {this.state.response}
                                                            email = {this.state.email}
                                                            finalresults = {this.state.finalresults}
                                                            flag = {this.state.flag} 
                                                            expandall = {this.state.expandAll}
                                                            showMoreMethod = {this.showMoreMethod}
                                                            />}
                    <br/>
        </div>
    );
}
}
export const About = () =>{
    return(
        <div className="jumbotron" style={{background:'darkviolet',color:'black'}}>
            <h1>I am About Component-!!</h1>
        </div>
    );
}

export const Contact = () =>{
    return(
        <div className="jumbotron" style={{background:'rgb(24, 132, 233)',color:'black'}}>
            <h1>I am Contact Component-!!</h1>
        </div>
    );
}