import Link from "next/link"

export default function Index() {
    return <Link href="/foo">BACK</Link>
}

export async function getServerSideProps(context) {
  console.log("bar: ", context.req.headers.referer)

  return {
    props: {}
  }
}
