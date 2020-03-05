import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import '@assets/css/Article.css';

/* --- Local --- */
export default function PageTemplate(props) {
  console.log(props, 'Aritcle Props');
  return (
    <>
      <Atom.Flex between column flex={1} minHeight="100vh">
        {props.pageContext.title && (
          <Atom.Box
            gradient="green"
            sx={{
              color: 'white',
              py: 6,
              textAlign: 'center',
            }}>
            <Atom.BackgroundImage
              ratio={0.5}
              opacity={0.3}
              src={props.pageContext.imageCover}
            />
            <Atom.Heading giga heavy>
              {props.pageContext.title}
            </Atom.Heading>
            {props.pageContext.subtitle && (
              <Atom.Heading xl thin>
                {props.pageContext.subtitle}
              </Atom.Heading>
            )}
          </Atom.Box>
        )}
        <Atom.Box
          as="main"
          sx={{
            flex: 1,
            py: 5,
          }}>
          <Atom.Container
            sx={{
              maxWidth: ['100%', '100%', 760, 720],
            }}>
            <MDXRenderer>{props.pageContext.body}</MDXRenderer>
          </Atom.Container>
        </Atom.Box>
      </Atom.Flex>
    </>
  );
}
