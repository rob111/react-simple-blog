You will be building a simple blog in React!

## Setup

From your challenges directory, run the following:

```no-highlight
$ et get react-simple-blog
$ cd react-simple-blog
$ bundle install
$ bundle exec ruby server.rb
```

Then in another terminal tab run:

```no-highlight
$ npm install
$ npm start
```

Visit <http://localhost:4567> in your browser. You should see a page that simply says `Replace this div with your Router.` There should be no errors in your JavaScript console. You should plan to follow the instructions on the page as you work through this system check.

**Reminder:** Please be sure to do a **hard refresh** in your browser for changes to take effect (**Shift + Click Refresh** or **Command + Shift + R**). We aren't using `webpack-dev-server` the way we do in other assignments.

## Meets Expectations Requirements

The application right now is a work-in-progress. Here's a list of requirements:

### Step 1.

```no-highlight
As a user
I want to see a list of articles
So I know have a sense of what is going on in the world
```

Acceptance Criteria:

* We've created a component `ArticlesIndexContainer` that lists all the articles currently created in our application, but we need to make sure that this component is the first page we see when we navigate to "/". You should accomplish rendering this using React Router. Right now, our `App` does not include a Router or any routes! Add a router (be sure to pass it `browserHistory`!) and a route to have the `ArticlesIndexContainer` appear at our root path. At this point, you should a page with a form and no articles (yet!) in your browser.

* The `ArticlesIndexContainer` needs to **fetch** data from `/api/v1/articles` when the component mounts to the page.

* After the fetch, use the retrieved data to set the state of the container to that data.

* Once implemented, you should see `ArticleTile` components listed, each containing article titles from the retrieved data.

### Step 2.

```no-highlight
As a user
I want to see a specific article
So I can get details about that article
```

Acceptance Criteria:

* Each `ArticleTile` component already contains a Router `<Link />` component that will redirect you to a show page for the article you clicked on, but currently, we don't have a route for that page!

* Add a route to `App` to have the `ArticleShowContainer` display at the appropriate path.

* In the currently empty `componentDidMount`, declare a variable called `articleId` and set it equal to the dynamic id provided to us by Router. Then, make a **fetch** call to `/api/v1/articles/${articleId}` in your ArticleShowContainer to retrieve data pertinent to the given article, and set the state of the container to that data.

* Once implemented, you should see an `ArticleShow` component display on the page with the relevant article data.

* Note that there is a back button on this page which is only needed for EXCEEDS EXPECTATIONS.

### Step 3.

```no-highlight
As a user
I want to type into a form
So I can contribute to an awesome list of articles
```

Acceptance Criteria:

* The `ArticlesIndexContainer` also contains an `ArticleFormContainer` when we visit the root path, but typing into the form does not currently change the state of the form container!

* Define handler functions in `ArticleFormContainer` that will track the user's input into the `TitleField` and `BodyField` components by changing the state of the container.

* Ensure that these handler functions are passed into the TitleField and BodyField components.

* Note that you do **NOT** need to make the clear button work for meets expectations!

### Step 4.

```no-highlight
As a user
I want to submit what I've typed into the form
So I can keep track of the awesome articles I've contributed
```

Acceptance Criteria:

* The `ArticlesIndexContainer` is already set up to pass an `addNewArticle` function down to the `ArticleFormContainer` through props.

* Define the `addNewArticle` function on the `ArticlesIndexContainer` that takes in `formPayload` as an argument.

* This function needs to make a **fetch** request with the path of `/api/v1/articles`, the method of `POST`, and the body with the format of `{title: <User's Submitted Title>, body: <User's Submitted Body>}`.

* The function should also add the newly posted article from the fetch call to the list of articles in the `ArticlesIndexContainer`'s state.

* Then, once the function is passed down, a handler function `handleSubmit` should be defined on the `ArticleFormContainer` that executes the `addNewArticle` function with the state of the form as the supplied `formPayload`.

* Finally, the `handleSubmit` should be passed into an event listener `onSubmit` in the form tag. Make sure that this call to `handleSubmit` does not include parenthesis at the end or you will enter infinite loop doom.


**In order to meet expectations, your application must do the following:**

* Using Router, you should be able to view the `ArticlesIndexContainer` at the root path (`/`), and the `ArticleShowContainer` at the dynamic path `/articles/${props.id}`.

* The index page, or the page at the root path (`/`) that renders `ArticlesIndexContainer`, should display all existing articles.

* When a user fills out the new article form and clicks submit, a POST request should be made to `/api/v1/articles`. A correctly-formatted POST request will result in the article being added to the `articles.json` file.

* The newly-submitted article should appear on the index page.

* When a user navigates to the show page (`ArticleShowContainer`), they should only see information for that article.

These are the only things you have to get working to meet expectations!

**Note:**  While styling is highly encouraged, you may include as much or as little styling as you'd like.

## Exceeds Expectations Requirements

This application works, but it's still untested and does a full page reload when navigating between components. For exceeds expectations:

* Make the Back button on the `ArticleShow` component go to the previous page in `browserHistory`.

* Write tests for the `ArticleTile` and `ArticleShow` presentational components to make sure they are displaying the HTML and text that we expect. These have been started for you.

* Write a function to clear the new article form fields when the Clear button is clicked.

* There also must be validations that check that both the body and the title fields have been filled out by the user. When a user does not fill in all the required fields, errors pertaining to which fields are missing should appear on the page. So trying to update an article with empty info should cause errors to appear on the page and the user should remain on the edit form page.
