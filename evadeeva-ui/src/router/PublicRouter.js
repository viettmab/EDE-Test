import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <div>
            <Route {...rest} component={(props) => (
                isAuthenticated ? <div>(<Component {...props}/>)</div> : (<Redirect to="/"/>)
            )}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: true
});

export default connect(mapStateToProps)(PublicRoute);
