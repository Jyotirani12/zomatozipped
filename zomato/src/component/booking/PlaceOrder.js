import React ,{Component} from 'react';
import './placeorder.css';
import Header from '../../Header';
const url = "https://zomatoapi12.herokuapp.com/menuItem";
class PlaceOrder extends Component{
    constructor(props){
        super(props)
        this .state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.restName,
            name:"Ankit",
            email:"Ankit@gmail.com",
            cost:0,
            phone:9845678,
            address:"It Bombay",
            menuItem:'',
            //  menuItem:sessionStorage.getItem('menu')
        }

    }
    handleChange=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }
    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <>
            <Header/>
            <div className="container">
            <div className="panel panel-primary">
            <div className="panel-heading">
                          User
                        </div>
                        <div className="panel-body">
                        <form >
                        <div className="row">
                        <div className="form-group col-md-6">
                                        <label for="fname" className="control-label">FirstName</label>
                                        <input className="form-control" id="fname" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email" className="control-label">Email</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="phone" className="control-label">Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="address" className="control-label">Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                     </div>
                                     {this.renderItem(this.state.menuItem)}
                                     <div className="row">
                                     <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                     </div>
                                     </div>
                                     <button className="btn btn-success" type="submit">Place Order</button>
                                     


                                    </div>
                          
                        </form>
                     </div>
                                
                </div> 
            </div>
            </>
        )
    }
    //api calling
    componentDidMount(){
        let menuItem=sessionStorage.getItem('menu');
        let orderId=[];
     menuItem.split(',').map((item)=>{
        orderId.push(parseInt(item));
        return 'ok' ;
        
     
     })
     console.log(JSON.stringify(orderId));
     const sdata={
        "id":orderId
     }
     
     fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'content-type':'application/json'},
            body:JSON.stringify(sdata)
        
     })
     .then((res=>res.JSON))
     .then((data)=>{
        console.log(data);
        let totalPrice;
        data.map((item)=>{
            totalPrice=totalPrice+parseFloat(item.menu_price);
            return 'Ok'
        })
     this.setState({menuItem:data,cost:totalPrice})

     })
    }
}
export default PlaceOrder;
