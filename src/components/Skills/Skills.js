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
import s from './Skills.css';

class Skills extends React.Component {

  render() {
    return (
      <div id="skills" className={s.root}>
        <br/>
        <h1 className={s.namePlate}>Skills</h1>
        <br/>

        


      </div>
    );
  }
}

export default withStyles(s)(Skills);
