import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import './Navbarnya.css';

import logo from './Image/logo.png';
import gps from './Image/gps.png';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../Search/Search';




const Navbarnya = () => {


    return (
        <div>
            <Navbar variant="dark" className="navini text-white" style={{ backgroundImage: 'linear-gradient(to right,#0E0C58, #0C3458, #07A8CB,#07A8CB)' }}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="65"

                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={gps}
                            width="100"

                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        


            {/* Dropdown */}

                                {/* <Dropdown className="ml-5 dropdownya">
        <Dropdown.Toggle className="title" align="end" style={{ backgroundColor: '#ff000000', border: 'none'  }}>
            Kategori Berita
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropmenu text-white">
            <Dropdown.Item className="text-white" href="#headline" id="headline" >HeadLine News</Dropdown.Item>
            <hr className="hrmenu "/>
            <Dropdown.Item className="text-white" href="#sports" id="sport">Aksi & Olahraga</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#business" id="business">Bisnis</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#entertainment" id="entertainment">Hiburan</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#kesehatan" id="kesehatan">Kesehatan</Dropdown.Item>
            <Dropdown.Item className="text-white" href="#technology" id="technology">Teknologi</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown> */}

                        </Nav>

                        <Nav>
                            {/* <Search/> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarnya;
