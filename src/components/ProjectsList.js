import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import ProjectModal from './ProjectModal';

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: props.projects,
            show_modal: props.showModal,
            modal_open: false,
            current_project_index: 0,
            card_props: props.cardProps,
            grid_props: props.gridProps
        }
    }

    handleModalOpen = (i) => {
        this.setState({
            current_project_index: i,
            modal_open: true
        });
    }

    handleModalClose = () => {
        this.setState({
            modal_open: false
        });
    }

    render() {
        var projects = this.state.projects.map((project, i) => {
            return (
                <Grid item key={i}>
                <Card 
                  {
                    ...this.state.card_props
                  }
                  key={i}
                  onClick={() => {
                    this.handleModalOpen(i);
                    if (this.state.card_props.onClick) {
                        this.state.card_props.onClick();
                    }
                  }}
                >
                    <CardContent>
                        <Typography 
                          variant="h5"
                        >
                            {project.name}
                        </Typography>
                        <div>
                        <Typography
                          variant="p"
                          color="text.secondary"
                        >
                            {project.start_date + " - " + (project.end_date ? project.end_date : "Current")}
                        </Typography>
                        </div>
                        <div>
                            <Typography
                              variant="p"
                            >
                                {project.brief}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
                </Grid>
            );
        });

        var modal = this.state.show_modal ?
            <ProjectModal 
              open={this.state.modal_open}
              onClose={this.handleModalClose}
              project={this.state.projects[this.state.current_project_index]}
            />
            : null;

        return (
            <div>
                <Grid {...this.state.grid_props}>
                    {projects}
                </Grid>
                {modal}
            </div>
        );
    }

}

export default ProjectsList;
