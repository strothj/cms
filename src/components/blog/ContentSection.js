import { breakpoints, gutters } from '../shared';
import Wrapper from './Wrapper';
import PageTitle from './PageTitle';

/* eslint-disable react/prop-types */
const ContentSection = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
    fontFamily: props.font,
  };

  return (
    <main id="content-section" className="content-section" style={styles}>
      <Wrapper>
        {props.pageTitle &&
          <PageTitle title={props.pageTitle} color={props.pageTitleColor} />
        }
        <div className="primary-content">
          {props.children}
        </div>
        <div className="secondary-content">
          <span>Placeholder</span>
        </div>

      </Wrapper>

      <style jsx>{`
        .content-section {
          padding-top: ${gutters.FOR_PHONE * 2}px;
          min-height: 33vh;
        }

        @media ${breakpoints.FOR_TABLET} {
          .content-section {
            padding-top: ${gutters.FOR_TABLET_OR_DESKTOP * 4}px;
          }
        }
      `}</style>
    </main>
  );
};

ContentSection.defaultProps = {
  pageTitle: 'Posts',
  pageTitleColor: 'black',
  backgroundColor: 'white',
  font: 'Roboto',
};


export default ContentSection;
