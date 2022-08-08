import Link from 'next/link'
import  { useRouter} from 'next/router'

function Home(){

    const router = useRouter()
    // access push method


    const handleClick = () => {
        console.log("Making your order... ")

        router.push('/product')
    }

    return (
        <>
            <h1>Hello home</h1>

            <Link href='/blog'>
                <a>Blog</a>
            </Link>
            <br /><br />
            <Link href='/product'>
                <a>Product</a>
            </Link>
            <br /><br />

            <button onClick={handleClick}>
                Order Now
            </button>
        </>
    )
}

export default Home