import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { useState } from 'react';
import { Product } from '../../model/Product';
import { API_ROOT, PRODUCTS_ENDPOINT } from '../../constants';

export const AddProductModal = ({products, setProducts}:any) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescr] = useState("");


    const handleClose = () => {
        setOpen(false);
    }

    const handleSave = async () => {
        const prod: Product = {
            id: 0,
            name,
            description,
            dateAdded: new Date(),
        }
        try {

            const response = await axios.post<Product>(API_ROOT + PRODUCTS_ENDPOINT, prod);
            if (response){
                setProducts([...products, response.data]);
                setOpen(false);
            }

        } catch (e) {
            console.error(`Error creating a new Product: ${e}`);
        }

    }

    const displayAddProductDialog = () => {
        setOpen(true);
    }

    return (
        <div>
            <Button onClick={displayAddProductDialog} variant="outlined" endIcon={<AddBusinessIcon />} color="secondary">
                Add a new Product
            </Button >

            <Dialog onClose={handleClose} open={open} sx={{ p: 2 }} PaperProps={{
                style: {
                    backgroundColor: grey[600],
                    color: grey[100]
                }
            }}>
                <DialogTitle sx={{ m: 1 }}>Create a new Product</DialogTitle>
                <DialogContent>
                    <TextField autoFocus id="name" label="Name" variant="outlined" fullWidth sx={{ m: 1 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField id="description" label="Description" multiline rows={4} variant="outlined" fullWidth sx={{ m: 1 }}
                        value={description}
                        onChange={(e) => setDescr(e.target.value)} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}