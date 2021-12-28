import ProjectsList from "./ProjectsList";
import { Typography, Box, Grid } from '@mui/material';

function Projects(props) {
    return (
        <div>
            <Box
              sx={{
                m: 4
              }}
            >
            <div
              style={{
                display: 'flex',
              }}
            >
                <Typography variant="h4">
                    Projects
                </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                //justifyContent: 'center',
              }}
            >  
                <Box sx={{mt: 4}}>          
                    <ProjectsList 
                      projects={props.projects} 
                      cardProps={{
                        sx: {
                          width: 250,
                          height: 200,
                          cursor: 'pointer'
                        },
                      }}
                      gridProps={{
                        container: true,
                        spacing: 2
                      }}
                      showModal
                    />
                </Box>            
            </div>
            </Box>
        </div>
    );
}

export default Projects;
