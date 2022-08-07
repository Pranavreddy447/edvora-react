import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import profPic from '../public/pranavimg.jpg';


export default function Navbar() {
    return (
        <>

            <Head>
                <title>Edvora</title>
            </Head>
            <div className={styles.header}>
                <p className={styles.org}>Edvora</p>
                <p className={styles.name}>Pranav Gunnala  </p>
                <p className={styles.imgprt}><Image className={styles.img} src={profPic} height={40} width={40} /></p>
            </div>
        </>

    )
}
