import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
    const { message } = error;

    return (
        <Fragment>
            <h3 className="error-indicator__title h3 display-2">Error!</h3>
            <p className="error-indicator__text lead">{message}</p>
        </Fragment>
    )
}

const mapStateToProps = ({ error }) => {
    return {
        error
    }
}

export default connect(mapStateToProps)(ErrorIndicator);