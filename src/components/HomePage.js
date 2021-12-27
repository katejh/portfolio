import React from 'react';
import { Paper, Typography, Box, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typical from 'react-typical';
import Education from './Education';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props.data;

        this.state = {
            name: data.name,
            titles: data.titles,
            description: data.description,
            education: props.education
        }

        // console.log(props.education);

        // console.log(this.props.data);
    }

    render() {
        var greeting = "Hello! I am " + this.state.name;
        var titles = this.state.titles.map((title, i) => {
            return [title, 1500]
        }).flat();

        return (
            <Box>
                <Box>
                <Paper elevation={0} sx={{height: window.innerHeight, alignContent: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', background: 'linear-gradient(180deg, rgba(253,29,29,0.5) 0%, rgba(254,201,78,0.5) 100%)'}}>
                    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                        <div>
                            <Typography color="text" variant="h3" style={{align: 'column'}}>
                                <Typical steps={[greeting]} />
                            </Typography>
                            <Typography color="text.secondary" variant="h4" sx={{marginTop: -2}}>
                                <Typical steps={titles} loop={Infinity}/>
                            </Typography>
                        </div>
                    </div>
                    <div style={{display: 'flex', position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 20}}>
                        <ExpandMoreIcon fontSize="large"/>
                    </div>
                </Paper>
                </Box>
                <Box sx={{flexGrow: 1, mt: 8, display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <div>
                        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
                        <Typography variant="h4">About Me</Typography>
                        </div>
                        <Card sx={{mt: 4, minWidth: 500}} variant='outlined'>
                            <CardContent sx={{mt: 2, mb: 2}}>
                                <Typography variant="p">{this.state.description}</Typography>
                                <div style={{marginTop: 8}}>
                                    <Typography variant="p">
                                        Download my <a href="resume.pdf" download>resume</a>!
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
                <Box sx={{flexGrow: 1, mt: 8, display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                    <Education education={this.state.education} />
                </Box>
            </Box>
        );
    }
}

export default HomePage;
