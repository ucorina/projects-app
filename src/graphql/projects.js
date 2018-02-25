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
