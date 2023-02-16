/* eslint-disable */
import { Fragment } from "react"

import AppFooter from '../components/AppFooter/AppFooter';
import AppHeader from '../components/AppHeader/AppHeader';

const Layout = (props) => {
  return <Fragment>
    <AppHeader />
    <main>{props.children}</main>
    <AppFooter />
  </Fragment>
}

export default Layout;