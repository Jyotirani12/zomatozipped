import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';
const ListingDisplay=(props)=>{
    const renderData=({listData})=>{
        if(listData){
            if(listData.length>0){
                return listData.map((item)=>{
                    return(
                            <div className="item" key={item._id}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={item.restaurant_thumb} className="Image"/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="hotel_name">
                                            <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                            </Link>
                                        </div>
                                        <div className="city_name">
                                            {item.address}
                                        </div>
                                        <div className="city_name">
                                            {item.rating_text}
                                        </div>
                                        <div className="city_name">
                                           Rs.{item.cost}
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">{item.mealTypes[0].mealtype_name}</span>&nbsp;
                                            <span className="label label-info">{item.mealTypes[1].mealtype_name}</span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-warning">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        
                                )

                })
            }
         else{
            return(
                <div>
                    <h2>No Data As Per Filter</h2>
                </div>
            )
        }
    }else{
        return(
            <div style={{marginTop:"5%"}}>
                <img src="https://i.ibb.co/x1y67h7/loader.gif" alt="loader" border="0"/>
                <h2>Loading.....</h2>
            </div>
        )
    }

}

    
    return(
        <>
        <div id="content">
            {renderData(props)}
        </div>
        </>
    )
}
export default ListingDisplay;