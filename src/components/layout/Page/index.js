import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Page = ({ children }) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          Projects app
        </Menu.Item>
        <Menu.Item as={Link} to="/">All projects</Menu.Item>
      </Container>
    </Menu>

    <Container style={{ marginTop: '7em' }}>
      {children}
    </Container>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
