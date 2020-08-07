import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
class LandingPage extends Component {

    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require('../images/avatar.png')}
                             alt="avatar_Img"
                             className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developmer</h1>
                            <hr/>
                            <p>HTML/CSS | Boorstrap | JavaScript | React | NodeJS | MongoDB </p>
                            <div className="social-links">
                                <a href="https://www.weixin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-weixin"/>
                                </a>
                                <a href="https://www.stackoverflow.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-stack-overflow"/>
                                </a>
                                <a href="https://mail.qq.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-qq"/>
                                </a>
                                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default LandingPage;