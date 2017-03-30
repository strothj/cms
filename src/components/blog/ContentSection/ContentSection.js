import { breakpoints, gutters } from '../../shared';
import Wrapper from '../Wrapper';

/* eslint-disable */
const ContentSection = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
    fontFamily: props.font,
  };

  return (
    <main id="content-section" className="content-section" style={styles}>
      <style jsx>{`
        .content-section {
          padding-top: ${gutters.FOR_PHONE * 2}px;
          min-height: 33vh;
        }

        .page-header {
          padding-bottom: ${gutters.FOR_PHONE * 2}px;
        }

        @media ${breakpoints.FOR_TABLET} {
          .content-section {
            padding-top: ${gutters.FOR_TABLET_OR_DESKTOP * 4}px;
          }

          .page-header {
            padding-bottom: ${gutters.FOR_TABLET_OR_DESKTOP * 2}px;
          }
        }
      `}</style>
      <Wrapper>
        {props.pageTitle &&
        <div className="page-header">
          <h1>{props.pageTitle}</h1>
        </div>
        }
      </Wrapper>
    </main>
  );
};

ContentSection.defaultProps = {
  pageTitle: 'Posts',
  backgroundColor: 'white',
  font: 'Roboto',
};

export default ContentSection;
