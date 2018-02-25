import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetails = ({ project }) => (
    <div>
        <h1>{project.name}</h1>
    </div>
)

ProjectDetails.propTypes = {
    project: PropTypes.object
}

export default ProjectDetails