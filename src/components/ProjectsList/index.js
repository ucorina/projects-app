import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

function ProjectsList({ projects }) {
  const rows = projects.map((p, i) => (
    <Table.Row key={p.slug}>
      <Table.Cell collapsing>{i + 1}</Table.Cell>
      <Table.Cell>
        <Link to={`/project/${p.slug}`}>{p.name}</Link>
      </Table.Cell>
      <Table.Cell>{p.dueDate}</Table.Cell>
      <Table.Cell>{p.notes}</Table.Cell>
    </Table.Row>
  ));
  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nr.</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Due date</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
    </div>
  );
}

ProjectsList.propTypes = {
    projects: PropTypes.array
};

export default ProjectsList;
