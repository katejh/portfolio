import { Chip } from '@mui/material';
import { techToIconClass } from '../helpers/techToIcon';

function SkillChip(props) {
    return (
        <Chip 
          label={props.skill}
          color="secondary"
          size="small"
          icon={<i className={techToIconClass(props.skill)}/>}
          sx={{mr: 1}}
        />
    );
}

export default SkillChip;