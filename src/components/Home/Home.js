/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Title from '../../components/Title';
import AboutMe from '../../components/AboutMe';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <Title />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default withStyles(s)(Home);
