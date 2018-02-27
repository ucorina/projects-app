import React from 'react';
import Page from '../components/layout/Page'
import ProjectDetailsWithData from '../containers/ProjectDetailsWithData';

export default class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page>
        <ProjectDetailsWithData slug={this.props.match.params.slug} />
      </Page>
    );
  }
}