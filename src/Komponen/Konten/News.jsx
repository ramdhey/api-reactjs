//buat pemanggilan konten news dari API dengan axios
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Konten.css';

import Nav from 'react-bootstrap/Nav'

const Konten = () => {
    const API = 'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    'apiKey=qc60qk1fcfLoeLdu7rR8c2nbYxLic_DlPkZ0kSPlL8tElSgd';
    const [konten, setKonten] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [showAll, setShowAll] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [showSport, setShowSport] = React.useState(false);
    const [showBusiness, setShowBusiness] = React.useState(false);
    const [showEntertainment, setShowEntertainment] = React.useState(false);
    const [showHealth, setShowHealth] = React.useState(false);
    const [showScience, setShowScience] = React.useState(false);
    const [showTechnology, setShowTechnology] = React.useState(false);
    const [showPolitics, setShowPolitics] = React.useState(false);
    const [showSports, setShowSports] = React.useState(false);
    const [showWorld, setShowWorld] = React.useState(false);
   

    React.useEffect(() => {
        axios.get(API).then(response => {
            setKonten(response.data.news);
        }
        )
    }
        , [])
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleShowAll = () => {
        setShowAll(true);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleShowSport = () => {
        setShowSport(true);
    }
    const handleShowBusiness = () => {
        setShowBusiness(true);
    }
    const handleShowEntertainment = () => {
        setShowEntertainment(true);
    }
    const handleShowHealth = () => {
        setShowHealth(true);
    }
    const handleShowScience = () => {
        setShowScience(true);
    }
    const handleShowTechnology = () => {
        setShowTechnology(true);
    }
    const handleShowPolitics = () => {
        setShowPolitics(true);
    }
    const handleShowSports = () => {
        setShowSports(true);
    }
    const handleShowWorld = () => {
        setShowWorld(true);
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowAll}>All</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShow}>News</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowSport}>Sport</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowBusiness}>Business</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowEntertainment}>Entertainment</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowHealth}>Health</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowScience}>Science</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowTechnology}>Technology</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowPolitics}>Politics</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowSports}>Sports</button>
                                                <button className="btn btn-outline-secondary" type="button" onClick={handleShowWorld}>World</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    {showAll ? konten.map((konten, index) => {
                                                        return (
                                                            <div className="col-md-4" key={index}>
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="col-md-12">
                                                                                <div className="row">
                                                                                    <div className="col-md-12">
                                                                                        <h5 className="card-title">{konten.title}</h5>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-md-12">
                                                                                        <p className="card-text">{konten.description}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-md-12">
                                                                                        <a href={konten.url} className="btn btn-primary">Read More</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    ) : null}
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
export default Konten

                                