import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";

export default function newProduct() {
    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    );
}