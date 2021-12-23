import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props.data;

        this.state = {
            name: data.basic_info.name
        }

        // console.log(this.props.data);
    }

    componentDidMount

    render() {
        var name = this.state.name;

        return (
            <div className="home-page">
            Hello! I am {name}
            <br/>
            <a href="resume.pdf" download>Resume download</a>
            </div>
        );
    }
}

export default HomePage;
