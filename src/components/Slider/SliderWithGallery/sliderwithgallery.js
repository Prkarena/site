/**
 * 
 * SliderWithGallery
 *  1. sliderwithgallery.css : for style
 *  2. Components : 
 *     2.1 SliderTemplate : takes one object of our data and set it to slider
 *     2.2 Gallery : takes data and setIndex method and gave us image gallery 
 *  3. state : 
 *     3.1 data : data from props
 *     3.2 dataItem : store dataItem from our data
 *     3.3 show : bollen - true : for show slider and false for hide slider
 *  4. nextDataItem : function which set next data item to state
 *  5. prewDataItem : function which set previous data item to state
 *  6. showSlider : function which handle slider show or not using state variable show
 *  7. setIndex : function which set Index of dataitem to be shown in slider
 * 
 */

import React , { Component } from 'react';
/*------- slider.css : For Style ---------- */
import './sliderwithgallery.css';
/*-------- Components ---------------------*/
import SliderTemplate from '../SliderTemplate/slidertemplate';

class SliderWithGallery extends Component {
    
    state = {
        data : this.props.data,
        dataItem : this.props.data,
        show : false,
    }

    nextDataItem = () => {
        const newIndex = this.state.data.indexOf(this.state.dataItem)+1 ;
        this.setState({
            dataItem : this.props.data[newIndex]
        })
    }

    prewDataItem = () => {
        const newIndex = this.state.data.indexOf(this.state.dataItem)-1 ;
        this.setState({
            dataItem : this.props.data[newIndex]
        })
    }

   
    setIndex = (i) => {
        this.setState({
            dataItem : this.state.data[i],
        })
    
     }
      
    render(){

        let { data , dataItem, show } = this.state;
        {/*---- style of slider ---*/}
       
        
        return(
            
            <div className="sliderWithGallery">
                {/*---- slider start ---*/}
                <div className="slider"
                   
                    >
                    {/*---- slider previous and next button start ---*/}
                    <div className="sliderButton">
                        <button 
                        onClick = { () => this.prewDataItem() }
                        disabled = { data.indexOf(dataItem) === 0 }
                        className = "buttonPrew"
                        >
                            P              
                        </button>
                        <button 
                        onClick = { () => this.nextDataItem() }
                        disabled = { data.indexOf(dataItem) === data.length-1}
                        className = "buttonNext"
                        >
                            N  
                        </button>
                       </div>
                       {/*---- slider previous and next button end ---*/}
                    {/*---- sliderTemplate : takes one object and set it to slider ---*/}
                    <SliderTemplate property = { dataItem } />
                </div>
                {/*---- slider end ---*/}
            </div>
        )
    }
}

export default SliderWithGallery;