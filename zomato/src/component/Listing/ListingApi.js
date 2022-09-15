import React,{Component} from 'react';
import './Listing.css';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
const rUrl="https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="
class ListingApi extends Component{
   
constructor(props)
{
    console.log('inside constructor');
    console.log(props);
    super(props);
    this.state={
        restaurantList:''
    }
}
setDataPerFilter=(data)=>{
    this.setState({restaurantList:data})
}
    render()
    {
       
        return(
            <>
            <div className="row">
                   <div id="mainListing">
                       <div id="filter">
                        <div>
                           <center>
                               <h3>Filter</h3>
                               <hr/>
                           </center>
                           <CuisineFilter mealId={this.props.match.params.mealId}
                           restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                           <hr/>
                          </div>
                           <div>
                           <CostFilter mealId={this.props.match.params.mealId}
                           restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                       </div>
                       </div>
                       </div>
                       
                    <ListingDisplay listData={this.state.restaurantList}/> 
            </div>
           
            
           
            </>
        )
    }
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
      
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${rUrl}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }

    
}

export default ListingApi ;