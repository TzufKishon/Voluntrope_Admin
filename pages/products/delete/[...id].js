import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import axios from 'axios';
import { useState } from 'react';

export default function DeleteProductPage() {
    const router = useRouter();
    const [ProductInfo,setProductInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products/?id='+id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);
    function goBack() {
        router.push('/products');
    }
    async function deleteProduct() {
            await axios.delete('/api/products?id='+id);
            goBack();
    }
    return (
        <Layout>
            <h1 className="text-center">Are you sure you want to delete 
                &nbsp;"{ProductInfo?.title}"?
            </h1>
            <div className="flex gap-2 justify-center">
                <button onClick={deleteProduct}
                    className="btn-red">YES</button>
                <button className="btn-default" 
                    onClick={goBack}>
                    NO
                </button>
            </div>
        </Layout>
    )
}