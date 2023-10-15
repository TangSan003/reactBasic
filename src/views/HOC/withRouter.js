import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter(Component){
    function ComponentWithRouter(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let paragram = useParams();
        console.log(props)
        return <Component {...props} route={{location,navigate,paragram}}/>;
    }

    return ComponentWithRouter;
}