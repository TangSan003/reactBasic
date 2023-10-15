import React from "react";
// import Color from "../HOC/Color";
import { withRouter } from "../HOC/withRouter";

class Home extends React.Component{
        
    render(){
        return(
            <>
                <div>Hello form Home page to Reactjs</div>
                
            </>
        )
    }
}

export default withRouter(Home);

