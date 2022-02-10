import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://j-banister-news.herokuapp.com/api'
})

export const getArticles = async (queries) => {
  const res = await newsApi.get('/articles', { params: queries });
  return res.data.articles;
}

export const getSingleArticle = async (article_id) => {
  const res = await newsApi.get(`/articles/${article_id}`);
  return res.data.article;
}

export const voteSingleArticle = async (article_id, amount) => {
  const res = await newsApi.patch(`/articles/${article_id}`, { inc_votes: amount });
  return res.data.article;
}

export const getSingleUser = async (username) => {
  const res = await newsApi.get(`/users/${username}`);
  return res.data.user;
}

export const getCommentsById = async (article_id) => {
  const res = await newsApi.get(`/articles/${article_id}/comments`);
  return res.data.comments;
}

export const postComment = async (article_id, username, body) => {
  const res = await newsApi.post(`/articles/${article_id}/comments`, {username, body});
  return res.data.comment;
}

export const voteCommentById = async (comment_id, amount = 1) => {
  const res = await newsApi.patch(`/comments/${comment_id}`, { inc_votes: amount });
  console.log(res.data.comment);
  return res.data.comment;
}

export const deleteComment = async (comment_id) => {
  const res = await newsApi.delete(`/comments/${comment_id}`);
  return true;
}