// import "bootstrap/dist/css/bootstrap.min.css";
import "./steps.css";
import "./yip.css";

function Yip() {
  return (
    <div className="App">
      <body>
        <nav>
          <img src="/yiplogo.png" />
          <button className="nav_primary">Register Now</button>
        </nav>
        <main>
          <div className="first-section">
            <div className="left-section">
              <p className="main-header">
                <span>Young Innovators Program 2022</span> Sasthrapadham
              </p>
              <p className="pre_tagline">Democratisation of Innovation</p>
              <p className="tagline">
                Aims to develop an innovation culture among school students
                which strengthen the innovation ecosystem, Cater to the
                transition of Kerala to Knowledge SocietyLow participation of
                students from government schools in the last cohorts.Samagra
                Shiksha Kerala envisages a research oriented programme called
                Shastrapadam for secondary and higher secondary students.
                Objectives and aims of YIP align with the Shasthrapadham. Joint
                programme for school students in the name of YIP
              </p>

              <button className="primary">Register Now</button>
            </div>

            <div className="right-section">
              <img
                src={require("./assets/Illustration.png")}
                alt=""
                className="illustration"
              />
            </div>
          </div>

          <div className="second-section">
            <div className="bulb-container">
              <img
                className="paper-bulb"
                src={require("./assets/Paper Bulb.png")}
                alt=""
              />
            </div>

            <div className="image-container">
              <div className="s1s2">
                <div className="s1">
                  <p className="sheader">School Level Activties.</p>
                  <p className="stext">
                    Orientation Programme, Ideator registration, Group
                    formation, Voice of Stakeholder, Idea Registration, Idea
                    day, Idea Evaluation in schools
                  </p>
                </div>
                <div className="s3">
                  <p className="sheader">District Level Activities</p>
                  <p className="stext">
                    Industry 4.0, Business Plan, Intellectual Property, Library
                    Access (How to use library & journals, internet for research
                    purposes),Fab lab activity, Fundamentals on research and
                    research, methodology & Data Analysis
                  </p>
                </div>
              </div>

              <iframe
                className="yt-video"
                src="https://www.youtube.com/embed/cHK16ItlY3w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="s3s4">
                <div className="s2">
                  <p className="sheader">Block Level Activities</p>
                  <p className="stext">
                    Design thinking fundamental orientation sessions, Activities
                    (Eg. Wallet/Nighty), Global Innovators videos. Zero to Hero
                    ,Idea Screening.
                  </p>
                </div>

                <div className="s4">
                  <p className="sheader">Benefits to Teachers and Students</p>
                  <p className="stext">
                    Trainings on various innovation aspects. Opportunities to
                    become a part of innovation ecosystem. Exposure to the
                    experience of innovation Opportunities to get mentorship
                    from research institutions.Attractive prize money for
                    district level and state level winners
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="third-section" id="timeline">
            <p className="tsheading">YIP Idea Registration Procedure</p>
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/prereg.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Pre
                    <br />
                    Registration
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step One</div>
                    <div className="timeline__event__description">
                      <p>
                        <a href="https://yip.kerala.gov.in/yipapp/index.php/Idea2021/?utm_source=mulearn&utm_medium=link&utm_campaign=mulearn_directv1&utm_id=yip21v1&utm_term=new_reg">
                          <span>
                            <b>Click Here </b>{" "}
                          </span>
                        </a>
                        to go to the Pre-Registration page. Enter all your
                        details in the Pre-Registration Form and Complete the
                        OTP Verification. By Now you would have recived an email
                        with login credentials, you can now login with that.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/studentreg.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Ideator <br />
                    Registration
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Two</div>
                    <div className="timeline__event__description">
                      <p>
                        <a href="https://yip.kerala.gov.in/yipapp/index.php/Init/">
                          <span>
                            {" "}
                            <b>Click Here to Login </b>
                          </span>
                        </a>
                        ,After Logging in Click the Open the left navbar option
                        and from the options listed there click the
                        <b> Profile Completion</b> option. Fill in all your
                        details correctly and according to the mentioned
                        specifications. Finally Submit the form and click OK.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/yip-voc.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Voice of <br />
                    Customer
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Three</div>
                    <div className="timeline__event__description">
                      <p>
                        After completing your Profile and submitting it, You can
                        check the left navbar again to find the
                        <b> Voice of Customer(VOC)</b> option. By clicking that
                        you will be directed to the course page where you can
                        complete it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/team.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Team
                    <br />
                    Formation
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Four</div>
                    <div className="timeline__event__description">
                      <p>
                        After completing the VOC Course and attending the quiz
                        there.
                        <b>
                          You can form a team consisting of minimum 2 members
                          and maximum 5 members by clicking the Group Formation
                          Button from the left navbar. Only one person from a
                          group is required to form the group&nbsp;
                        </b>
                        while the other members can join it using the team's
                        name and password.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/ideafind.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Idea <br />
                    Submission
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Five</div>
                    <div className="timeline__event__description">
                      <p>
                        After forming a team and finding an idea which suits the
                        given themes, the <b>person who formed the team</b> can
                        submit the idea by going to the
                        <b> Idea Submission Option</b> from his/her Navbar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/approved.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Institutional <br />
                    Approval
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Six</div>
                    <div className="timeline__event__description">
                      <p>
                        After the submission of the idea, it requires the
                        approval of the repective Institution and you may
                        contact the concerned authority for the approval of your
                        idea.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/evaluation.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Preliminary <br />
                    Evaluation
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Seven</div>
                    <div className="timeline__event__description">
                      <p>
                        Once your Idea is approved by the institution, it is put
                        forward for a preliminary evaluation and
                        <b> 8000 teams</b> are selected from District Level and
                        <b> 2000 teams</b> are selected from State Level and are
                        awarded prizes upto <b> Rs.50000</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                  <div className="timeline__event__icon">
                    <img
                      src={require("./assets/procedure/winner annoucement.png")}
                      alt=""
                      className="lni-cake"
                    />
                  </div>
                  <div className="timeline__event__date">
                    Winner
                    <br />
                    Annoucement
                  </div>
                  <div className="timeline__event__content">
                    <div className="timeline__event__title">Step Eight</div>
                    <div className="timeline__event__description">
                      <p>
                        Finally the winners are annouced and out of the 2000
                        teams selected at state level
                        <b>
                          &nbsp;900 teams are provided financial and mentoring
                          support for the next 3 years.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p className="footer_text">
            Designed & Developed by{" "}
            <a target="_blank" href="https://mulearn.org">
              <span>µLearn</span>
            </a>
          </p>
        </footer>
      </body>
    </div>
  );
}

export default Yip;
