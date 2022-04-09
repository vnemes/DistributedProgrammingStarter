
import { AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { InfoNotification } from '../InfoNotification';

export const Header = () => {
    const [openNotification, setOpenNotification] = useState(false);

    const openShoppingCart = () => {
        setOpenNotification(true);
    }

    return (
        <Box sx={{ pb: "2rem" }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            style={{ flex: 1 }}
                        >
                            DP Demo
                        </Typography>

                        <Box>
                            <Tooltip title="Open Cart">
                                <IconButton onClick={openShoppingCart} aria-label="shopping cart" color="inherit">
                                    <ShoppingCartIcon sx={{ p: 0 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>

            <InfoNotification message="Not implemented yet!" open={openNotification} setOpen={setOpenNotification}/>
            </AppBar>
        </Box>
    );
}


