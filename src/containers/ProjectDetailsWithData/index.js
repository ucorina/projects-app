import React from 'react';
import ProjectDetails from '../../components/ProjectDetails';
import { graphql, compose } from 'react-apollo';
import { GET_PROJECT_DETAILS } from '../../graphql/projects';

const ProjectDetailsWithData = (props) => {
    console.log(props);
    const { data } = props;
    if(data.loading) {
        return <div>Loading...</div>
    }
    if(data.error) {
        return <div>Ooops, something went wrong</div>
    }

    return <ProjectDetails project={data.allProjects[0]} />
}

export default compose(
    graphql(GET_PROJECT_DETAILS, { 
        name: 'data',
        options: (props) => {
            console.log(props);
            return { variables: { slug: props.slug } }
        },
    }),
  )(ProjectDetailsWithData);