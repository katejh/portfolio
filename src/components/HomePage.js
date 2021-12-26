import React from 'react';
import { Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typical from 'react-typical';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props.data;

        this.state = {
            name: data.name,
            titles: data.titles,
            education: props.education
        }

        // console.log(this.props.data);
    }

    render() {
        var greeting = "Hello! I am " + this.state.name;
        var titles = this.state.titles.map((title, i) => {
            return [title, 1500]
        }).flat();

        return (
            <div>
                <Paper elevation={0} sx={{height: window.innerHeight, alignContent: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative'}}>
                    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                        <div>
                            <Typography color="primary.dark" variant="h3" style={{align: 'column'}}>
                                <Typical steps={[greeting]} />
                            </Typography>
                            <Typography color="primary.light" variant="h4" sx={{marginTop: -2}}>
                                <Typical steps={titles} loop={Infinity}/>
                            </Typography>
                        </div>
                    </div>
                    <div style={{display: 'flex', position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 20}}>
                        <ExpandMoreIcon fontSize="large"/>
                    </div>
                </Paper>
            <a href="resume.pdf" download>Resume download</a>
            </div>
        );
    }
}

export default HomePage;
