import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined'; // Backlog (Tareas)
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; // Dashboard
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'; // Team
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined'; // Daily Meetings
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'; // Current Sprint
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; // Settings
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'; // Logout
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'; // Reports




const navlinks = [
    {
        title: "Home",
        path: "/home",
        icon: <HomeOutlinedIcon/>
    },
    {
        title: "Daily Meetings",
        path: "#",
        icon: <TodayOutlinedIcon/>
    },
    {
        title: "Current Sprint",
        path: "#",
        icon: <TimelineOutlinedIcon/>
    },
    {
        title: "Task List",
        path: "#",
        icon: <ChecklistOutlinedIcon/>
    },
    {
        title: "Team",
        path: "#",
        icon: <PeopleAltOutlinedIcon/>
    },
    {
        title: "Reports",
        path: "#",
        icon: <AssessmentOutlinedIcon/>
    },
    // {
    //     title: "Settings",
    //     path: "#",
    //     icon: "SettingsOutlinedIcon"
    // },
    // {
    //     title: "Logout",
    //     path: "#",
    //     icon: "ExitToAppOutlinedIcon"
    // }
];


export default function Navbar() { 
    const [open,setOpen] = useState(false);


    return (
        <>
        <AppBar >
            <Toolbar>
                <Box sx={{display: {xs: 'block', sm: 'block' , md: 'none'} }} >
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
                

                <Typography variant="h6" sx={{flexGrow:1}}>DevFlow</Typography>
                <Box sx={{ display: { xs: 'none', sm: 'none' , md: 'block'} }}>
                    {
                        navlinks.map( item => (
                            <Button color="inherit" key={item.title} component="a" href={item.path} > { item.title} </Button>
                        ) )
                    }
                </Box>

            </Toolbar>
        </AppBar>
        


        <Drawer open={open} anchor="left" onClose={() => setOpen(false)} >
            <NavListDrawer navlinks={navlinks} /> 
        </Drawer>

        
        </>
    )

} 