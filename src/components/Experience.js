import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Badge } from 'react-bootstrap';

import 'react-vertical-timeline-component/style.min.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: props.experience
        }
    }

    render() {
        var jobs = this.state.experience.map((job, i) => {
            var tech = job.technologies.map((skill, i) => {
                return (
                    <Badge pill key={i}>
                        {skill.name}
                    </Badge>
                );
            });
            var timeline_date_string = job.start_date + " - " + (job.end_date ? job.end_date : "Current");

            return (
                <VerticalTimelineElement
                  className = "vertical-timeline-element--work"
                  date={timeline_date_string}
                  key={i}
                >
                    <h3 className="vertical-timeline-element-title">
                        {job.company}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        {job.title}
                    </h4>
                    <p>{job.brief}</p>
                </VerticalTimelineElement>
            );
        });

        return (
            <div className="Experience">
                <VerticalTimeline>
                    {jobs}
                </VerticalTimeline>
            </div>
        );
    }
}

export default Experience;