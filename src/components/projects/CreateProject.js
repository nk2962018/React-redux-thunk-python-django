import React, {Component } from 'react';

class CreateProject extends Component {
    state = {
        title : '',
        content : '' 
    }

    handleChange = (e) =>{
        //console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }
  render(){
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text  text-darken-3">Sign In </h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div> 

                        <div className="input-field">
                            <label htmlFor="content">Project Content</label>
                            <textarea cols='30' rows='30' className='materialize-textarea' id="content" onChange={this.handleChange}></textarea>
                        </div> 

                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange}/>
                        </div> 

                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange}/>
                        </div> 


                    <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        </div> 
                </form>
            </div>
          
        );
      }
  }

export default CreateProject;
