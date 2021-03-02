import React from 'react';
import profilePhoto from './profile.jpg'
import './pillar-1.css';

function App() {
  return (
      <div className="App">
        <article className="resume-wrapper text-center position-relative">
          <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
            <header className="resume-header pt-4 pt-md-0">
              <div className="media flex-column flex-md-row">
                <img className="mr-3 img-fluid picture mx-auto" src={profilePhoto} alt="" />
                <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                  <div className="primary-info">
                    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Manish Srivastava</h1>
                    <div className="title mb-3">Front End Developer</div>
                    <ul className="list-unstyled">
                      <li className="mb-2"><a href="mailto:mani.2209@gmail.com"><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>mani.2209@gmail.com</a></li>
                      <li className="mb-2"><a href="tel:+919665655794"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-3"></i>+91 9665 655 794</a></li>
                      <li><i className="fas fa-map-marker-alt fa-fw mr-2" data-fa-transform="grow-3"></i>Pune, India</li>
                    </ul>
                  </div>

                  <div className="secondary-info ml-md-auto mt-2">
                    <ul className="resume-social list-unstyled">
                      <li className="mb-3"><a href="https://www.linkedin.com/in/mani-2209/"><span className="fa-container text-center mr-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/mani-2209/</a></li>
                      <li className="mb-3"><a href="https://www.github.com/mani2209"><span className="fa-container text-center mr-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/mani2209</a></li>
                    </ul>
                  </div>

                </div>

              </div>

            </header>
            <div className="resume-body p-5">
              <section className="resume-section summary-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                <div className="resume-section-content">
                  <li>Designing and Developing experience of 7 years.</li>
                  <li>Involved in Requirements Mgmt., Designing, Implementations including Rollout and Post production support</li>
                  <li>Proficient in Involved in conceptualization and prototyping required for Product development such as building WordPress Plugin and Themes</li>
                  <li>Ability to relate with people at any levels of business using excellent interpersonal skills</li>
                </div>
              </section>
              <div className="row">
                <div className="col-lg-9">
                  <section className="resume-section experience-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        <article className="resume-timeline-item position-relative pb-5">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Senior Associate</h3>
                              <div className="resume-company-name ml-auto"><i className="fas fa-building"></i> Synechron Technologies Pvt. Ltd</div>
                            </div>
                            <div className="resume-position-time">January 2018 - Present</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Projetcs:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">React with Redux</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Node.js</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">jQuery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Webpack</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">GraphQL</span></li>
                            </ul>
                          </div>
                        </article>
                        <article className="resume-timeline-item position-relative pb-5">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Software Engineer  <small className="text-muted">Contractor</small></h3>
                              <div className="resume-company-name ml-auto"><i className="fas fa-building"></i> Avalara Technologies Pvt. Ltd</div>
                            </div>
                            <div className="resume-position-time">April 2017 to Dec 2017</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Projetcs:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">PHP</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Angular 4</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">WordPress</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Node.js</span></li>
                            </ul>
                          </div>
                        </article>
                        <article className="resume-timeline-item position-relative pb-5">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
                              <div className="resume-company-name ml-auto"><i className="fas fa-building"></i> Wondersoft Multimedia Solutions</div>
                            </div>
                            <div className="resume-position-time">April 2015 – March 2017</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Projetcs:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">PHP</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">JavaScript</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">Angular.js</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/CSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">WordPress</span></li>
                            </ul>
                          </div>
                        </article>
                        <article className="resume-timeline-item position-relative">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Software Developer <small className="text-muted"></small></h3>
                              <div className="resume-company-name ml-auto"><i className="fas fa-building"></i> Stark Digital Media Services Pvt. Ltd</div>
                            </div>
                            <div className="resume-position-time">April 2014 – March 2015</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Projetcs:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>TBD</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">PHP</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">jQuery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/CSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">WordPress</span></li>
                            </ul>
                          </div>
                        </article>
                        <article className="resume-timeline-item position-relative">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Web Application Developer <small className="text-muted"></small></h3>
                              <div className="resume-company-name ml-auto"><i className="fas fa-building"></i> Multivision India Pvt. Ltd</div>
                            </div>
                            <div className="resume-position-time">April 2013 – Feb 2014</div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Roles and Res:</h4>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Projetcs:</h4>
                            <li>Travel agent website.</li>
                            <li>Property agent website.</li>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                            <ul className="list-inline">
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">PHP</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">jQuery</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/CSS</span></li>
                              <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                            </ul>
                          </div>
                        </article>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-lg-3">
                  <section className="resume-section skills-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                    <div className="resume-section-content">
                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <div className="resume-skill-name">Angular</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '30%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">React / Redux</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">JavaScript</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">Node.js</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '40%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '96%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <div className="resume-skill-name">PHP</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '86%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                          <li className="mb-2">
                            <div className="resume-skill-name">WordPress/WooCommerce</div>
                            <div className="progress resume-progress">
                              <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                        <ul className="list-inline">
                          <li className="list-inline-item"><span className="badge badge-light">AWS</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
                          <li className="list-inline-item"><span className="badge badge-light">WooCommerce</span></li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section className="resume-section education-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="resume-degree font-weight-bold">Masters of Computer Application</div>
                          <div className="resume-degree-org">Pune University</div>
                          <div className="resume-degree-time">2009 - 2012</div>
                        </li>
                        <li>
                          <div className="resume-degree font-weight-bold">Bachalors of Computer Application</div>
                          <div className="resume-degree-org">Sikkim Manipal University</div>
                          <div className="resume-degree-time">2006 - 2009</div>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section reference-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled resume-awards-list">
                        <li className="mb-2 pl-4 position-relative">
                          <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                          <div className="resume-award-name">Employee of the month</div>
                          <div className="resume-award-desc">Awarded by employee of the month in Synechron Technologies in March 2019.</div>
                        </li>
                        <li className="mb-0 pl-4 position-relative">
                          <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                          <div className="resume-award-name">Spot Award</div>
                          <div className="resume-award-desc">Recieved Spot Award in Synechron Technologies in Feb 2019.</div>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section language-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled resume-lang-list">
                        <li className="mb-2"><span className="resume-lang-name font-weight-bold">Hindi</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                        <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                      </ul>
                    </div>
                  </section>
                  <section className="resume-section interests-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                    <div className="resume-section-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">Bike Riding</li>
                        <li className="mb-1">Travelling</li>
                        <li className="mb-1">Cooking</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
  );
}

export default App;
