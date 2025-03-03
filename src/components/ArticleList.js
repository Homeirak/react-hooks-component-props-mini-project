import React from "react";
import Article from "./Article"

function ArticleList ({ posts }) {
    console.log("Received posts in ArticleList:", posts);

    if (!posts || !Array.isArray(posts)){<p>No Article was found</p>;
    }
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />
            ))}
        </main>
    );
}
export default ArticleList;