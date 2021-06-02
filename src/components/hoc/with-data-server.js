import React from 'react';
import DataServerContext from '../data-server-context';

const withDataServer = () => (Wrapped) => {
    return (props) => {
        return (
            <DataServerContext.Consumer>
                {
                    (dataServer) => {
                        return (
                            <Wrapped
                                {...props} 
                                dataServer={dataServer}/>
                        )
                    }
                }
            </DataServerContext.Consumer>
        )
    }
}

export default withDataServer;