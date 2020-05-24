import React, {Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

// 5.subscribe to store
//here we are going to connect dashoard component to redux store

import { connect } from 'react-redux'


class Dashboard extends Component {

  render(){
//console.log(this.props)

const { projects } = this.props

        return (

            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">

                        <Notifications/>
                    
                    </div>
                </div>
            </div>
          
        );
      }
  }


  // mapstatetoprops

  const mapStateToProps = (state) =>{
      return{
          projects : state.project.projects  // state.reducer.reducer property
      }
  }

  // 6.connect the component
export default connect(
    mapStateToProps
)( Dashboard);
