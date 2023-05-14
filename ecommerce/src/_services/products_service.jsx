import axios from 'axios'
const PRODUCT = "http://localhost:8083/api/products";

    const saveProduct = (PRODUCT) => {
        return axios.post(PRODUCT, PRODUCT);
    }

    const getProduct = (params) => {
        return axios.get(`${PRODUCT}/all`, {params});
    }

export const productsService = {
    saveProduct, getProduct
};