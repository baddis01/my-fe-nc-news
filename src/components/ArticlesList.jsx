import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    api.getArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

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
