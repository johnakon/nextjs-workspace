import Link from 'next/link'

function ProductList({productId = 10}) {
    return (
        <>
            <h3>
                <Link href='/product/1'>
                    <a>Product 1</a>
                </Link>
            </h3>
            <h3>
                <Link href='/product/2'>
                    <a>Product 2</a>
                </Link>
            </h3>
            <h3>
                <Link href='/product/3' replace>
                    <a>Product 3</a>
                </Link>
            </h3>

            <h3>
                <Link href={`/product/${productId}`}>
                    <a>Product {productId}</a>
                </Link>
            </h3>

            <br />

            <Link href='/'>
                <a>Home</a>
            </Link>
        </>
    )
}

export default ProductList