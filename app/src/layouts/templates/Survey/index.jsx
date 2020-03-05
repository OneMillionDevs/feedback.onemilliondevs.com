import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react';
import '@assets/css/Article.css';

import {FormFeedbackAdvanced, FormEthDenver} from '@forms';
import {Video} from '@horizin/molecules';

const FormOptions = {
  FormFeedbackAdvanced: <FormFeedbackAdvanced />,
  FormEthDenver: <FormEthDenver />,
};

const ComponentList = {};

/* --- Local --- */
export default function PageTemplate(props) {
  return (
    <>
      <Atom.Flex sx={{flexDirection: ['column', 'column', 'row']}}>
        <Atom.Box
          sx={{
            p: 5,
            textAlign: ['center', 'center', 'left'],
            width: ['100%', '100%', '50%'],
          }}>
          <Atom.Heading heavy sx={{fontSize: [3, 3, 5]}}>
            {props.pageContext.title}
          </Atom.Heading>
          {props.pageContext.subtitle && (
            <Atom.Heading thin sx={{fontSize: [2, 2, 3]}}>
              {props.pageContext.subtitle}
            </Atom.Heading>
          )}
          {FormOptions[props.pageContext.formName]}
        </Atom.Box>
        <Atom.Box
          sx={{
            boxShadow: 1,
            width: ['100%', '100%', '50%'],
          }}>
          <Atom.Flex between column>
            {props.pageContext.title && (
              <Atom.Box
                gradient="frost"
                sx={{
                  color: 'white',
                  py: 6,
                  px: 4,
                  textAlign: 'center',
                }}>
                {props.pageContext.imageCover && (
                  <Atom.BackgroundImage
                    ratio={0.3}
                    opacity={1}
                    src={props.pageContext.imageCover}
                  />
                )}
              </Atom.Box>
            )}
            <Atom.Box
              sx={{
                flex: 1,
                px: 4,
                py: 3,
              }}>
              <MDXProvider components={ComponentList}>
                <MDXRenderer>{props.pageContext.body}</MDXRenderer>
              </MDXProvider>
            </Atom.Box>
          </Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </>
  );
}
