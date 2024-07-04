import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    handleClick = () => {
        document.location.reload()
        this.updateNews();
      };

refresh=()=> {
        document.location.reload()
      }
      

    handleChange = (event) => {
        this.props.onSelectChange(event.target.value)

    }
    
    render() {
        const countries = [
            { name: "Argentina", code: "ar Argentina" },
            { name: "Australia", code: "au Australia" },
            { name: "Austria", code: "at Austria" },
            { name: "Azerbaijan", code: "az Azerbaijan" },
            { name: "Belgium", code: "be Belgium" },
            { name: "Brazil", code: "br Brazil" },
            { name: "Bulgaria", code: "bg Bulgaria" },
            { name: "Canada", code: "ca Canada" },
            { name: "China", code: "cn China" },
            { name: "Colombia", code: "co Colombia" },
            { name: "Cuba", code: "co Cuba" },
            { name: "Czechia", code: "cz Czechia" },
            { name: "Egypt", code: "eg Egypt" },
            { name: "France", code: "fr France" },
            { name: "Great Britain", code: "gb Great Britain" },
            { name: "Germany", code: "de Germany" },
            { name: "Greece", code: "gr Greece" },
            { name: "Hong Kong", code: "hk Hong Kong" },
            { name: "Hungary", code: "hu Hungary" },
            { name: "Indonesia", code: "id Indonesia" },
            { name: "Ireland", code: "ie Ireland" },
            { name: "Israel", code: "il Israel" },
            { name: "India", code: "in India" },
            { name: "Itlay", code: "it Itlay" },
            { name: "Japan", code: "jp Japan" },
            { name: "Korea", code: "kr Korea" },
            { name: "Lithuania", code: "lt Lithuania" },
            { name: "Latvia", code: "lv Latvia" },
            { name: "Morocco", code: "ma Morocco" },
            { name: "Maxico", code: "mx Maxico" },
            { name: "Malasiya", code: "my Malasiya" },
            { name: "Nigeria", code: "ng Nigeria" },
            { name: "Netherland", code: "nl Netherland" },
            { name: "Norway", code: "no Norway" },
            { name: "New Zealand", code: "nl New Zealand" },
            { name: "Philippines", code: "ph Philippines" },
            { name: "Poland", code: "pl Poland" },
            { name: "Portugal", code: "pt Portugal" },
            { name: "Romania", code: "ro Romania" },
            { name: "Russia", code: "ru Russia" },
            { name: "Serbia", code: "rs Serbia" },
            { name: "Switzerland", code: "ch Switzerland" },
            { name: "Swedan", code: "se Swedan" },
            { name: "Singapore", code: "sg Singapore" },
            { name: "Slovenia", code: "si Slovenia" },
            { name: "Slovakia", code: "sl Slovakia" },
            { name: "Thailand", code: "th Thailand" },
            { name: "Turkey", code: "tr Turkey" },
            { name: "Taiwan", code: "tw Taiwan" },
            { name: "Ukraine", code: "ua Ukraine" },
            { name: "United States", code: "us United States" },
            { name: "Venezuela", code: "ve Venezuela" },
            { name: "South Africa", code: "za South Africa" },
        ];
        
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ position: "sticky", top: "-1px", zIndex: "11", padding: "20px 0" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" style={{ marginRight: "40px", paddingLeft: "10px", fontSize: "25px" }} to="/NewsMonkey">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" style={{ paddingLeft: "10px" }} aria-current="page" to="/NewsMonkey">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" style={{ paddingLeft: "10px" }} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Category
                                    </Link>
                                    <ul className="dropdown-menu" >
                                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <select className="form-select" onChange={this.handleChange} aria-label="Default select example">
                                <option onClick={this.handleClick} defaultValue={"in india"} value={"in india"} >Select Country</option>
                                {countries.map((country) => {
                                    return <option onClick={this.refresh} key={country.code} value={country.code}>{country.name}</option>

                                })}
                            </select>

                        </div>
                    </div>
                </nav>
            </>
        )

    }
}