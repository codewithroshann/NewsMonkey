import React, { Component } from 'react'
import './com.css'

export default class NewsItem extends Component {
    render() {
        let { imageUrl, title, description, key, url, date, author, source } = this.props;
        return (
            <>

                <div className="card my-3 position-relative " style={{ width: " 22rem",flex:"1" }}>

                    <span className="position-absolute top-0 end-0 badge  bg-danger" >{source}</span>
                    <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body" style={{ position: "relative" }}>
                        <h5 className="card-title">{title.slice(0, 45)}...</h5>
                        <p className="card-text">{description.slice(0, 50)}...</p>
                        <p className="card-text"><small className=" text-danger">By {author.slice(0,15)} , Date:- {date.slice(0, 10)} {date.slice(11, 18)}</small></p>

                        <a href={url} target='blank' className="btn-dark btn btn-sm">Read More</a>
                    </div>
                </div>


            </>
        )
    }
}
