import Link from "next/link";

export default function Index() {
    return <><Link href="/bar">Bar</Link></>
}

export async function getServerSideProps(context) {
  console.log("foo: ", context.req.headers.referer)

  return {
    props: {}
  }
}
