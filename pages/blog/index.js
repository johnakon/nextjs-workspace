import Link from 'next/link'

function Blog() {
  return (
    <>
      <h3>This is just a blog page</h3>

      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  )
}

export default Blog
