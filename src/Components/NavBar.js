import { useState } from 'react';
import {Navbar, Nav, Container, NavDropdown, FormControl, Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/Actions/TaskAction'
import { filter } from '../redux/Actions/TaskAction'

function NavBar () {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => dispatch(filter("all"))}>All</NavDropdown.Item>
            <NavDropdown.Item onClick={() => dispatch(filter("done"))}>Done</NavDropdown.Item>
            <NavDropdown.Item onClick={() => dispatch(filter("not done yet"))}>Not done yet</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Container>
            <Form className="d-flex" style={{marginRight : '10px' }}>
                <FormControl
                type="search"
                className="me-2"
                aria-label="Search"
                onChange={e => setInput(e.target.value)}
                />
                <Button variant="outline-success" onClick={() => dispatch(addTask({id:Math.random(),done:false,description:input}))} >Add</Button>
            </Form>
        </Navbar>
  </>
    )
}

export default NavBar