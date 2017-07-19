import React from 'react';

export default class Grid extends React.Component {
    render() {
        return(
            <div className='grid' style={{'top' : this.props.top}}>
                {this.props.children}
            </div>
        );
    }
}
