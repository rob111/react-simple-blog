import React from 'react';
import { browserHistory, Link } from 'react-router';

import BackButton from './BackButton';

const ArticleShow = (props) => {
  return(
    <div className="article-show">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <div className="button">
        <BackButton />
      </div>
    </div>
  )
}

export default ArticleShow;
