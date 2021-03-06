import React from 'react';
import { Paper, Typography, Box, Card, CardContent, IconButton, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typical from 'react-typical';
import Education from './Education';
import Skills from './Skills';
import { techToIconClass, TechToIconDefault } from '../helpers/techToIcon';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

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
            email: data.email,
            skills: props.skills
        }

        this.scrollRef = React.createRef();

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
            <TechToIconDefault 
              tech={social.type} 
              default={<AccountCircleIcon sx={{fontSize: '150%'}}/>}
              style={{
                fontSize: '150%'
              }}
            />
          </IconButton>
        ));

        const StyledLink = styled(Link)(({theme}) => ({
          color: theme.palette.primary.main,
      }));

        return (
            <div>
                <Box>
                <Paper 
                  elevation={0} 
                  sx={{
                    height: window.innerHeight - 60, // take up height of window minus navbar
                    background: 'linear-gradient(180deg, rgba(253,29,29,0.5) 0%, rgba(254,201,78,0.5) 100%)'  
                  }}
                >
                    <Grid container
                      direction="column"
                      sx={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        flexGrow: 2,
                        height: '100%',
                        flexDirection: 'column'                       
                      }}
                    >
                        <Grid item /> {/* take up top row so greeting can be centered */}
                        <Grid item>
                            <Typography 
                              color="text" 
                              variant="h3" 
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
                        </Grid>
                        <Grid item>
                          <div style={{marginBottom: 20}}>
                            <IconButton
                              onClick={() => this.scrollRef.current.scrollIntoView({behaviour: 'smooth', block: 'start'})}
                            >
                              <ExpandMoreIcon fontSize="large"/>
                            </IconButton>
                          </div>
                        </Grid>
                    </Grid>
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
                  ref={this.scrollRef}
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
                          <Box 
                            sx={{
                              display: 'flex', 
                              alignContent: 'center', 
                              justifyContent: 'center',
                              mt: 4
                            }}
                          >
                            {socials}
                          </Box>
                          <Box 
                            sx={{
                              display: 'flex', 
                              alignContent: 'center', 
                              justifyContent: 'center',
                              mt: 2,
                            }}
                          >
                              <EmailIcon style={{fontSize: '170%'}}/> 
                              <div style={{marginLeft: 8}}>{this.state.email}</div>
                          </Box>
                          <Box 
                            sx={{
                              display: 'flex', 
                              alignContent: 'center', 
                              justifyContent: 'center',
                              mt: 2,
                            }}
                          >
                            <Card 
                              sx={{
                                mt: 2, 
                                minWidth: '40%',
                                maxWidth: '70%'
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
                          </Box>
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
                        <Typography variant="h4">More</Typography>
                    </div>
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexGrow: 2,
                        height: '100%',
                        mt: 4                       
                      }}
                    >
                      <Grid item xs={3} />
                      <Grid item xs={3}>
                        <StyledLink to="/experience">
                          <Typography variant="h5">My experience</Typography>
                        </StyledLink>
                      </Grid>
                      <Grid item xs={3}>
                        <StyledLink to="/projects">
                          <Typography variant="h5">My projects</Typography>
                        </StyledLink>
                      </Grid>
                      <Grid item xs={3} />
                    </Grid>
                  </div>
                </Box>
            </div>
        );
    }
}

export default HomePage;
