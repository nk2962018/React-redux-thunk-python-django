import React from 'react'


const ProjectDetails = (props) => {
    console.log(props);
    return(
        <div>  
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Project title</span>
                            <p>something random</p>
                        </div>
                        <div className="card-action grey">
                            <div>Posted by Ninjs</div>
                            <div> sept 2nd 3030</div>
                        </div>
                    </div>
                    
                </div>
        </div>
        )
    }

export default ProjectDetails;

