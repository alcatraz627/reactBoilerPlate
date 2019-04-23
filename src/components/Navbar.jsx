import React from 'react'
import { AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar >
                <IconButton color="inherit">
                    <Menu />
                </IconButton>
                <Typography variant="h6" color="inherit">Hon Honee Baguette</Typography>
                <div style={{ flexGrow: 1 }} />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
