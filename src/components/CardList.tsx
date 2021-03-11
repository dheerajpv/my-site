import React, { CSSProperties } from "react";
import styles from "../styles/CardList.module.css";
import Card from "./Card";

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};

const CardList = ({ className, children }: PropTypes) => {
    return (
        <section className={`${styles["card-list"]} ${className}`}>
            {children}
        </section>
    );
};

export default CardList;
