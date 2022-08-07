import Fetch from 'node-fetch'
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css';

import filterPic from '../public/Vector.png';

export const getStaticProps = async () => {
    const res = await Fetch("https://assessment.api.vweb.app/rides");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

export default function Home({ data }) {
    const d = data.filter((data) => {
        return data.origin_station_code >= 6 && data.origin_station_code <= 7;
    })
    return (
        <div>



            <nav className={styles.nav}>
                <ul>
                    <Link href="/"><li>Nearest rides</li></Link>
                    <Link href="/UpcomingRides"><li className={styles.ur}>Upcoming rides (4)</li></Link>
                    <Link href="/PastRides"><li>Past rides (7)</li></Link>
                </ul>

                <div className={styles.filter}>
                    <p><Image src={filterPic} height={12} width={18} /></p>
                    <p className={styles.head}>Filter</p>
                    <div className={styles.dropdown_menu}>
                        <p>Filters</p>
                        <div>State<a>&#x25BC;</a> </div><br />
                        <div>City<a>&#x25BC;</a> </div>
                    </div>
                </div>
            </nav>

            <div className={styles.near}>
                {d.map((currEle) => {
                    return (
                        <>
                            <div key={currEle.id} className={styles.box}>
                                <img src={currEle.map_url} width="296" height="148" />
                                <div className={styles.details}>
                                    <p>Ride id: {currEle.id}</p>
                                    <p>Origin Station: {currEle.origin_station_code}</p>
                                    <p>Station path: {currEle.station_path}</p>
                                    <p>Date: {currEle.date}</p>
                                    <p>Distance: 1</p>
                                </div>
                                <div className={styles.location}>
                                    <p>{currEle.state}</p>
                                    <p>{currEle.city}</p>
                                </div>
                            </div><br />
                        </>
                    )
                })}



            </div>



        </div>
    )
}
