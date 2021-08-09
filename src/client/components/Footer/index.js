import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './footer.css';

export const Footer = () => (
    <Navbar bg="light" expand="xl" className="page-footer">
        <Container>
            <a href="http://arturkot.me" target="_blank">Made by Artur Kot</a>
        </Container>
    </Navbar>
);

