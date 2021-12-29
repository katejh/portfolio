import { Card, CardContent, Typography, Modal, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillChip from './SkillChip';

function ProjectModal(props) {
    const project = props.project;
    const StyledLink = styled('a')(({theme}) => ({
        color: theme.palette.text.secondary,
    }));

    var tech = props.project.technologies.map((technology, i) => (
        <SkillChip 
          key={i}
          skill={technology}
        />
    ));

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                boxShadow: 24,
                p: 4
            }}>
                <CardContent>
                    <Typography variant="h4">
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
                        <Typography variant="p">
                            {project.brief}
                        </Typography>
                    </div>
                    <div style={{marginTop: 2, marginBottom: 8}}>
                        {tech}
                    </div>
                    <div>
                        <Typography>
                            {project.code_link ?
                                <StyledLink href={project.code_link}>
                                    See the source code!
                                </StyledLink> 
                                : ""}
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            {project.url ? 
                                <StyledLink href={project.url}>
                                    See the demo!
                                </StyledLink> 
                                : ""}
                        </Typography>
                    </div>
                    <Box sx={{mt: 2}}>
                        <Typography variant="p">
                            <div dangerouslySetInnerHTML={{__html: project.body}} />
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Modal>
    );    
}

export default ProjectModal;