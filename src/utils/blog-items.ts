import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { IBlogArticleData } from "../types";

export async function getAllPosts() {
    const files = fs.readdirSync(path.join(process.cwd(), "blog"));

    const posts = await Promise.all(
        files
            .filter((f) => f.endsWith(".md"))
            .map(async (f) => {
                const md = matter(
                    fs
                        .readFileSync(path.join(process.cwd(), "blog", f))
                        .toString()
                );

                return {
                    data: md.data as IBlogArticleData,
                    content: md.content,
                };
            })
    );

    return posts;
}
