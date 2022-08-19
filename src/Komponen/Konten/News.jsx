//buat pemanggilan konten news dari API https://gnews.io 


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './Konten.css';
// import axios from "axios"
// import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
// import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
// import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
// import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
// import { faUserShield } from '@fortawesome/free-solid-svg-icons'
// import { faUserCog } from '@fortawesome/free-solid-svg-icons'

// const Konten = () => {
//     const API = 'https://api.currentsapi.services/v1/latest-news?' +
//     'language=us&' +
//     'apiKey=qc60qk1fcfLoeLdu7rR8c2nbYxLic_DlPkZ0kSPlL8tElSgd';
//     const [konten, setKonten] = React.useState([]);
//     const [search, setSearch] = React.useState('');
//     const [showAll, setShowAll] = React.useState(false);

//     const handleSearch = (e) => {
//         setSearch(e.target.value);
//     }

//     const handleShowAll = () => {
//         setShowAll(true);
//     }

//     const handleShow = () => {
//         setShowAll(false);
//     }

//     React.useEffect(() => {
//         axios.get(API).then(response => {
//             setKonten(response.data.news);
//         }
//         )
//     }
//     , [])

//     const filteredKonten = konten.filter(konten => {
//         return konten.title.toLowerCase().includes(search.toLowerCase());
//     }
//     )

//     return (
//         <div className="konten">
//             <div className="konten-header">
//                 <div className="konten-header-left">
//                     <Link to="/">
//                         <FontAwesomeIcon icon={faHome} />
//                     </Link>
//                 </div>
//                 <div className="konten-header-right">
//                     <Link to="/news">
//                         <FontAwesomeIcon icon={faNewspaper} />
//                     </Link>
//                     <Link to="/profile">
//                         <FontAwesomeIcon icon={faUser} />
//                     </Link>
//                     <Link to="/login">
//                         <FontAwesomeIcon icon={faSignOutAlt} />
//                     </Link>
//                 </div>
//             </div>
//             <div className="konten-body">
//                 <div className="konten-body-left">
//                     <div className="konten-body-left-search">
//                         <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
//                         <FontAwesomeIcon icon={faSearch} />
//                     </div>
//                     <div className="konten-body-left-showall">
//                         <Button variant="outline-primary" onClick={handleShowAll}>Show All</Button>
//                     </div>
//                     <div className="konten-body-left-konten">
//                         {showAll ? filteredKonten.map(konten => {
//                             return (
//                                 <div className="konten-body-left-konten-item">
//                                     <div className="konten-body-left-konten-item-title">
//                                         <Link to={'/news/' + konten.id}>{konten.title}</Link>
//                                     </div>
//                                     <div className="konten-body-left-konten-item-description">
//                                         {konten.description}
//                                     </div>
//                                     <div className="konten-body-left-konten-item-date">
//                                         {konten.date}
//                                     </div>
//                                 </div>
//                             )
//                         }
