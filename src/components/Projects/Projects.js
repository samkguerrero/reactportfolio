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
import PropTypes from 'prop-types'
import s from './Projects.css';

class Projects extends React.Component {

  static propTypes = {
    selectedProject: PropTypes.string,
    showCasingProject: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedProject: "None!",
      showCasingProject: "No"
    }
    this.showProject = this.showProject.bind(this)
    this.closeProjectShowCase = this.closeProjectShowCase.bind(this)
  }

  showProject (e) {
    // e.preventDefault()
    console.log("showing a project")
    console.log(e.target.id)
    this.state.selectedProject = e.target.id;
    this.state.showCasingProject = "Yes";
    this.forceUpdate();
  }

  closeProjectShowCase (e) {
    // e.preventDefault()
    console.log("close button clicked")
    this.state.showCasingProject = "No";
    this.forceUpdate();
  }

  componentWillUnmount() {
    // console.log('Surveys component unmounted.');
    return true;
  }

  render() {

    return (
      <div id="projects" className={s.root}>
        
          <div className={this.state.showCasingProject === "Yes" ? s.showcaseProject : s.showCasingProjectHide}>
            {this.state.showCasingProject === "Yes" ?
                <div>
                  <FontAwesome.FaArrowCircleLeft onClick={this.closeProjectShowCase} className={s.backbutton} />
                  {
                    this.state.selectedProject === 'projlovecraft' ?
                    <div>
                      <h2 className={s.projectTitle} id="lovecraft">Interactive Web Mapping with JavaScript</h2>
                      <div className={s.projecttext}>
                        <p>
                        After completing <a className={s.link} href="http://arcg.is/1NP1MPs">The World of Lovecraft Tour</a> web map with <a className={s.link} href="https://www.arcgis.com/features/apps/index.html">ArcGIS Online</a>, I wanted to try to recreate it with open-source libraries. I felt my map was limited to the templates that ArcGIS Online provide. I recreated The World of Lovecraft Tour using the open-source JavaScript libary <a className={s.link} href="http://leafletjs.com/">Leaflet</a>. Here I was able to incorporate simple elements into my map that I felt were not accessible with ArcGIS Online templates. With Leaflet, I could manipulate the code and design the map with greater detail.
                        </p>
                      </div>
                      <a className={s.link} href="https://samkguerrero.github.io/theworldoflovecraft/love.html">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://samkguerrero.github.io/theworldoflovecraft/love.html">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                      <iframe
                        src={'https://samkguerrero.github.io/theworldoflovecraft/love.html'}
                        width="90%" height="750" scrolling="no" frameBorder="0" id="share-demo-ifram"
                      />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                      this.state.selectedProject === 'projflickrleaflet' ?
                      <div>
                        <h2 className={s.projectTitle} id="flickrleaflet">Images by Coordinate with Leaflet and Flickr</h2>
                        <div className={s.projecttext}>
                          <p>
                            This application is what I contributed to as my final project for the University of Washington Professional & Continuing Education course, <a className={s.link} href="https://www.pce.uw.edu/courses/programming-for-the-browser">JSCRIPT 200 B Wi 17: Programming For The Browser</a>. Users can click a point on the map and see filtered imagers related to the coordinates of that clicked location. Using the JavaScript map library <a className={s.link} href="http://leafletjs.com/examples/quick-start/">
                            Leaflet</a> I created a map that returned coordinated upon clicking a location on the map. I then used the <a className={s.link} href="https://www.flickr.com/services/api/">Flickr API</a> to load images from their vast library based on the location that the user clicked. I added filter items from the Flickr API for the user to select in order to return a more specific set of images.
                          </p>
                        </div>
                        <a className={s.link} href="https://github.com/samkguerrero/picturesbylocation">
                          Check out the live example.</a><br />
                        <a className={s.link} href="https://github.com/samkguerrero/picturesbylocation">
                          <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                        <iframe
                          src={'https://samkguerrero.github.io/picturesbylocation/finalproject.html'}
                          width="90%" height="700" scrolling="yes" frameBorder="1" id="share-demo-iframe"
                        />
                      </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projdataviz' ?
                    <div>
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
                      <a className={s.link} href="https://samkguerrero.github.io/data_vis_and_mapping_for_bwc">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://github.com/samkguerrero/data_vis_and_mapping_for_bwc">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                      <iframe
                        src={'https://samkguerrero.github.io/data_vis_and_mapping_for_bwc'}
                        width="90%" height="700" scrolling="yes" frameBorder="1" id="share-demo-iframe"
                      />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projmixology' ?
                    <div>
                      <h2 className={s.projectTitle} id="mixology">Mixologylab.io React App</h2>
                      <div className={s.projecttext}>
                        <p>
                          This application is what I help built as my capstone for the University of Washington Professional & Continuing Education course, <a className={s.link} href="https://www.pce.uw.edu/courses/modern-web-application">JSCRIPT 300 B Sp 17: Modern Web Application</a>. Using the <a className={s.link} href="https://facebook.github.io/react/">Reactjs</a> framework my group developed this application. By clicking through the buttons, users can filter the drink list by their preferences and return a drink list that reflects their taste. This application uses the <a className={s.link} href="https://addb.absolutdrinks.com/docs/">ABSOLUT API</a>. The JSON returned from the API once called was manipulated with features from the new ES6 features.
                          The scafolding of the website was created using the <a className={s.link} href="https://github.com/facebookincubator/create-react-app">create-react-app</a> tool. I hope you give the site a visit at <a className={s.link} href="https://mixologylab.io/">mixology.io</a>
                        </p>
                      </div>
                      <a className={s.link} href="https://github.com/UWJS300/Capstone-Sung-Knopik-Guerrero">
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
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projmyprofile' ?
                    <div>
                      <h2 className={s.projectTitle} id="dash">My Profile</h2>
                      <div className={s.projecttext}>
                        <p>
                          This is my profile.
                        </p>
                      </div>
                      <a className={s.link} href="http://www.samkguerrero.com">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://github.com/samkguerrero/reactportfolio">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projvoiceassistant' ?
                    <div>
                      <h2 className={s.projectTitle} id="dash">Voice Assistant</h2>
                      <div className={s.projecttext}>
                        <p>
                          This is my voiceassistant.
                        </p>
                      </div>
                      <a className={s.link} href="https://www.voiceassistant.xyz/">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://github.com/samkguerrero/VoiceAssistant">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projaddzoom' ?
                    <div>
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
                      <table className={s.addzoomtbl} border="1px">
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
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projcsharpproj' ?
                    <div>
                      <h2 className={s.projectTitle} id="dash">C# .NET Project</h2>
                      <div className={s.projecttext}>
                        <p>
                          My C# project.
                        </p>
                      </div>
                      <a className={s.link} href="http://45.55.1.236:3007">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://github.com/bigwaterconsulting/ost_dashboard_demo.git">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projexplodingninja' ?
                    <div>
                      <h2 className={s.projectTitle} id="dash">Exploding Ninja</h2>
                      <div className={s.projecttext}>
                        <p>
                          Below is an example of the dashboards I built
                        </p>
                      </div>
                      <a className={s.link} href="http://34.217.31.200/">
                        Check out the live example.</a><br />
                      <a className={s.link} href="https://github.com/samkguerrero/exploding_ninjas">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                  {
                    this.state.selectedProject === 'projangularproj' ?
                    <div>
                      <h2 className={s.projectTitle} id="dash">Angular</h2>
                      <div className={s.projecttext}>
                        <p>
                          My Angular project.
                        </p>
                      </div>
                      <a className={s.link} href="#projects">
                        Check out the live example.</a><br />
                      <a className={s.link} href="#projects">
                        <FontAwesome.FaGithub className={s.staticon} />See the Code.</a><br /><br />
                    </div>
                    :
                    <div className={s.emptyDiv}></div>
                  }
                </div>
                :
                <div className={s.emptyDiv}></div>
            }
          </div>

          <h1 className={s.namePlate}>Projects</h1>
          <table className={this.state.showCasingProject === "Yes" ? s.projgridHide : s.projgrid}>
            <thead>
              <tr>
                <th>
                  <div className={s.iconrow}>
                    <img className={s.iconrowimg} src="/images/JavaScript.png"/>          
                    <img className={s.iconrowimg} src="/images/HTML.png"/>          
                    <img className={s.iconrowimg} src="/images/CSS.png"/>          
                    <img className={s.iconrowimg} src="/images/jQuery.png"/>          
                    <img className={s.iconrowimg} src="/images/ajax.png"/>          
                    <img className={s.iconrowimg} src="/images/bootstrap.png"/> 
                  </div>
                </th>
                <th>
                  <div className={s.iconrow}>
                    <img className={s.iconrowimg} src="/images/react.png"/>          
                    <img className={s.iconrowimg} src="/images/expressjs.png"/>          
                    <img className={s.iconrowimg} src="/images/nodejs.png"/>          
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <div className={s.projrow}>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/lovecraft.jpg" alt="Smiley face" className={s.image} />
                          <a id="projlovecraft" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projlovecraft" onClick={this.showProject} className={s.text}>The World of Lovecraft Webmap</div>
                          </a>
                        </div>
                      </div>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/leafletflickr.png" alt="Smiley face" className={s.image} />
                          <a id="projflickrleaflet" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projflickrleaflet" onClick={this.showProject} className={s.text}>Flickr API <br />+<br /> Leaflet Webmapping</div>
                          </a>
                        </div>
                      </div>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/dataviz.png" alt="Smiley face" className={s.image} />
                          <a id="projdataviz" onClick={this.showProject}  className={s.overlay} href="#projects">
                            <div id="projdataviz" onClick={this.showProject} className={s.text}>Data Visualization and Tracking</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={s.projrow}>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/mixology.png" alt="Smiley face" className={s.image} />
                          <a id="projmixology" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projmixology" onClick={this.showProject} className={s.text}>Mixologylab.io</div>
                          </a>
                        </div>
                      </div>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/myprofile.png" alt="Smiley face" className={s.image} />
                          <a id="projmyprofile" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projmyprofile" onClick={this.showProject} className={s.text}>My Profile</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={s.iconrow}>
                      <img className={s.iconrowimg} src="/images/python.png"/>          
                      <img className={s.iconrowimg} src="/images/django.png"/>          
                      <img className={s.iconrowimg} src="/images/sqlite.png"/>          
                    </div>
                  </td>
                  <td>
                    <div className={s.iconrow}>
                      <img className={s.iconrowimg} src="/images/csharp.jpg"/>          
                      <img className={s.iconrowimg} src="/images/c-sharp.png"/>          
                      <img className={s.iconrowimg} src="/images/mysql.png"/>          
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={s.projrow}>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/voiceassistant.png" alt="Smiley face" className={s.image} />
                          <a id="projvoiceassistant" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projvoiceassistant" onClick={this.showProject} className={s.text}>Voice Assistant</div>
                          </a>
                        </div>
                      </div>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/addzoom.jpg" alt="Smiley face" className={s.image} />
                          <a id="projaddzoom" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projaddzoom" onClick={this.showProject} className={s.text}>QGIS Addandzoom Plugin</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={s.projrow}>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/ride.jpg" alt="Smiley face" className={s.image} />
                          <a id="projcsharpproj" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projcsharpproj" onClick={this.showProject} className={s.text}>C# PROJECT</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={s.iconrow}>
                      <img className={s.iconrowimg} src="/images/MEAN.png"/>          
                      <img className={s.iconrowimg} src="/images/mongodb.png"/>          
                      <img className={s.iconrowimg} src="/images/expressjs.png"/>          
                      <img className={s.iconrowimg} src="/images/angular.png"/>          
                      <img className={s.iconrowimg} src="/images/nodejs.png"/>          
                      <img className={s.iconrowimg} src="/images/materialize.png"/>          
                      <img className={s.iconrowimg} src="/images/socket.png"/>          
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={s.projrow}>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/explodingninja.png" alt="Smiley face" className={s.image} />
                          <a id="projexplodingninja" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projexplodingninja" onClick={this.showProject} className={s.text}>Exploding Ninja Using Socket.io</div>
                          </a>
                        </div>
                      </div>
                      <div className={s.tabi}>
                        <div className={s.container}>
                          <img src="/images/ride.jpg" alt="Smiley face" className={s.image} />
                          <a id="projangularproj" onClick={this.showProject} className={s.overlay} href="#projects">
                            <div id="projangularproj" onClick={this.showProject} className={s.text}>MEAN Project</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
            </tbody> 
          </table>
      </div>
    );
  }
}

export default withStyles(s)(Projects);