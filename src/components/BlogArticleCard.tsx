import { IBlogArticleData } from "../types";
import styles from "../styles/BlogArticleCard.module.css";

type PropTypes = {
    data: IBlogArticleData;
    content: string;
};

const BlogArticleCard = ({ data, content }: PropTypes) => {
    return (
        <div className={styles["article-card"]}>
            <header className={styles["card-header"]}>
                <p>{data.date}</p>
                <a href={`/blog/${data.title.toLowerCase()}`}>
                    <h2>{data.title}</h2>
                </a>
            </header>

            <p className={styles["card-description"]}>{data.desc}</p>

            <div className={styles["card-author"]}>
                <img src={data.imgSrc} className={styles["author-img"]} />
                <svg className={styles["half-circle"]} viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div className={styles["author-name"]}>
                    <div className={styles["author-name-prefix"]}>Author</div>
                    {data.author}
                </div>
            </div>

            <div className={styles["tags"]}>
                {data.tags.split(",").map((t) => {
                    return (
                        <a href="#" key={t}>
                            {t}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogArticleCard;
