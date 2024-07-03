import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';

import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
 
    state = {
      progress:0,
selectedValue:"in",
    }

  
  handleSelectChange=(value,name)=>{
    this.setState({
      selectedValue : value,

    })

  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
    
  }



  render() {
    return (
      <>
        <HashRouter >
          <LoadingBar
            height={"3px"}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={this.setProgress(0)}
          />
          <Navbar onSelectChange={this.handleSelectChange} />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key={"general"} imageUrl="https://media.gettyimages.com/id/184625088/photo/breaking-news-headline.jpg?s=612x612&w=0&k=20&c=0WNsHBZ8Yu2YeTUjVP8xY05Ist60I00iZHmTOnQErHk=" category="general" />} />
            <Route exact path='/general' element={<News country={this.state.selectedValue} setProgress={this.setProgress}imageUrl="https://media.gettyimages.com/id/184625088/photo/breaking-news-headline.jpg?s=612x612&w=0&k=20&c=0WNsHBZ8Yu2YeTUjVP8xY05Ist60I00iZHmTOnQErHk=" key={"general"} category="general" />} />
            <Route exact path='/sports' element={<News country={this.state.selectedValue} setProgress={this.setProgress}imageUrl="https://img.freepik.com/free-vector/abstract-sport-background-flat-style_23-2148220193.jpg?w=900&t=st=1719849274~exp=1719849874~hmac=00286c194d77f8b617c9732bdbaf3285b0b75535bfb1f4f7cf09b0aafeaf5658"  key={"sports"} category="sports" />} />
            <Route exact path='/health' element={<News country={this.state.selectedValue} setProgress={this.setProgress} key={"health"} imageUrl="https://media.istockphoto.com/id/1032637132/photo/a-cup-of-coffee-glasses-and-newspaper-titled-health-medical.jpg?s=1024x1024&w=is&k=20&c=0u4SVDQ0yzHENGAVQCT7IG-QYO9h6bVvr4VDg0f6nHE="category="health" />} />
            <Route exact path='/science' element={<News country={this.state.selectedValue} setProgress={this.setProgress} key={"science"}imageUrl="https://www.shutterstock.com/shutterstock/photos/260155340/display_1500/stock-photo-a-newspaper-with-the-headline-science-and-technology-260155340.jpg" category="science" />} />
            <Route exact path='/business' element={<News country={this.state.selectedValue} setProgress={this.setProgress} key={"business"}imageUrl="https://1.bp.blogspot.com/-aVbpJuB-wIA/YAHxaMt2QpI/AAAAAAAApNU/z04FVn39pg0ki90M16Vg1-b5a2afmq2NQCLcBGAsYHQ/w640-h338/business-news-blog-tech-blogger-new-stories-updates-breaking-articles-finance.jpg" category="business" />} />
            <Route exact path='/technology' element={<News country={this.state.selectedValue} setProgress={this.setProgress} key={"technology"}imageUrl="https://thumbs.dreamstime.com/z/d-illustration-depicting-abstract-blue-printed-circuit-board-components-tech-news-concept-tech-news-concept-102701717.jpg?ct=jpeg"category="technology" />} />
            <Route exact path='/entertainment' element={<News country={this.state.selectedValue} setProgress={this.setProgress} key={"entertainment"}imageUrl="https://c7.alamy.com/comp/2M6PBJP/breaking-news-on-world-map-globe-background-illustration-multimedia-design-concept-television-news-theme-headline-template-with-lcd-tv-video-wall-pan-2M6PBJP.jpg" category="entertainment" />} />

          </Routes>
        </HashRouter>

      </>
    );
  }
}

