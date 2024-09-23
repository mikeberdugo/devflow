import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({navlinks}) {

    return (
        <Box sx={{width:250 }}>
            <nav>
                <List>
                    {
                        navlinks.map( item => (
                            
                            <ListItem key={item.title} >
                                <ListItemButton componet="a" href={item.path} > 
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={ item.title} />
                                </ListItemButton>
                            </ListItem>
                        ) )
                    }
                </List>
            </nav>
        </Box>
    )
}
