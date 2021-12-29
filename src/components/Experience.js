import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceTimelineElement from './ExperienceTimelineElement';
import { Card, CardContent, Typography, Box } from '@mui/material';

import 'react-vertical-timeline-component/style.min.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: props.experience.jobs,
            summary: props.experience.summary
        }
    }

    render() {
        var jobs = this.state.jobs.map((job, i) => {
           return (
            <ExperienceTimelineElement job={job} key={i}/>
           );
        });

        var summaryCard = this.state.summary ? 
            <Card 
              sx={{
                minWidth: {
                    xs: 200,
                    sm: 200,
                    md: 400,
                    lg: 400,
                    xl: 400
                }
              }}
            >
                <CardContent>
                    <Typography variant="h6">Summary</Typography>
                    <Typography variant="p">{this.state.summary}</Typography>
                </CardContent>
            </Card> : null;

        return (
            <Box sx={{m: 4}}>
                <div style={{}}>
                    <Typography variant="h4">
                        Experience
                    </Typography>
                </div>
                <Box 
                  sx={{
                    display: 'flex',
                    marginTop: 4,
                    marginBottom: 4
                  }}
                >
                {summaryCard}
                </Box>
                <VerticalTimeline>
                    {jobs}
                </VerticalTimeline>
            </Box>
        );
    }
}

export default Experience;