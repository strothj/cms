import { breakpoints, gutters } from '../../shared';
import Wrapper from '../Wrapper';

/* eslint-disable */
const ContentSection = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <main id="content-section" className="content-section" style={styles}>
      <style jsx>{`
        .content-section {
          padding-top: ${gutters(breakpoints.FOR_PHONES_ONLY, 2)};
          min-height: 33vh;
        }

        @media ${breakpoints.FOR_TABLET} {
          .content-section {
            padding-top: ${gutters(breakpoints.FOR_TABLET, 4)};
          }
        }
      `}</style>
      <Wrapper>
        <span>Test</span>
      </Wrapper>
    </main>
  );
};

ContentSection.defaultProps = {
  pageTitle: 'Posts',
  backgroundColor: 'white',
};

export default ContentSection;
