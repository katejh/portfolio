import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: props.data
        }
        console.log(this.props.data);
        console.log(this.state.resumeData);
    }

    render() {
        var name = this.state.resumeData.basic_info.name;
        return (
            <div className="home-page">
            Hello! I am {name}
            <a href="resume.pdf" download>Resume download</a>
            </div>
        );
    }
}

export default HomePage;
