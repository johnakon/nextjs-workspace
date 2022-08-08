import { useRouter } from 'next/router'

function ProductDetails() {

    const router = useRouter()
    const productid = router.query.productId

    return (
        <>
            Returns details about Product {productid}
        </>
    )
}

export default ProductDetails