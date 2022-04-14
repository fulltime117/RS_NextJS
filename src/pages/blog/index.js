import Layout from "../../components/Layout/Layout";
import { Blog as BlogController } from "../../components/Blog";

export const Blog = () => {
  return (
    <Layout isFooter>
      <BlogController />
    </Layout>
  )
}

export default Blog;