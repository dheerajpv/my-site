import styles from "../styles/LangInfo.module.css";

type PropTypes = {
    lang: string;
    info: string;
};

const LangInfo = ({ lang, info }: PropTypes) => {
    return (
        <details className={styles["lang-info"]} open>
            <summary>
                <h4 className={styles["lang-name"]}>{lang}</h4>
            </summary>
            <p className="w-3/4 mt-2 pb-3">{info}</p>
        </details>
    );
};

export default LangInfo;
