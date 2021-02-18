// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/jokes/new" page={NewJokePage} name="newJoke" />
      <Route path="/jokes/{id:Int}/edit" page={EditJokePage} name="editJoke" />
      <Route path="/jokes/{id:Int}" page={JokePage} name="joke" />
      <Route path="/jokes" page={JokesPage} name="jokes" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
