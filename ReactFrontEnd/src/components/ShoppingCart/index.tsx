import { SwipeableDrawer, Box, List, ListItem, ListItemText, Divider, Typography, IconButton, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Product } from '../../model/Product';
import DeleteIcon from '@mui/icons-material/Delete';

import { InfoNotification } from '../InfoNotification';
import { removeFromCart } from '../../service/removeFromCart';
import { getCartContent } from '../../service/getCartContent';
import { submitOrder } from '../../service/submitOrder';

interface Props {
    cartOpened: boolean;
    toggleCart: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const ShoppingCart = ({ cartOpened, toggleCart }: Props) => {
    const [cartList, setCartList] = useState<Product[]>([]);
    const [showInfo, setShowInfo] = useState(false);
    const [infoMessage, setInfoMessage] = useState("");

    useEffect(() => {
        const getShoppingCartContent = async () => {
            try {
                const response = await getCartContent();
                if (response.data)
                    setCartList(response.data);
                else {
                    setInfoMessage("Failed to fetch cart content");
                    setShowInfo(true);
                }
            } catch (e) {
                setInfoMessage("Failed to fetch cart content");
                setShowInfo(true);

            }
        }
        if (cartOpened)
            getShoppingCartContent();
    }, [cartOpened])


    const handleRemoveFromCart = async (id: number) => {
        try {
            await removeFromCart(id);
            setCartList(cartList.filter(product => product.id !== id));
            setInfoMessage("Removed product from cart");
        } catch (e) {
            setInfoMessage("Failed to remove product from cart");
        }
        setShowInfo(true);

    }

    const handleOrder = async () => {
        try {
            await submitOrder(cartList);
            setInfoMessage("Order successfully placed");
        } catch (e) {
            setInfoMessage("Failed to send the order");
        }
        setShowInfo(true);
    }

    return (
        <SwipeableDrawer
            anchor={'right'}
            open={cartOpened}
            onClose={toggleCart(false)}
            onOpen={toggleCart(true)}
        >
            <Box
                sx={{ width: 300, height: '100vh', bgcolor: "primary.light", color: "white" }}
                role="presentation">
                <Box sx={{ px: '1rem', pb: '2rem', pt: '2rem' }}>
                    <Typography variant="h5">
                        Shopping Cart:
                    </Typography>
                </Box>
                <List>
                    {cartList.map((cartItem) => {
                        return (<div key={cartItem.id}>
                            <ListItem sx={{ bgcolor: "secondary.dark", px: "1rem" }} secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(cartItem.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }>
                                <ListItemText primary={cartItem.name} secondary={cartItem.description} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                        )
                    })}
                </List>
                <Grid container justifyContent="flex-end">
                    <Button variant="contained" sx={{ my: "1rem", mx: "1rem" }} onClick={handleOrder}>
                        Place Order
                    </Button>
                </Grid>
            </Box>
            <InfoNotification message={infoMessage} open={showInfo} setOpen={setShowInfo} />
        </SwipeableDrawer>
    );
}