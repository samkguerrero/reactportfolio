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
import s from './AboutMe.css';

class AboutMe extends React.Component {

  render() {
    return (
      <div id="aboutme" className={s.root}>
        <h1 className={s.namePlate}>About Me</h1>
        <div className={s.aboutmetext}>
          <p>
          I am a software developer currently seeking new opportunities. 
          My passions are programming and Geographic Information Systems (GIS). 
          I like to learn new technologies and to apply them at work. My degree 
          is in GIS, and I have been studying web development over the past couple 
          years. I like mastering new technologies. It makes me feel powerful, like 
          a wizard who can conjure spells out of text. The human side of me thinks VR 
          applications are cool. In my free time I play around with building VR apps in Unity.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AboutMe);
