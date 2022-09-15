import React from 'react';
import Search from './SearchFirst.js';
// import SearchSecond from './SearchSecond.js';
import QuickDisplay from './QuickDisplay';
import QuickSearch from './QuickSearch';
// import Detail from './component/details/Detail';


const Home=(props)=>{


        console.log(props);
        return(
        <>

        <Search/>
     
        <QuickDisplay/>
        <QuickSearch/>
        {/* <Detail/> */}

        
        </>

    )
    
}
export default Home;