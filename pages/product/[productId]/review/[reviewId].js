import { useRouter } from 'next/router'

function Review() {

    const router = useRouter()

    const { productId, reviewId } = router.query

    return (
        <>
            Review {reviewId} for product {productId}
        </>
    )
}

export default Review