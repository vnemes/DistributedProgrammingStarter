
import { AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { ShoppingCart } from '../ShoppingCart';

export const Header = () => {
    const [cartOpened, setCartOpened] = useState(false);

    const toggleCart =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setCartOpened(open);
            };

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
                                <IconButton onClick={toggleCart(true)} aria-label="shopping cart" color="inherit">
                                    <ShoppingCartIcon sx={{ p: 0 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <ShoppingCart cartOpened={cartOpened} toggleCart={toggleCart} />
        </Box>
    );
}




