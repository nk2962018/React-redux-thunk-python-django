import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div>  
                <div className="project-list section">
                    <div className="casr-content grey-text">
                        <span className="card-title">{project.title}</span>
                        <p>Posted by net ninja </p>
                        <p className="grey-text"> may 11</p>
    
                    </div>
                    
                </div>
        </div>
        )
    }

export default ProjectSummary;

