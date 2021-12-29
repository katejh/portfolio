import React from 'react';
import { Paper, Typography, Box, Card, CardContent, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typical from 'react-typical';
import Education from './Education';
import Skills from './Skills';
import { techToIconClass } from '../helpers/techToIcon';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props.data;

        this.state = {
            name: data.name,
            titles: data.titles,
            description: data.description,
            education: props.education,
            socials: data.socials,
            skills: props.skills
        }

        // console.log(props.education);

        // console.log(this.props.data);
    }

    render() {
        var greeting = "Hello! I am " + this.state.name;

        var titles = this.state.titles.map((title, i) => {
            return [title, 1500]
        }).flat();
        
        var socials = this.state.socials.map((social, i) => (
          <IconButton
            key={i}
            onClick={() => window.open(social.url)}
          >
            <i className={techToIconClass(social.type)} />
          </IconButton>
        ));

        return (
            <div>
                <Box>
                <Paper 
                  elevation={0} 
                  sx={{
                    height: window.innerHeight, 
                    background: 'linear-gradient(180deg, rgba(253,29,29,0.5) 0%, rgba(254,201,78,0.5) 100%)'  
                  }}
                >
                    <div 
                      style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexGrow: 2,
                        height: '100%',
                        flexDirection: 'column'                       
                      }}
                    >
                        <div>
                            <Typography 
                              color="text" 
                              variant="h3" 
                              style={{align: 'column'}}
                            >
                                <Typical steps={[greeting]} />
                            </Typography>
                            <Typography 
                              color="text.secondary" 
                              variant="h4" 
                              sx={{marginTop: -2}}
                            >
                                <Typical steps={titles} loop={Infinity}/>
                            </Typography>
                        </div>
                        <div>
                          <ExpandMoreIcon fontSize="large"/>
                        </div>
                    </div>
                </Paper>
                </Box>
                <Box 
                  sx={{
                    flexGrow: 1, 
                    mt: 8, 
                    display: 'flex', 
                    alignContent: 'center', 
                    justifyContent: 'center'
                  }}
                >
                    <div style={{flexGrow: 1}}>
                        <div 
                          style={{
                            display: 'flex', 
                            alignContent: 'center', 
                            justifyContent: 'center', 
                            textAlign: 'center'
                          }}
                        >
                            <Typography variant="h4">About Me</Typography>
                        </div>
                        <div>
                          <div 
                            style={{
                              display: 'flex', 
                              alignContent: 'center', 
                              justifyContent: 'center'
                            }}
                          >
                            <Box sx={{mt: 4, mb: 2}}>
                              {socials}
                            </Box>
                          </div>
                          <div 
                            style={{
                              display: 'flex', 
                              alignContent: 'center', 
                              justifyContent: 'center'
                            }}
                          >
                            <Card 
                              sx={{
                                mt: 2, 
                                minWidth: '40%'
                              }} 
                              variant='outlined'
                            >
                                <CardContent sx={{mt: 2, mb: 2}}>
                                    <Typography variant="p">
                                        {this.state.description}
                                    </Typography>
                                    <div style={{marginTop: 8}}>
                                        <Typography variant="p">
                                            Download my <a href="resume.pdf" download>resume</a>!
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                          </div>
                        </div>
                    </div>
                </Box>
                <Box 
                  sx={{
                    flexGrow: 1, 
                    mt: 8, 
                    display: 'flex', 
                    alignContent: 'center', 
                    justifyContent: 'center'
                  }}
                >
                    <Skills skills={this.state.skills}/>
                </Box>
                <Box 
                  sx={{
                    flexGrow: 1, 
                    mt: 8, 
                    display: 'flex', 
                    alignContent: 'center', 
                    justifyContent: 'center'
                  }}
                >
                    <Education education={this.state.education} />
                </Box>
            </div>
        );
    }
}

export default HomePage;
