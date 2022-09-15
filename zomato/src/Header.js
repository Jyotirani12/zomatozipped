import React,{Component} from 'react';
import './header.css';
class Header extends Component{
   render()
   {
    return(
      <header>
      <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Zomato</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  {/* <!-- <li className="active"><a href="#">Home</a></li> --> */}
                  <li><a href="www.facebook.com" ><img src="https://i.ibb.co/FzqHNNg/fbicon.png" alt="fbicon" border="0" className="slogo"/></a></li>
                  <li><a href="#"><img src="https://i.ibb.co/wYKwbgq/insta.png" alt="insta" border="0" className="slogo"/></a></li>
                  <li><a href="www.Youtube.com"><img src="https://i.ibb.co/9ZQxHhj/youtube1.png" alt="youtube1" border="0" className="slogo"/></a></li>
                </ul>
                
              </div>
            </div>
          </nav>
      </header>
  
    )
  }
}

    
export default Header;