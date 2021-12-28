import { Card, CardContent, Typography, Modal, Box } from '@mui/material';

function ProjectModal(props) {
    const project = props.project;

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
                    <Box>
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