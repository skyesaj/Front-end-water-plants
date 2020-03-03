import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Water My Plants</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              

              <NavLink href="/register">Sign Up</NavLink>

            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                My Plants
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href={`/users/${id}/plants`}>
                  List of My Plants
                </DropdownItem>
                <DropdownItem href="/plantform">
                  Add New Plant
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Always Reminding You To Water Your Plants!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;