import React, { PureComponent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Konten.css';

import axios from "axios"


import Nav from 'react-bootstrap/Nav'


const Konten = () => {
    const API = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    'apiKey=qc60qk1fcfLoeLdu7rR8c2nbYxLic_DlPkZ0kSPlL8tElSgd';

    

    // componentDidMount() {
    //     axios.get(API + '&limit=10').then(response => {
    //         this.setState({ konten: response.data.news });
    //     }

    //     )

    // componentDidMount() {
    //     axios.get(API).then(response => {
    //         this.setState({ konten: response.data.news });
    //     }
    //     )
    // }




    return (

        <div className="container" >
            {/* pencarian */}
            {/* <div className="row">
                <div className="col-10 mx-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleShowAll}>Search</button>
                    </form>
                </div>
            </div> */}
            <div className="container text-center mt-5 ">
                <Nav className="text-white tabsnya" fill variant="tabs" defaultActiveKey="/home" style={{ backgroundImage: 'linear-gradient(to right,#0E0C58, #0C3458)' }}>
                    <Nav.Item >
                        <Nav.Link className="text-primary Ini" href="/home" >HeadLine News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="sport" >Aksi & Olahraga</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="business" >Bisnis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="entertainment" >Hiburan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="kesehatan"  >Kesehatan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-primary Ini" eventKey="technology" >Teknologi</Nav.Link>
                    </Nav.Item>

                </Nav>

            </div>




            {/* tombolnya */}
            {/* <div>
                <button onClick={handleSport}>Tampilkan Berita</button>
            </div> */}


            <div className="container">


                <div className="row mt-5 mb-5 "  >
                    {this.state.konten.map((item, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <a href={item.url} className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        )
                        
                    }

                    )}
                        
                </div>

            </div>
        </div>
    )
}

export default Konten;