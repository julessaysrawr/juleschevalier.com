import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LayoutMain from '../components/layout-main'
import theme from '../lib/theme'
import paper from '../images/lightpaperfibers_@2x.png'
import Link from '../components/link'
import PageContent from '../components/page-content'
import { bpPhone, bpTabletSM, bpTabletLG } from '../lib/breakpoints'
import GetInTouch from '../components/get-in-touch'

const TopicssPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) => {
  return (
    <LayoutMain>
      <main>
        <div
          css={css`
            background: linear-gradient(0deg, rgba(148, 112, 62, 0.05), rgba(148, 112, 62, 0.05)),
              url(${paper});
            background-repeat: repeat;
            padding-top: ${theme.space[8]}px;
            border-bottom: 2px solid rgba(136, 128, 113, 0.25);
            margin-bottom: calc(${theme.space[2]}px*13);

            ${bpTabletLG} {
              padding-top: 20%;
            }

            ${bpTabletSM} {
              padding-top: 25%;
            }

            ${bpPhone} {
              padding-top: 30%;
              background-size: 100%; // this fixes the background image being pixelated on mobile
            }
          `}
        >
          <h1
            css={css`
              margin: 0 auto 80px;
              text-align: center;
            `}
          >
            Article Topics
          </h1>
          <PageContent>
            <div
              css={css`
                margin: 42px auto 80px;
                text-align: center;
                max-width: 600px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                a {
                  margin-right: 12px;
                  margin-top: 12px;
                  font-size: 16px;
                }
              `}
            >
              {group.map(topic => (
                <Link
                  key={topic.fieldValue}
                  hrefLocal={`/topics/${kebabCase(topic.fieldValue)}/`}
                  type="buttonVariableWidth"
                >
                  {topic.fieldValue} ({topic.totalCount})
                </Link>
              ))}
            </div>
          </PageContent>
        </div>
        <GetInTouch />
      </main>
    </LayoutMain>
  )
}

export default TopicssPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000, sort: { fields: frontmatter___topic, order: ASC }) {
      group(field: frontmatter___topic) {
        fieldValue
        totalCount
      }
    }
  }
`
