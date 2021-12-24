import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceTimelineElement from './ExperienceTimelineElement';

import 'react-vertical-timeline-component/style.min.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: props.experience,
        }
    }

    render() {
        var jobs = this.state.experience.map((job, i) => {
           return (
            <ExperienceTimelineElement job={job}/>
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