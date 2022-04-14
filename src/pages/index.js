import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <>
      <Layout>
        <div>Home</div>
      </Layout>
    </>
    
  );
} 

// export const getStaticProps = async () => {

//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const countries = await res.json();

//   return {
//     props: {
//       countries,
//     },
//   };
// };
