import React from 'react';
import Page from '../components/layout/Page'
import ProjectsListWithData from '../containers/ProjectsListWithData';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <h1>
          All Projects
        </h1>
        <ProjectsListWithData />
      </Page>
    );
  }
}