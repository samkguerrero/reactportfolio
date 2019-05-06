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
import s from './Title.css';

class Title extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.background}>
          <div className={s.myFace} />
          <h1 className={s.namePlate}><span>Sam Guerrero</span></h1>
          <p className={s.kicker}>Software Developer</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Title);
