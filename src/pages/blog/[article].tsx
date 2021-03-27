import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { IBlogArticleData } from "../../types";
import styles from "../../styles/article.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

type PropTypes = {
    data: IBlogArticleData;
    content: string;
};

const Article = ({ data, content }: PropTypes) => {
    const router = useRouter();

    useEffect(hljs.highlightAll, []);

    return (
        <>
            <Head>
                <title key="title">
                    {data.title} - {data.author}
                </title>
                <meta key="og:title" name="og:title" content={data.title} />
                <meta
                    key="og:description"
                    name="og:description"
                    content={data.desc}
                />
                <meta
                    key="og:url"
                    name="og:url"
                    content={`https://dheerajpv.vercel.app/${router.asPath}`}
                />
            </Head>
            <article className={`${styles["article"]} dark:text-white pt-3`}>
                <div
                    className={`${styles["article-width"]} mb-3 dark:text-gray-300`}
                >
                    <h1
                        className={`${styles["article-title"]} dark:text-white`}
                    >
                        {data.title}
                    </h1>
                    <p className="text-xl" style={{ fontFamily: "Open Sans" }}>
                        {data.desc}
                    </p>
                    <div className={`${styles["article-data"]}`}>
                        <img src={data.imgSrc} />
                        {data.date} by {data.author}
                    </div>
                </div>

                <hr
                    className={`${styles["article-width"]} dark:border-gray-400 border-gray-900`}
                />

                <main
                    className={`${styles["article-main"]} ${styles["article-width"]} prose dark:prose-light mb-5`}
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
            </article>
        </>
    );
};

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const article = params!.article as string;

    try {
        const file = await fs.readFile(
            join(process.cwd(), "blog", `${article}.md`)
        );

        const md = matter(file.toString());

        let content: string;

        remark()
            .use(html)
            .process(md.content, (err, file) => {
                if (err) console.error(err);
                content = String(file);
            });

        return {
            props: {
                data: md.data,
                content: content,
            },
        };
    } catch (e) {
        return null;
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = await fs.readdir(join(process.cwd(), "blog"));
    const paths = files.map((f) => {
        return {
            params: {
                article: f.replace(/\.md$/, ""),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
