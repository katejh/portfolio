import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Drawer, List, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            open: false
        }
    }

    toggleDrawer = () => {
        this.setState({open: !this.state.open});
    }

    closeDrawer = () => {
        this.setState({open: false});
    }

    render() {
        const linkStyle = {
            color: "#FFF",
            textDecoration: 'none'
        }

        return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" enableColorOnDark color="primary">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{textAlign: "left"}}>
                        <Link to="/" style={linkStyle}>
                            {this.state.name}
                        </Link>
                    </Typography>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={this.toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={this.state.open}
                  onClose={this.closeDrawer}
                >
                    <Box
                      sx={{width: 250}}
                      role="presentation"
                    >
                    <List>
                        <MenuItem component={Link} to="/" onClick={this.closeDrawer}>
                            <Typography color="primary.dark">Home</Typography>
                        </MenuItem>
                        <MenuItem component={Link} to="/projects" onClick={this.closeDrawer}>
                            <Typography color="primary.dark">Projects</Typography>
                        </MenuItem>
                        <MenuItem component={Link} to="/experience" onClick={this.closeDrawer}>
                            <Typography color="primary.dark">Experience</Typography>
                        </MenuItem>
                    </List>
                    </Box>
                </Drawer>
            </AppBar>
            </Box>
        );
    }
}

export default Header;
