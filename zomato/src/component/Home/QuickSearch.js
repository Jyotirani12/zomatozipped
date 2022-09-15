import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';
import './Quick.css';
const mUrl= "https://zomatoajulypi.herokuapp.com/quicksearch"
class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <div id="quicksearch">
    <span id="quickheading">Quick Search</span>
    <span id="quicksubheading">Discover Restaurants By Meals</span>
    <QuickDisplay mealData={this.state.mealType}/>
    </div>

        )
    }

    // api calling
    componentDidMount(){
        fetch(mUrl,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>this.setState({mealType:data}))
    }
}
export default QuickSearch;