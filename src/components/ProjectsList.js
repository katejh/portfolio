import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import ProjectModal from './ProjectModal';
import SkillChip from './SkillChip';

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
            var skills = project.technologies.map((tech, i) => (
                <SkillChip
                  key={i}
                  skill={tech}
                />
            ));

            return (
                <Grid item key={i} md={3}>
                <Card 
                  {...this.state.card_props}
                  key={i}
                >
                    <CardContent 
                      onClick={this.state.show_modal ? 
                        () => {
                            this.handleModalOpen(i);
                            if (this.state.card_props.onClick) {
                                this.state.card_props.onClick();
                            }
                        } :
                        undefined
                      }
                      style={this.state.show_modal ?
                        {cursor: 'pointer'} : {}
                      }
                    >
                        <Typography 
                          variant="h5"
                          color="primary"
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
                        <div style={{marginTop: 2}}>
                            {skills}
                        </div>
                        {
                            this.state.show_modal ? 
                                <div style={{marginTop: 4}}>
                                    <Typography
                                      variant="p"
                                      color="text.secondary"
                                    >
                                        Click for more
                                    </Typography>
                                </div>
                                : null
                        }
                    </CardContent>
                    <CardActions>
                        {project.code_link ?
                            <Button onClick={() => window.open(project.code_link)}>Code</Button>
                            : null
                        }
                        {project.url ?
                            <Button onClick={() => window.open(project.url)}>Demo</Button>
                            : null
                        }
                    </CardActions>
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
