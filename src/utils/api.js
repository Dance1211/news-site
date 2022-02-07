import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://j-banister-news.herokuapp.com/api'
})

export const getArticles = async (queries) => {
  const res = await newsApi.get('/articles', {params: queries});
  return res.data.articles;
}

export const getSingleArticle = async(article_id) => {
  const res = await newsApi.get(`/articles/${article_id}`);
  return res.data.article;
}

export const getSingleUser = async (username) => {
  const res = await newsApi.get(`/users/${username}`);
  return res.data.user;
}