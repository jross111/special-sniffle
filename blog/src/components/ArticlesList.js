import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map(article => (
        <Link className="article-list-item" to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 175) + "..."}</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;