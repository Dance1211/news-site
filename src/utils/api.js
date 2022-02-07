import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://j-banister-news.herokuapp.com/api'
})

export const getArticles = async (queries) => {
  const res = await newsApi.get('/articles', {params: queries});
  return res.data.articles;
}

export const getSingleUser = async (username) => {
  const res = await newsApi.get(`/users/${username}`);
  return res.data.user;
}