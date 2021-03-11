import { GetStaticProps } from "next";
import CardList from "../components/CardList";
import Card from "../components/Card";
import styles from "../styles/Blog.module.css";
import { IBlogArticleData } from "../types";
import { useState } from "react";
import BlogArticleCard from "../components/BlogArticleCard";
import remark from "remark";
import html from "remark-html";
import _ from "lodash";
import { getAllPosts } from "../utils/blog-items";
import Head from "next/head";

type PropTypes = {
    articles: {
        data: IBlogArticleData;
        content: string;
    }[];
};

const Blog = ({ articles }: PropTypes) => {
    const [searchValue, setSearchValue] = useState("");

    const searchResults = articles.map((a) => {
        let strippedContent: string;

        remark()
            .use(html)
            .process(a.content, (e, f) => {
                if (e) console.error(e);
                strippedContent = String(f)
                    .replace(/<[^>]+>/g, "")
                    .replace(/$/gm, "");
            });

        if (
            a.data.title.toLowerCase().includes(searchValue) ||
            a.data.desc.toLowerCase().includes(searchValue) ||
            a.data.tags.toLowerCase().includes(searchValue) ||
            strippedContent.toLowerCase().includes(searchValue)
        )
            return <BlogArticleCard {...a} />;
        else return null;
    });

    const resultLength = _.compact(searchResults).length;

    return (
        <>
            <Head>
                <title>Blog - Dheeraj Prakash</title>
                <meta
                    key="og:description"
                    name="og:description"
                    content="Dheeraj Prakash's blog - A student and aspiring developer"
                />
            </Head>
            <div className={styles["blog"]}>
                <h3>Featured Articles</h3>
                <CardList>
                    {articles.slice(0, 5).map((a) => (
                        <Card
                            author={a.data.author}
                            imgSrc={a.data.imgSrc}
                            desc={a.data.desc}
                            tags={a.data.tags.split(",")}
                            title={a.data.title}
                            date={a.data.date}
                        />
                    ))}
                </CardList>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className={`flex flex-row items-center ${styles["search-form"]}`}
                >
                    <input
                        type="text"
                        className={styles["search-bar"]}
                        name="search"
                        placeholder="Search Articles..."
                        value={searchValue}
                        onChange={(e) =>
                            setSearchValue(e.target.value.toLowerCase())
                        }
                    />
                    <label htmlFor="search" className={styles["search-side"]}>
                        Search <i className="fas fa-search" />
                    </label>
                </form>
                <h3>
                    {searchValue === ""
                        ? "All Articles"
                        : `${resultLength} result${
                              resultLength === 1 ? "" : "s"
                          }`}
                </h3>
                {resultLength > 0 ? (
                    <section className={`${styles["search-results"]}`}>
                        {_.compact(searchResults)}
                    </section>
                ) : (
                    <p className={`text-center`}>No Results</p>
                )}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts();

    return {
        props: {
            articles: posts,
        },
    };
};

export default Blog;
