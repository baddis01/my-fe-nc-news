const ArticleCard = ({
  title,
  createdBy,
  votes,
  commentCount,
  createdAt,
  topic,
}) => {
  return (
    <article className="article-card">
      <h3>{title}</h3>
      <br></br>
      <p>Create by: {createdBy}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {commentCount}</p>
      <p>Time Created: {createdAt}</p>
      <p>Topic: {topic}</p>
    </article>
  );
};

export default ArticleCard;
