import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: props.projects,
            show_modal: props.showModal,
            current_project_index: 0,
            card_props: props.cardProps,
            grid_props: props.gridProps
        }
    }

    render() {
        var projects = this.state.projects.map((project, i) => {
            return (
                <Grid item>
                <Card 
                  {...this.state.card_props}
                  key={i}
                >
                    <CardContent>
                        <Typography 
                          variant="h5"
                        >
                            {project.name}
                        </Typography>
                        <Typography
                          variant="p"
                        >
                            {project.brief}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            );
        });

        return (
            <Grid {...this.state.grid_props}>
                {projects}
            </Grid>
        );
    }

}

export default ProjectsList;
