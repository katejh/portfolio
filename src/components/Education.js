import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: props.education
        }
    }

    render() {
        var educations = this.state.education.map((ed, i) => {
            return (
                <VerticalTimelineElement
                  className="vertical-time-element--education"
                >

                </VerticalTimelineElement>
            );
        });
        return (
            <div></div>
        );
    }
}

export default Education;
