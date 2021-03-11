import styles from "../styles/Card.module.css";

type PropTypes = {
    title: string;
    author: string;
    imgSrc: string;
    desc: string;
    date: string;
    tags: string[];
};

const Card = ({ title, desc, author, date, tags, imgSrc }: PropTypes) => {
    return (
        <article className={styles["card"]}>
            <header className={styles["card-header"]}>
                <p>{date}</p>
                <a href={`/blog/${title.toLowerCase()}`}>
                    <h2>{title}</h2>
                </a>
            </header>

            <p className={styles["card-description"]}>{desc}</p>

            <div className={styles["card-author"]}>
                <img src={imgSrc} className={styles["author-img"]} />
                <svg className={styles["half-circle"]} viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div className={styles["author-name"]}>
                    <div className={styles["author-name-prefix"]}>Author</div>
                    {author}
                </div>
            </div>

            <div className={styles["tags"]}>
                {tags.map((t) => (
                    <a href="#" key={t}>
                        {t}
                    </a>
                ))}
            </div>
        </article>
    );
};

export default Card;
