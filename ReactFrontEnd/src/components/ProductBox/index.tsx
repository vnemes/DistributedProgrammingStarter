import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from "../../model/Product";
import { deleteProductFromDB } from "../../service/deleteProductFromDB";
import { addToCart } from "../../service/addToCart";
import { removeFromCart } from "../../service/removeFromCart";
import { useState } from "react";
import { InfoNotification } from "../InfoNotification";



interface ProductBoxProps {
    product: Product,
    products: Product[],
    image: string,
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
}



export const ProductBox = (props: ProductBoxProps) => {
    const [showCartInfo, setShowCartInfo] = useState(false);
    const [infoMessage, setInfoMessage] = useState("");


    const handleAddToCart = async () => {
        try {
            await addToCart(props.product);
            setInfoMessage("Product added to cart");
        } catch (e) {
            setInfoMessage("Cannot add product to cart");
        }
        setShowCartInfo(true);

    }


    const handleDelete = async () => {
        try {
            removeFromCart(props.product.id);
            deleteProductFromDB(props.product.id);
            props.setProducts(props.products.filter(p => p.id !== props.product.id));
            setInfoMessage("Product removed from the database");
        } catch (e) {
            setInfoMessage("Failed to remove product from the database!");
        }
        setShowCartInfo(true);
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 345, bgcolor: "primary.light", color: "white" }} >
                <CardHeader
                    title={props.product.name}
                    subheader={new Date(props.product.dateAdded).toDateString()}

                />
                <CardMedia
                    component="img"
                    height="210"
                    // Randomly select an image from the stock photo array
                    image={props.image}
                    alt="medical product"
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary">
                        {props.product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to cart" >
                        <AddShoppingCartIcon sx={{ color: "text.primary" }} onClick={handleAddToCart} />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ ml: 'auto' }} onClick={handleDelete}>
                        <DeleteIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                </CardActions>
            </Card>
            <InfoNotification message={infoMessage} open={showCartInfo} setOpen={setShowCartInfo} />

        </Box>

    )
}