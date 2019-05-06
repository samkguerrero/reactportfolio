/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import * as FontAwesome from 'react-icons/lib/fa';
import * as FontAwesome from 'react-icons/lib/fa';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

class Contact extends React.Component {

  render() {
    return (
      <div id="contact" className={s.root}>
        <h1 className={s.namePlate}>Contact</h1>
        <br/>
        <div className={s.faceblock}>
          <img className={s.cartoon} src="/images/myface.png" alt="mymug" height="200" width="200" />          
        </div>

        <div className={s.infoblock}>
          <div className={s.container}>
            <h2>Sam Guerrrero</h2>
            <h3>(818) 857-7857</h3>
            <h3 className={s.contactemail}>samkguerrero@gmail.com</h3>
            <div className={s.icons}>
              <a className={s.link} href="https://github.com/samkguerrero">
                <FontAwesome.FaGithub className={s.staticon1} />/samkguerrero</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(Contact);
