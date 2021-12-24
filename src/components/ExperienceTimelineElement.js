import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Collapse, Chip, Paper, Divider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';

// stylesheets
import 'react-vertical-timeline-component/style.min.css';

class ExperienceTimelineElement extends React.Component {
    constructor(props) {
        super(props);

        const job = props.job;

        this.state = {
            key: props.key,
            company: job.company,
            title: job.title,
            start_date: job.start_date,
            end_date: job.end_date,
            technologies: job.technologies,
            brief: job.brief,
            description: job.description,
            open: false
        }
    }

    render() {
        var tech = this.state.technologies.map((skill, i) => {
            return (
                <Chip 
                  label={skill}
                  key={i}
                  color='secondary'
                  size="small"
                />
            );
        });
        var timeline_date_string = this.state.start_date + " - " + (this.state.end_date ? this.state.end_date : "Current");

        var description_collapsible = this.state.description ?
        <div>
            <Divider sx={{mt: 2, borderBottomWidth: 2, backgroundColor: "#aaaaaa"}} light={false} color="secondary"/>
            <ExpandMoreIcon sx={{fill: "#aaaaaa", m: -1}}/>
            <Collapse in={this.state.open}>
                <p>{this.state.description}</p>
            </Collapse>
        </div> 
        : null;

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
                            primary: "#000000"
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
              className = "vertical-timeline-element--work"
              date={timeline_date_string}
              contentStyle={{color: '#000000'}}
              iconStyle={{background: 'linear-gradient(45deg, #d53369 0%, #e8c85c 100%)'}}
              icon={<WorkIcon />}
              key={this.state.key}
            >
                <Paper 
                  elevation={0}
                  onClick={() => {this.setState({open: !this.state.open})}}
                  style={{cursor: 'pointer'}}
                >
                    <h3 className="vertical-timeline-element-title" color="">
                        {this.state.company}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        {this.state.title}
                    </h4>
                    <div>{tech}</div>
                    <p>{this.state.brief}</p>
                    {description_collapsible}
                </Paper>
            </VerticalTimelineElement>
            </ThemeProvider>
        );
    }
}

export default ExperienceTimelineElement;
