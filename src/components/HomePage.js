import React from 'react';
import { Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typical from 'react-typical';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props.data;

        this.state = {
            name: data.basic_info.name
        }

        // console.log(this.props.data);
    }

    render() {
        var greeting = "Hello! I am " + this.state.name;

        return (
            <div>
                <Paper elevation={0} style={{height: window.innerHeight, alignContent: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative'}}>
                    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%'}}>
                        <Typography variant="h3">
                            <Typical steps={[greeting]} wrapper="p"/>
                        </Typography>
                    </div>
                    <div style={{flexGrow: 1}}></div>
                    <div style={{position: 'absolute', bottom: 4, left: '50%'}}>
                        <ExpandMoreIcon fontSize="large"/>
                    </div>
                </Paper>
            <a href="resume.pdf" download>Resume download</a>
            </div>
        );
    }
}

export default HomePage;
