import React from 'react'

import '../../main.css'

export class ProjectList extends React.Component {
  render() {
    let projectCard = this.props.projects
    return (
      <div className="main-content">
        {projectCard.map(el => <div className="project-cards"><img src={el.img} alt="photos" /></div>)}
      </div>
    )
  }
};
