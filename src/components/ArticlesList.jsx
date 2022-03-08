import React, { useEffect, useState } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>LOADING PAGE...</p>;

  return (
    <section>
      {articles.map(
        ({
          article_id,
          title,
          topic,
          author,
          votes,
          created_at,
          comment_count,
        }) => {
          return (
            <ArticleCard
              key={article_id}
              title={title}
              createdBy={author}
              topic={topic}
              votes={votes}
              createdAt={created_at}
              commentCount={comment_count}
            />
          );
        }
      )}
    </section>
  );
};

export default ArticlesList;
