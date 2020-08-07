import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {

    render() { 
        return ( 
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Your Name Here</h2>
                        <img src={require('../images/Fred_man-512.webp')} style={{height:'300px', borderRadius:'10px'}} alt="avatar_Img" />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971)
                             is an engineer, industrial designer, technology 
                             entrepreneur and philanthropist. 
                             He is the founder, CEO, CTO and chief designer 
                             of SpaceX;[6] early investor, CEO 
                             and product architect of Tesla, Inc.; 
                             founder of The Boring Company; co-founder of Neuralink; 
                            and co-founder and initial co-chairman of OpenAI.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" />
                                        (+86)4566-78901
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-qq" />
                                        8469512345
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" />
                                        154682@126.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Contact;