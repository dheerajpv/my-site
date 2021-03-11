import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={styles["navbar"]}>
            <a href="/" className={`${styles["nav-link"]} text-2xl`}>
                Dheeraj Prakash
            </a>
            <a
                href="/portfolio"
                className={`${styles["nav-link"]} ${
                    router.asPath === "/portfolio" ? styles["active"] : ""
                }`}
            >
                Portfolio
            </a>
            <a
                href="/blog"
                className={`${styles["nav-link"]} ${
                    router.asPath === "/blog" ? styles["active"] : ""
                }`}
            >
                Blog
            </a>
            <a href="/aero-bot" className={`${styles["nav-link"]}`}>
                AeroBot
            </a>
            <div className={styles["right-icons"]}>
                <a
                    href="https://github.com/dheerajpv"
                    target="_blank"
                    rel="nofollow"
                    className={styles["nav-link"]}
                >
                    <i className="fab fa-github text-2xl" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
