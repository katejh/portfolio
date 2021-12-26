import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceTimelineElement from './ExperienceTimelineElement';
import { Card, CardContent, Typography } from '@mui/material';

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
        <div style={{display: 'flex', margin: 20, marginTop: 50, marginLeft: 70}}>
            <Card sx={{minWidth: 200}}>
                <CardContent>
                    <Typography variant="h6">Summary</Typography>
                    <Typography variant="p">{this.state.summary}</Typography>
                </CardContent>
            </Card>
        </div> : null;

        return (
            <div className="Experience">
                {summaryCard}
                <VerticalTimeline>
                    {jobs}
                </VerticalTimeline>
            </div>
        );
    }
}

export default Experience;