import Layout from "../src/components/Layout";
import Link from "next/link";

const Custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>This page does nor exists. Please return to 
        <Link href="/">Home</Link></p>
    </div>
  </Layout>  
)

export default Custom404;