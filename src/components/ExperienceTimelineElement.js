import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Collapse, Chip } from '@mui/material';

// stylesheets
import 'react-vertical-timeline-component/style.min.css';

class ExperienceTimelineElement extends React.Component {
    constructor(props) {
        super(props);

        const job = props.job;

        this.state = {
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
                  size="small"
                  label={skill.name}
                />
            );
        });
        var timeline_date_string = this.state.start_date + " - " + (this.state.end_date ? this.state.end_date : "Current");

        var description_collapsible = this.state.description ?
        <Collapse in={this.state.open}>
            <p>{this.state.description}</p>
        </Collapse> 
        : null;

        return (
            <VerticalTimelineElement
                  className = "vertical-timeline-element--work"
                  date={timeline_date_string}
                  onTimelineElementClick={() => {this.setState({open: !this.state.open})}}
                >
                    <h3 className="vertical-timeline-element-title">
                        {this.state.company}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        {this.state.title}
                    </h4>
                    <div>{tech}</div>
                    <p>{this.state.brief}</p>
                    {description_collapsible}
                </VerticalTimelineElement>
        );
    }
}

export default ExperienceTimelineElement;
