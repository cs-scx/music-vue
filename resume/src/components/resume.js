import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../images/avatar.png")}
                alt="avatar_Img"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Your Name Here</h2>
            <h4 style={{ color: "grey" }}>Programmer(Your Profession)</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an engineer,
              industrial designer, technology entrepreneur and philanthropist.
              He is the founder, CEO, CTO and chief designer of SpaceX;early
              investor,CEO and product architect of Tesla, Inc.; founder of The
              Boring Company;co-founder of Neuralink; and co-founder and initial
              co-chairman of OpenAI.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Your Address</p>
            <h5>Phone</h5>
            <p>(+86)4566-78901</p>
            <h5>Email</h5>
            <p>something@example.com</p>
            <h5>WebSite</h5>
            <p>myWebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Your University"
              schoolDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Your University"
              schoolDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Your University"
              schoolDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2022}
              jobName="Your Experience"
              jobDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />
            <Experience
              startYear={2018}
              endYear={2022}
              jobName="Your Experience"
              jobDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />
            <Experience
              startYear={2018}
              endYear={2022}
              jobName="Your Experience"
              jobDescription="I'm a paragraph. Click here to add your own text and edit me.It’s
                            easy. Just click “Edit Text” or double click me to add your own
                            content and"
            />

            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={90} />
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="Nodejs" progress={75} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
