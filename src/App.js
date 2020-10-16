import React from 'react';
import List from './List'

export default class App extends React.Component {
  constructor (){
    super()
    this.state={
      list : [],
      name : "bjr"
    }
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleChangeEdit(e) {

    this.setState({ inputEdit: e.target.value })
  }

  updateName(a) {
    this.setState({
      name : a.target.value
    })
  }

  ajouter =() =>{
    let a = this.state
    let x = {
      value : a.name,
      validate : false,
      edit : false
    }
    a.list.push(x)
    console.log(a.list);
    a.name= ""
    this.setState(a)
    
  }

  suppr =(k)=>{
    let b = this.state
    b.list.splice(k,1)
    this.setState(b)

  }
  
  valider = (k)=>{
    let c = this.state
  
  console.log(c.list[k])
  if (c.list[k].validate===true) {
    c.list[k].validate=false
    
  }else{
    c.list[k].validate=true
  }
  this.setState(c)
  }
  modifier = (k) => {
    let d = this.state;
    if (d.list[k].edit === true) {

      d.list[k].edit = false;
      d.list[k].value = d.inputEdit
      d.inputEdit ="";
     
      console.log(d.list[k]);


    } else {
      d.list[k].edit = true;

    }

    this.setState(d)
    console.log("test");

  }



  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">
          To do List
                      </h1>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
            <input type="text" className="input mx-3 w-100" placeholder="Que dois-je faire ?"  value={this.state.name} onChange={a => this.updateName(a)}/>
            <button onClick={this.ajouter} className="btn btn-secondary"> Ajouter </button>
            </div>
          </div>
        </div>
        <ul className="list-group">
        <li className="list-group-item d-flex justify-content-center align-items-center border-0">
                <button className="btn btn-danger mx-2"> Toutes</button>
                <button className="btn btn-primary mx-2">Completées </button>
                <button className="btn btn-secondary mx-2"> A faire</button>
            </li>
        </ul>
        <ul className="list-group">
        {  this.state.list.map ((v,k) =>{
            if (v.edit === false) { 
          return ( 
       
        <List key={k}  name={v.value} btn={v.button}validate = {v.validate} add ={() => this.add(k) } 
        suppr ={() => this.suppr(k) } valider ={() => this.valider(k) } modifier={() => this.modifier(k)}/>
          )} else {
            return (
              <li key={k}>
                <input value={this.state.inputEdit} onChange={v => this.handleChangeEdit(v)} type="text" className="w-75" />
                <button onClick={() => this.modifier(k)} className="w-25"><i className="fas fa-check"></i></button>
              </li> 
          
            )
          }
      })} 

        </ul>

       
        </div>
      
)
}
}
