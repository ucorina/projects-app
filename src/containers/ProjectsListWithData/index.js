import React from 'react';
import ProjectsList from '../../components/ProjectsList';
import { graphql, compose } from 'react-apollo';
import { GET_ALL_PROJECTS } from '../../graphql/projects';

const ProjectsListWithData = ({ data }) => {
    if(data.loading) {
        return <div>Loading...</div>
    }
    if(data.error) {
        return <div>Ooops, something went wrong</div>
    }

    return <ProjectsList projects={data.allProjects} />
}

export default compose(
    graphql(GET_ALL_PROJECTS, { name: 'data' }),
  )(ProjectsListWithData);