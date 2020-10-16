import React from 'react';

export default class List extends React.Component{
render(){
return(
    <li className= {`${this.props.validate===true ? "bg-success": "bg-light"} list-group-item d-flex  justify-content-between align-item-center  border-0`}>
    {this.props.name }
       <div>

                <button onClick={this.props.valider} className="btn btn-danger mx-2"> <i className="fas fa-check"></i></button>
                <button  onClick={this.props.modifier} className="btn btn-primary mx-2"><i className="fas fa-edit"></i></button>
                <button onClick={this.props.suppr} className="btn btn-secondary mx-2"><i className="fas fa-trash-alt"></i></button>
       </div>
            </li>
)
}
}