import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home </title>
      <meta name="keywords" content="ninjas"></meta>
    </Head>
    <div className={styles.title}>
       <h2 className={styles.text}>hello world</h2> 
       <Link href={"/ninjas"}><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>
  );
}
