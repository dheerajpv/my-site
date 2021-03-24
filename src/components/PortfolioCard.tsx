import styles from "../styles/Card.module.css";

type PropTypes = {
    title: string;
    description: string;
    imgSrc?: string;
    href: string;
    tags?: string[];
};

const PortfolioCard = ({
    title,
    imgSrc,
    description,
    tags,
    href,
}: PropTypes) => {
    return (
        <a href={href}>
            <div className={styles["card"]}>
                <div className={styles["card-img"]}>
                    <img src={imgSrc} width="50%" />
                </div>

                <h3 className={styles["card-title"]}>{title}</h3>

                <p className={styles["card-description"]}>{description}</p>

                <div className={styles["tags"]}>
                    {tags.map((t) => (
                        <span key={t} style={{ cursor: "pointer" }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default PortfolioCard;
