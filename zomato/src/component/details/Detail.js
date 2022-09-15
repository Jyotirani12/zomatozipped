import React,{Component} from 'react';
import './detail.css';
import axios from 'axios';
import Header from '../../Header';
import Footer from '../../Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuList';

const rurl = "http://zomatoajulypi.herokuapp.com/details";
const murl = " https://zomatoajulypi.herokuapp.com/menu";

class Detail extends Component{
    constructor(props){
        console.log("indise detail",props)
        super(props)
        this.state={
            details:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId'),
            userItem:''

    }
    
}
addToCart=(data)=>{
    this.setState({userItem:data})
    
}
proceed=()=>{
    sessionStorage.setItem('menu',this.state.userItem);
    this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)

    
}


render(){
//     let details=this.state.details;
     let {details}=this.state;
    return(
    <>
    <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.restaurant_thumb} alt=" "/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.restaurant_name}</h2>
                        <span>231 Customers Say {details.rating_text} </span>
                        <h3><del>Old Price: Rs.1000</del></h3>
                        <h3>New Price: Rs.{details.cost}</h3>
                        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                    </div>
                    <div className="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" className="featureIcon" alt="imagename"/>
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" className="featureIcon"/>
                                <figcaption>Fully Senatized</figcaption>
                            </figure>
                    </div>
                    <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>{details.restaurant_name}</h2>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h3>Phone: {details.contact_number}</h3>
                            </TabPanel>
                          
                        </Tabs>
    </div>
                        <div>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                          
                            <button className="btn btn-primary" onClick={this.proceed}>Proceed</button>
                        </div>
                        <div className="col-md-12">
                          
                            <MenuDisplay menudata={this.state.menuList}
                            finalOrder={(data)=>{this.addToCart(data)}}/>

                  
                </div>
       
        </>
    )
}

    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];

        let response = await axios.get(`${rurl}/${restId}`)
      
        let menudata = await axios.get(`${murl}/${restId}`)

        this.setState({details:response.data[0],menuList:menudata.data})
        
    }
}


export default Detail;