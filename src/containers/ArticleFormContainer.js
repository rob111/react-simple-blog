import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: '',
      errors: {}
    }

    this.handleArticleTitleChange = this.handleArticleTitleChange.bind(this);
    this.handleArticleBodyChange = this.handleArticleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.validateArticleTitle = this.validateArticleTitle.bind(this);
    this.validateArticleBody = this.validateArticleBody.bind(this);
  }

  handleArticleTitleChange(event){
    this.validateArticleTitle(event.target.value);
    this.setState({articleTitle: event.target.value})
  }

  handleArticleBodyChange(event){
    this.validateArticleBody(event.target.value);
    this.setState({articleBody: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.validateArticleTitle(this.state.articleTitle) &&
        this.validateArticleBody(this.state.articleBody)){

      let newArticle = {
        title: this.state.articleTitle,
        body: this.state.articleBody
      }

      this.props.addNewArticle(newArticle);
      this.handleClearForm(event);

    }
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      articleTitle: '',
      articleBody: '',
      errors: {}
    })
  }

  validateArticleBody(input){
    if(input.trim() === ''){
      let newError = {articleBody: 'You must enter an article body.'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false;
    }else{
      let errorState = this.state.errors;
      delete errorState.articleTitle;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validateArticleTitle(input){
    if(input.trim() === ''){
      let newError = {articleTitle: 'You must enter an article title.'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false;
    }else{
      let errorState = this.state.errors;
      delete errorState.articleTitle;
      this.setState({ errors: errorState })
      return true;
    }
  }


  render() {

    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="callout new-article-form" onSubmit={this.handleSubmit}>
        {errorDiv}
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          onChange={this.handleArticleTitleChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          onChange={this.handleArticleBodyChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
