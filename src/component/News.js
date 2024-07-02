import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {
    static defaultProps = {
        country: 'in India',
        category: 'general',
        imageUrl:"https://i.blogs.es/d73f60/sadrobot/840_560.jpeg"
    }
    static PropsTypes = {
        country: PropTypes.string,
        category: PropTypes.string,

    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            country: 'in',
            articles: [],
            loading: false,
            page: 1
        }
        this.updateNews(this.props.country);
        document.title = `NewsMonkey-${this.capitalize(this.props.category)}`

    }

    async updateNews(props) {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country.slice(0,2)}&category=${this.props.category}&apiKey=67d266ff35484b48a469319c5442c1b0&page=${this.state.page}&pageSize=9`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        console.log(parsedData)
        this.props.setProgress(60)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        


    }

    fetchMoreData = async (props) => {
        this.setState({
            page: this.state.page + 1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country.slice(0,2)}&category=${this.props.category}&apiKey=67d266ff35484b48a469319c5442c1b0&page=${this.state.page + 1}&pageSize=9`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setTimeout(() => {

            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            })
        }, 2000);

    }



    render() {

        return (
            <>
                <h1 className='headline fw-bold text-center my-4' style={{ position: "sticky", top: "86px", backgroundColor: "#fff", padding: "10px 20px", borderBottom: "1px solid #ccc", zIndex: "5" }}>Top {this.capitalize(this.props.category)} Headlines-{this.props.country?this.props.country.slice(3, 20):"India"}</h1>
                {/* {this.state.loading === true ? <Spinner /> : ""} */}

                <InfiniteScroll
                   dataLength={this.state.articles.length}
                   next={this.fetchMoreData}
                  hasMore={this.state.articles.length!== this.state.totalResults}
                  loader={this.state.loading === true ? < Spinner /> : ""}
                    >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col d-flex flex-wrap justify-content-center" key={element.url} style={{ gap: "10px" }}>
                                    <NewsItem imageUrl={element.urlToImage ? element.urlToImage :this.props.imageUrl} source={element.source.name} author={element.author?element.author:"Unkown"} date={element.publishedAt} url={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor ratione accusamus dicta amet enim porro corrupti tempora. Cum, amet? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor ratione accusamus dicta amet enim porro corrupti tempora. Cum, amet?"} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}
