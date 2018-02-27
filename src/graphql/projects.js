import gql from 'graphql-tag';

export const GET_ALL_PROJECTS = gql`
    query { 
        allProjects {
            id 
            slug
            name
            notes
            dueDate
        } 
    }
`;

export const GET_PROJECT_DETAILS = gql`
    query ($slug: String) {
        allProjects(filter: {
            slug: $slug
        }) {
            id 
            slug
            name
            notes
            dueDate
        } 
    }
`;