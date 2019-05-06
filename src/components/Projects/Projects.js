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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.css';

class Projects extends React.Component {

  render() {
    return (
      <div id="projects" className={s.root}>
        <h1 className={s.namePlate}>Projects</h1>
        <Tabs>
          <TabList>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/lovecraft.jpg" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#lovecraft">
                  <div className={s.text}>The World of Lovecraft</div>
                </a>
              </div>
            </Tab>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/leafletflickr.png" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#flickrleaflet">
                  <div className={s.text}>Flickr <br />+<br /> Leaflet</div>
                </a>
              </div>
            </Tab>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/mixology.png" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#mixology">
                  <div className={s.text}>Mixologylab.io</div>
                </a>
              </div>
            </Tab>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/dash.png" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#dash">
                  <div className={s.text}>Field Operation Dashboard</div>
                </a>
              </div>
            </Tab>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/addzoom.jpg" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#addzoom">
                  <div className={s.text}>QGIS ADDANDZOOM</div>
                </a>
              </div>
            </Tab>
            <Tab className={s.tabi}>
              <div className={s.container}>
                <img src="/images/dataviz.png" alt="Smiley face" className={s.image} />
                <a className={s.overlay} href="#dataviz">
                  <div className={s.text}>Data Visualization and Tracking</div>
                </a>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className={s.projectTitle} id="lovecraft">Interactive Web Mapping with JavaScript</h2>
            <div className={s.projecttext}>
              <p>
              After completing <a className={s.link} href="http://arcg.is/1NP1MPs">The World of Lovecraft Tour</a> web map with <a className={s.link} href="https://www.arcgis.com/features/apps/index.html">ArcGIS Online</a>, I wanted to try to recreate it with open-source libraries. I felt my map was limited to the templates that ArcGIS Online provide. I recreated The World of Lovecraft Tour using the open-source JavaScript libary <a className={s.link} href="http://leafletjs.com/">Leaflet</a>. Here I was able to incorporate simple elements into my map that I felt were not accessible with ArcGIS Online templates. With Leaflet, I could manipulate the code and design the map with greater detail.
              </p>
            </div>
            <a className={s.link} href="http://45.55.1.236/theworldoflovecraft/love.html">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/samkguerrero/theworldoflovecraft">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <iframe
              src={'http://45.55.1.236/theworldoflovecraft/love.html'}
              width="90%" height="750" scrolling="no" frameBorder="0" id="share-demo-ifram"
            />
          </TabPanel>
          <TabPanel>
            <h2 className={s.projectTitle} id="flickrleaflet">Images by Coordinate with Leaflet and Flickr</h2>
            <div className={s.projecttext}>
              <p>
                This application is what I contributed to as my final project for the University of Washington Professional & Continuing Education course, <a className={s.link} href="https://www.pce.uw.edu/courses/programming-for-the-browser">JSCRIPT 200 B Wi 17: Programming For The Browser</a>. Users can click a point on the map and see filtered imagers related to the coordinates of that clicked location. Using the JavaScript map library <a className={s.link} href="http://leafletjs.com/examples/quick-start/">
                Leaflet</a> I created a map that returned coordinated upon clicking a location on the map. I then used the <a className={s.link} href="https://www.flickr.com/services/api/">Flickr API</a> to load images from their vast library based on the location that the user clicked. I added filter items from the Flickr API for the user to select in order to return a more specific set of images.
              </p>
            </div>
            <a className={s.link} href="http://45.55.1.236:9010/finalproject">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/samkguerrero/UW_JSCRIPT200B_Wi_2017_FinalProject">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <iframe
              src={'http://45.55.1.236:9010/finalproject'}
              width="80%" height="800" scrolling="yes" frameBorder="1" id="share-demo-iframe"
            />
          </TabPanel>
          <TabPanel>
            <h2 className={s.projectTitle} id="mixology">Mixologylab.io React App</h2>
            <div className={s.projecttext}>
              <p>
                This application is what I help built as my capstone for the University of Washington Professional & Continuing Education course, <a className={s.link} href="https://www.pce.uw.edu/courses/modern-web-application">JSCRIPT 300 B Sp 17: Modern Web Application</a>. Using the <a className={s.link} href="https://facebook.github.io/react/">Reactjs</a> framework my group developed this application. By clicking through the buttons, users can filter the drink list by their preferences and return a drink list that reflects their taste. This application uses the <a className={s.link} href="https://addb.absolutdrinks.com/docs/">ABSOLUT API</a>. The JSON returned from the API once called was manipulated with features from the new ES6 features.
                The scafolding of the website was created using the <a className={s.link} href="https://github.com/facebookincubator/create-react-app">create-react-app</a> tool. I hope you give the site a visit at <a className={s.link} href="https://mixologylab.io/">mixology.io</a>
              </p>
            </div>
            <a className={s.link} href="https://mixologylab.io/">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/samkguerrero/Capstone-Sung-Knopik-Guerrero">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <table className={s.imgTableWhole}>
              <tr>
                <th className={s.drinkTable}>Select Gin, Vodka, Tequila, Brandy,
                  Whisky, or Rum from the wheel as your base alcohol. </th>
                <th className={s.drinkTable}>Select a taste combination for your desired drink.</th>
              </tr>
              <tr>
                <td className={s.drinlTd}><img className={s.imgTable} src="/images/one.PNG" alt="Smiley face" /></td>
                <td className={s.drinlTd}><img className={s.imgTable} src="/images/two.PNG" alt="Smiley face" /></td>
              </tr>
              <tr>
                <th className={s.drinkTable}>Sort by name or rating and choose a
                  drink you want to make.</th>
                <th className={s.drinkTable}>View the drink ingredients and watch
                  the video on how to prepare the drink.</th>
              </tr>
              <tr>
                <td className={s.drinlTd}><img className={s.imgTable} src="/images/three.PNG" alt="Smiley face" /></td>
                <td className={s.drinlTd}><img className={s.imgTable} src="/images/four.PNG" alt="Smiley face" /></td>
              </tr>
            </table>
          </TabPanel>
          <TabPanel>
            <h2 className={s.projectTitle} id="dash">Field Operation React Dashboard</h2>
            <div className={s.projecttext}>
              <p>
                Below is an example of the dashboards I build <a className={s.link} href="http://bigwaterconsulting.net/">Big Water Consulting</a> to track the progress of field operations. The application we use is <a className={s.link} href="http://www.fulcrumapp.com/">Fulcrum</a>, we install it on tablets and the field staff fill out surveys that range from a housing unit assessment to household surveys. The dashboard tracks the metrics of individual field staff or gauges the status of the field operation overall. The dashboard makes API calls to the fulcrum database then sorts the information and displays it. The website is built using the <a className={s.link} href="https://facebook.github.io/react/">Reactjs</a> framework and retrieves data using the <a className={s.link} href="http://developer.fulcrumapp.com/api/intro/">Fulcrum API</a>.
              </p>
            </div>
            <a className={s.link} href="http://45.55.1.236:3007">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/bigwaterconsulting/ost_dashboard_demo.git">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <iframe
              src={'http://bigwaterportal.xyz:3007/'}
              width="80%" height="800" scrolling="yes" frameBorder="1" id="share-demo-iframe"
            />
          </TabPanel>
          <TabPanel>
            <h2 className={s.projectTitle} id="addzoom">Building Plugins with Python Scripting</h2>
            <div className={s.projecttext}>
              <p>
                In a previous job I was tasked with investigating the roads around specific points
                at a detailed scale. The workflow consisted of importing <a className={s.link} href="ftp://ftp2.census.gov/geo/tiger/TIGER2015/">
                Tiger 2015</a> road shapefiles into QGIS. Followed by zooming to the specified
                coordinates to inquire about the nearby roads. Loading one at a time was not
                practical, given that there were multiple coordinates to be searched.
                I built this plugin using templates online to help streamline the process.
              </p>
            </div>
            <a className={s.link} href="https://www.youtube.com/watch?v=YeyQzjSMYS4">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/samkguerrero/addandzoom">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <table border="1px">
              <thead>
                <tr>
                  <th>Previous Workflow</th>
                  <th>Workflow with the addandzoom Plugin</th>
                </tr>
              </thead>
              <tr>
                <td className={s.workflow}>
                  <ul className={s.addzoomUL}>
                    <li>Load in ESRI Street basemap tiles with python for spatial reference</li>
                    <li>Load in county polygons shapefile (<a href="https://www.dropbox.com/sh/ggo05ybm28huq19/AACGvyyLSJPlE8I-eWFTrk_2a?dl=0">TIGER2015_county_index</a>)</li>
                    <li>Symbolize with predefined template</li>
                    <li>Flip coordinate pair from Lat/Long to Long/Lat, and paste in
                      the coordinates to zoom to the desired location</li>
                    <li>Use the identify tool on the county index polygon layer to find the code
                      of the county which the point is located in</li>
                    <li>Search for the code among the names in the tiger roads directory</li>
                    <li>Add in the coresponding <a href="https://www.dropbox.com/sh/cgw2103jluj3obq/AAAr13-7WiDRdzm2jIRzkEDXa?dl=0">Tiger Roads</a> shapefile that coresponds to the county that the point is in</li>
                    <li> Label and style roads with predefined template for easier readability</li>
                  </ul>
                  <p className={s.nonlistworkflow}><br />
                    This process is not feasible given that the
                    points can fall in random counties that span
                    across the United States. Having all the roads
                    already imported world slow down the map. More so,
                    I might not even use half of the imported roads.</p>
                </td>
                <td className={s.workflow}>
                  <ul className={s.addzoomUL}>
                    <li>Start Python Console, Ctrl + Alt + P</li>
                    <li>Click addandzoom plugin button</li>
                    <li>Paste in coordinates, click OK</li>
                  </ul>
                  <p className={s.nonlistworkflowtitle}><br />How it works ?</p>
                  <ol>
                    <li>Adds county index layer to QGIS and symbolizes</li>
                    <li>Creates a point from the coordinates that were given to it</li>
                    <li>Selects by location, to find which county contains the created point</li>
                    <li>Takes the county code from the attributes of the selected county</li>
                    <li>Adds in the appropriate Tiger road shapefile using the
                      identified county code from the previous step</li>
                    <li>It names the layer in the table of contents, labels the
                      Tiger roads by road name, and symbolizses the roads.</li>
                    <li>Lastly it adds a basemap for spatial reference</li>
                  </ol>
                  <p className={s.nonlistworkflow}>
                    The plugin streamlines several steps, it adds in the data
                    and zooms to the location with the push of a button. When
                    the tool is given a new pair of coordinates, it removes the
                    tiger roads from the previous use to reduce clutter. It also
                    takes the coordinate data in its natural order Lat/Long, rather
                    than having to flip the order so that QGIS can zoom to it.
                    This tool allowed me a more effecient workflow.</p>
                </td>
              </tr>
              <tr>
                <td><iframe className={s.example} src="https://www.youtube.com/embed/cJJdalTgbvI" frameBorder="0" allowFullScreen /></td>
                <td><iframe className={s.example} src="https://www.youtube.com/embed/YeyQzjSMYS4" frameBorder="0" allowFullScreen /></td>
              </tr>
            </table>
          </TabPanel>
          <TabPanel>
            <h2 className={s.projectTitle} id="dataviz">Data Visualization and Tracking</h2>
            <div className={s.projecttext}>
              <p>
                Below are some of the ways I visualize data that is collected.
                The survey managers often ask about the progress of the field
                operation on a district by district basis. I aggregate the
                data by district, and answer is how many of each case status
                each district has collected. Survey Managers ask
                how many of each case status field staff have resolved.
                This important to visualize because it shows at a
                glance who has the most completes, or who has the most incomplete.
                Using <a className={s.link} href="http://www.chartjs.org/docs/latest/">Chart.js
                </a> I am able to make graphs and charts dynamically
                that show the trends in the data more efficiently.
              </p>
            </div>
            <a className={s.link} href="http://45.55.1.236/data_viz_demo/">
              Check out the live example.</a><br />
            <a className={s.link} href="https://github.com/samkguerrero/data_viz_demo">
              <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
            <iframe
              src={'http://45.55.1.236/data_viz_demo/'}
              width="90%" height="900" scrolling="yes" frameBorder="1" id="share-demo-iframe"
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
