import { Router, Route, Set, Private } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'
import ArticlePage from './pages/ArticlePage/ArticlePage'

const Routes = () => (
  <Router>
    <Route path="/login" page={LoginPage} name="login" />
    <Route path="/signup" page={SignupPage} name="signup" />
    <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
    <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
    <Private unauthenticated="home">
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
    </Private>
    <Set wrap={BlogLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
    </Set>
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
