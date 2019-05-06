/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id="Contact" className={s.root}>
        <div className={s.container}>
          <h1>Sam Guerrrero</h1>
          <h2>Cell: (818) 857-7857</h2>
          <h3>Email: samkguerrero@gmail.com</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
