import React, { Component } from 'react'
import './App.css';
import Header from './header'
import CreateArea from './createarea'
import Note from './note'

class App extends  Component {
  state={
    notes:[]

  }

  addnote=(data)=>{
    const newdata=[...this.state.notes];
    newdata.push(data);
    this.setState({notes:newdata});
    
  }

  deleteHandler=(id)=>{
    const newnotes=[...this.state.notes];
    newnotes.splice(id,1);

    this.setState({notes:newnotes})

  }


  render(){
    let notes=null;
    if(this.state.notes.length>0){
      //const id=this.state.notes.length;
     
      notes=[...this.state.notes].map((note,id)=>{
        return <Note data={note} id={id} delete={this.deleteHandler} key={id}></Note>

      })
    }


    return(
      <div>
          <Header></Header>
          <CreateArea clicked={this.addnote}></CreateArea>
          {notes}
      </div>
      



    )


  }


  



}

export default App