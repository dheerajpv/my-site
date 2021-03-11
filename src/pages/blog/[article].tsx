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
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type PropTypes = {
    data: IBlogArticleData;
    content: string;
};

const Article = ({ data, content }: PropTypes) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const router = useRouter();

    return (
        <>
            <Head>
                <title>
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
            <article className={styles["article"]}>
                <h1 className={styles["article-title"]}>{data.title}</h1>
                <h3>{data.desc}</h3>
                <div className={styles["article-data"]}>
                    <img src={data.imgSrc} />
                    {data.date} by {data.author}
                </div>
                <main className={styles["article-main"]}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    ></div>
                </main>
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
