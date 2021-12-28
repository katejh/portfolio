import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import { Paper, Typography, Box } from '@mui/material';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: props.education
        }

        //console.log(this.state.education);
    }

    render() {
        var educations = this.state.education.map((ed, i) => {
            const gpa_string = !ed.gpa && !ed.gpa_4_33_scale ?
                "" :
                "GPA: " + (
                    ed.gpa && ed.gpa_4_33_scale ?
                    ed.gpa_4_33_scale + "/4.33 (" + ed.gpa + "%)" :
                    ed.gpa ?
                    ed.gpa + "%" :
                    ed.gpa_4_33_scale + "/4.33"
                );
            const date_string = ed.start_date + " - " + (ed.end_date ?
                ed.end_date : "Current");

            return (
                <ThemeProvider theme={(theme) => { 
                    //console.log(theme.palette);
                    const newTheme = createTheme({
                        ...theme,
                        palette: {
                            ...theme.palette,
                            mode: 'light',
                            text: {
                                ...theme.palette.text,
                                // primary: "#000000"
                            },
                            background: {
                                ...theme.palette.background,
                                paper: '#ffffff'
                            }
                        }
                    });
                    //console.log(newTheme.palette);
                    return newTheme;
                  }}
                >
                <VerticalTimelineElement
                  className="vertical-time-element--education"
                  iconStyle={{
                    background: 'linear-gradient(45deg, #1CB5E0 0%, #000851 100%)'
                  }}
                  icon={<SchoolIcon sx={{fill: '#ffffff'}}/>}
                  key={i}
                  date={date_string}
                >
                    <Paper elevation={0}>
                        <Typography 
                          variant="h5" 
                          className="vertical-timeline-element-title"
                        >
                            {ed.school}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          className="vertical-timeline-element-subtitle" 
                          color="primary.dark"
                        >
                            {ed.degree + (ed.major ? ", " + ed.major : "")}
                        </Typography>
                        <div>
                        <Typography 
                          variant="p" 
                          color="text.secondary"
                        >
                            {gpa_string}
                        </Typography>
                        </div>
                        <div>
                        <Typography 
                          variant="p"
                        >
                            {ed.brief}
                        </Typography>
                        </div>
                    </Paper>
                </VerticalTimelineElement>
                </ThemeProvider>
            );
        });
        return (
            <div>
                <div 
                  style={{
                    display: 'flex', 
                    alignContent: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center'
                  }}
                >
                    <Typography variant="h4">Education</Typography>
                </div>
                <div 
                  style={{
                    display: 'flex', 
                    alignContent: 'center', 
                    justifyContent: 'center'
                  }}
                >
                    <Box 
                    sx={{
                        mt: 4,
                        width: '75%',
                        display: 'flex',
                    }}
                    >
                        <VerticalTimeline layout='1-column-left'>
                            {educations}
                        </VerticalTimeline>
                    </Box>
                </div>
                
            </div>
        );
    }
}

export default Education;
