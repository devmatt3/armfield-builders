import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { repoName } from './prismic-configuration';
import { NotFound, Maintenance } from './pages'

import styles from './styles/base/Base.module.scss';

/**
 * Main application componenet
 */
const App = (props) => {
  document.body.classList.add(styles.BodyFreeze);

  return (
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact to="/" component={Maintenance} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
