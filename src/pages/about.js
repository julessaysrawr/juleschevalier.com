import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import '../styles/main.scss'
import Emoji from '../components/emoji'
import LayoutMain from '../components/layout-main'

const About = props => (
  <LayoutMain title={'About | Jules Chevalier'} description={'About Jules Chevalier'}>
    <main>
      <div className="flex-container space-below-m">
        <div className="flex-column">
          <div className="profile-container">
            <Img
              className="profile"
              fluid={props.data.imageOne.childImageSharp.fluid}
              alt="jules smiling and looking off to the side standing in front of green bush"
            />
          </div>
          <div className="">
            <h3 className="">About Jules</h3>
            <p>
              I am a lifelong learner with a growth mindset. I’ve been told I’m passionate, curious,
              strategic, and driven. My super power is I am growth catalyst. I want to help others
              do more of what fuels them.
            </p>
            <p>
              I currently work as a software engineer, and I've had a previous career in medicine.
            </p>
            <p>
              I have{' '}
              <a href="https://bobsutton.typepad.com/my_weblog/2006/07/strong_opinions.html">
                strong opinions that are weakly held
              </a>
              . I will debate the best path forward, and if you convince me I will drop the previous
              approach in an instant.
            </p>
            <p>I am driven by logic, though I value the wisdom in intuition.</p>
            <p>I am observant and hyper self-aware.</p>
            <p>I am highly empathetic, and try to see situations from the other perspectives.</p>
            <p>I am a defender and don't like to hear you talk down about yourself.</p>
            <p>I am always looking for ways to be more inclusive and be aware of my privileges.</p>
            <p>I think deeply about problems, and often frameworks of problem solving.</p>
            <p>I am outspoken and can raise the engagement of a room.</p>
            <p>
              I am happier in small groups where I already know people. I am comfortable to
              introduce myself in small settings.
            </p>
            <p>I aim to live intentionally, according to my personal values. </p>
            <div className="values">
              <h3 className="center">Values</h3>
              <div className="values-list">
                <p>Growth</p>
                <p>Experiences</p>
                <p>Wellness</p>
                <p>Creative Expression</p>
                <p>Simplicity</p>
              </div>
            </div>
            <div>
              <h3>Personal Philosophy</h3>
              <p>
                I believe that the life you want begins with a vision before you can allign your
                actions.
              </p>
              <p>I believe in progress over perfection.</p>
              <p>
                I believe in solving the pain of the problems you have today, and not giving any
                energy to the challenges you might have ‘some day’.
              </p>
              <p>I believe in turning obstacles into opportunities.</p>
              <p>
                I practice gratitude and try to find the positive, especially when things are hard.
              </p>
              <p>
                I try to focus my efforts on the very limited things that are within my control.
              </p>
              <p>I reject the idea of busy, and deprioritize until things feel more sustainable.</p>
              <p>
                I believe in the practice of removing everything, and choosing only what you want to
                keep. I aspire to non-attachment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container space-above space-below-m">
        <p>
          To find out what I'm currently up to, you can check out my{' '}
          <Link to="/now" className="show-link">
            now page
          </Link>
          .
        </p>
      </div>
      <div className="non-flex-container space-above space-below-m">
        <h4>Want to get in touch?</h4>
        <a href="mailto:hellothere@juleschevalier.com">hellothere@juleschevalier.com</a>
      </div>
    </main>
  </LayoutMain>
)

export default About

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "jules2019.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
