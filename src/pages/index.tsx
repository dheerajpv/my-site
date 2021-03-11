import Head from "next/head";
import TypeWriter from "typewriter-effect";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <Head>
                <title>
                    Dheeraj Prakash - A Student and Aspiring Developer
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className={styles["full-screen"]}>
                    <span className={styles["lg-name"]}>Dheeraj Prakash</span>
                    <div
                        className={`${styles["typewriter-container"]} flex flex-row`}
                    >
                        <span className="text-black mr-1.5">A Person</span>
                        <TypeWriter
                            onInit={() => {}}
                            options={{
                                // todo: have good strings
                                strings: [
                                    "that is cool",
                                    "who is smart",
                                    "that likes CS",
                                ],
                                autoStart: true,
                                loop: true,
                                cursorClassName:
                                    "Typewriter__cursor text-white",
                            }}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
