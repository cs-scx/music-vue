import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, IconButton, CardMenu, CardText } from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }


    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="cardTitle" style={{color: '#fff', height: '176px'}}>
                            React Project #1
                        </CardTitle>
                        <CardText  style={{textAlign:'center', fontWeight:"bold"}}>Describe Your Project</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style= {{minWidth: '430', margin: 'auto'}}>
                        <CardTitle className="cardTitle" style={{color: '#fff', height: '176px'}}>
                            React Project #2
                        </CardTitle>
                        <CardText style={{textAlign:'center', fontWeight:"bold"}}>Describe Your Project</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className="cardTitle" style={{color: '#fff', height: '176px'}}>
                            React Project #3
                        </CardTitle>
                        <CardText style={{textAlign:'center', fontWeight:"bold"}}>Describe Your Project</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        } 
        else if (this.state.activeTab === 1) {
            return(
                <div><h1>This is VueJs</h1></div>
            )
        } 
        else if (this.state.activeTab === 2) {
            return(
                <div><h1>This is Angular</h1></div>
            )
        } 
        else if (this.state.activeTab === 3) {
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }
    
    render() {  
        return ( 
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>Angular</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>            
                    </Cell>
                </Grid>    
                
            </div>
         );
    }
}
 
export default Projects;