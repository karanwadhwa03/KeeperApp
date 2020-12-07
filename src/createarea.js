import React, { Component } from 'react'

class Createarea extends Component{
    state={
        title:"",
        content:""
    }
    handleChange=(event,name)=>{
       
        this.setState({[name]:event.target.value})
    }

    send=(event)=>{
        event.preventDefault();
        var data=this.state;
        console.log(this.state);
        this.props.clicked(data);


    }


    render(){

        return(
            <div>
            <form>
              <input
                name="title"
                 onChange={(event)=>this.handleChange(event,'title')}
                 value={this.state.title}
                placeholder="Title"
              />
              <textarea
                name="content"
                 onChange={(event)=>this.handleChange(event,'content')}
                 value={this.state.content}
                placeholder="Take a note..."
                rows="3"
              />
              <button onClick={this.send}>Add</button>
            </form>
          </div>


        )


    }




}
export default Createarea
