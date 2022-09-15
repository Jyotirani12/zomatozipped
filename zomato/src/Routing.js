import React from 'react';
// import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import ListingApi from './component/Listing/ListingApi';
import Detail from './component/details/Detail';
import PlaceOrder from './component/booking/PlaceOrder';


import {BrowserRouter,Route} from 'react-router-dom';
const Routing=()=>{
    return(
       
         <BrowserRouter>
      
        <div >
        <Header/>
      
       

     <Route exact path="/" component={Home}/>
     <Route exact path="/listing/:mealId" component={ListingApi}/>
     <Route exact path="/details" component={Detail}/>
     <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>


   
        <Footer/>
        </div>
        </BrowserRouter>
        
     
       
    )
}
export default Routing;