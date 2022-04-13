import axios from "axios";

// public
export const getProducts = async () => axios.get("/api/products");

export const getCategories = async () => axios.get("/api/categories");


// private
export const getCartlist = async ({ encodedToken }) => {
    axios.get(`/api/user/cart`, {
        headers: {
            authorization: encodedToken,
        },
    });
}

export const addCartlist = async ({ product, encodedToken }) => {
    axios.post(
        `/api/user/cart`,
        { product },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
}

export const deleteCartlist = async ({ productId, encodedToken }) => {
    axios.delete(`/api/user/cart/${productId}`, {
        headers: {
            authorization: encodedToken,
        },
    });
}

export const editCartlist = async ({ productId, encodedToken, type }) => {
    axios.post(
        `/api/user/cart/${productId}`,
        {
            action: { type },
        },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
}

export const getWishlist = async ({ encodedToken }) => {
    axios.get(`/api/user/wishlist`, {
        headers: {
            authorization: encodedToken,
        },
    });
}

export const addWishlist = async ({ product, encodedToken }) => {
    axios.post(
        `/api/user/wishlist`,
        { product },
        {
            headers: {
                authorization: encodedToken,
            },
        }
    );
}


export const deleteWishlist = async ({ productId, encodedToken }) => {
    axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
            authorization: encodedToken,
        },
    });
}