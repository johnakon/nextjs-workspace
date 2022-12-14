import { useRouter } from 'next/router'

function ProductDetails() {

    const router = useRouter()
    const productid = router.query.productId

    return (
        <>
            Returns details about a Product {productid}
        </>
    )
}

//export default ProductDetails

// shift to use [productId] folder instead of [productId].js