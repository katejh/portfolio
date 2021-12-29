import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { techToIconClass } from '../helpers/techToIcon';

function Skills(props) {
    var skills = props.skills.map((skill, i) => (
        <Grid item key={i}>
            <Card sx={{
                width: 100,
                height: 120,
                flexGrow: 1,
            }}>
                <Box sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexGrow: 2,
                    height: '100%',
                    flexDirection: 'column'
                }}> 
                    <div>
                        <i className={techToIconClass(skill)} style={{fontSize: '200%'}}/>
                        <Typography>{skill}</Typography>
                    </div>                  
                </Box>
            </Card>
        </Grid>
    ));

    return (
        <div>
            <div
              style={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center'
              }}
            >
                <Typography variant="h4">Skills</Typography>
            </div>
            <Box sx={{mt: 4}}>
                <Grid 
                  container
                  spacing={2}
                >
                    {skills}
                </Grid>
            </Box>
        </div>
    );
}

export default Skills;