import { GetStaticProps } from "next";
import portfolio from "../../portfolio.json";
import PortfolioCard from "../components/PortfolioCard";

type PropTypes = {
    portfolio: {
        title: string;
        description: string;
        imgSrc?: string;
        href: string;
        tags?: string[];
    }[];
};

const Portfolio = ({ portfolio }: PropTypes) => {
    return (
        <div>
            <h1
                className="text-black dark:text-white text-4xl m-2 mb-4"
                style={{ fontFamily: "Montserrat" }}
            >
                My Portfolio
            </h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center p-4 mt-4"
                style={{ gap: "2rem 0.5rem" }}
            >
                {portfolio.map((v) => (
                    <PortfolioCard {...v} key={v.title} />
                ))}
            </div>
            <h3
                className="text-black dark:text-white text-3xl m-2"
                style={{ fontFamily: "Montserrat" }}
            >
                More projects soon...
            </h3>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: portfolio,
    };
};

export default Portfolio;
