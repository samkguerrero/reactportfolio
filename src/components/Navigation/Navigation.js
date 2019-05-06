/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as FontAwesome from 'react-icons/lib/fa';
import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';


class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <div className={s.icons}>
          <a className={s.link} href="https://github.com/samkguerrero">
            <FontAwesome.FaGithub className={s.staticon} /></a>
          <a className={s.link} href="https://www.linkedin.com/in/sam-guerrero-2a007498/">
            <FontAwesome.FaLinkedinSquare className={s.staticon} /></a>
          <a className={s.link} href="https://www.dropbox.com/s/ner1xvsrrnhkfmt/SamGuerreroResume.pdf?dl=0">
            <FontAwesome.FaFileTextO className={s.staticon} /></a>
        </div>
        <div className={s.links}>
          <a className={s.link} href="#aboutme">About Me</a>
          <a className={s.link} href="#projects">Projects</a>
          <a className={s.link} href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
