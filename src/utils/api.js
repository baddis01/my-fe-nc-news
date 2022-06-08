import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-17.herokuapp.com/api",
});

export async function getArticles(topic) {
  const {
    data: { articles },
  } = await api.get("/articles", { params: { topic } });
  return articles;
}

export async function getTopics() {
  const {
    data: { topic },
  } = await api.get(`/topics`);
  return topic;
}

// export const patchArticle = (articleId, votes) => {
//   return api.patch(`/articles/${articleId}`, { vote: votes }).then();
// };
