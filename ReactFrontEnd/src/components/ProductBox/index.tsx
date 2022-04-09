import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from "../../model/Product";
import axios from "axios";
import { API_ROOT, PRODUCT_ENDPOINT } from "../../constants";



interface ProductBoxProps {
    product: Product,
    products: Product[],
    image: string,
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
}



export const ProductBox = (props: ProductBoxProps) => {
    const handleDelete = async () => {
        const resp = await axios.delete(`${API_ROOT}${PRODUCT_ENDPOINT}/${props.product.id}`);
        props.setProducts(props.products.filter(p => p.id !== props.product.id));
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
                        <AddShoppingCartIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ ml: 'auto' }} onClick={handleDelete}>
                        <DeleteIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>

    )
}