import React from 'react';
import ProjectsListWithData from '../containers/ProjectsListWithData';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          All Projects
        </h1>
        <ProjectsListWithData />
      </div>
    );
  }
}