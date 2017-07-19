import React from 'react'
import Grid from './Grid.jsx'

export default class LoadingPage extends React.Component {
    render() {
        const loaderStyle = {
          width: '250px',
          height: '70px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: '3px',
          color: '#fff',
          textAlign: 'center',
          paddingTop: '30px',
          fontFamily: 'Lato'
        }

        return(
          <h1 style={loaderStyle}> <img src='../../assets/loadingspinner.gif' alt="Smiley face" height="30" width="30"/> Loading ...</h1>
        );
    }
}
