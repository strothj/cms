import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { breakpoints, spacing } from './styles';
import Row from './Row';
import PageTitle from './PageTitle';
import SidebarSection from './SidebarSection';

const ContentSection = (props) => {
  const styles = {
    backgroundColor: props.backgroundColor,
    fontFamily: props.font,
  };

  return (
    <main id="content-section" style={styles}>
      <Row>
        {props.pageTitle &&
          <header>
            <PageTitle title={props.pageTitle} color={props.pageTitleColor} />
          </header>
        }
        <section>
          {props.children}
        </section>
        <aside>
          <SidebarSection />
        </aside>

      </Row>

      <style jsx>{`
        main {
          padding-top: ${spacing.phone * 2}px;
          min-height: 33vh;
        }

        /* Create a vertical gap between content and sidebar on mobile */
        section {
          padding-bottom: ${spacing.phone * 6}px;
        }

        @media ${breakpoints.tablet} {
          main {
            padding-top: ${spacing.tablet * 4}px;
          }

          section {
            float: left;
            width: 58%;
          }

          aside {
            float: right;
            width: 36%;
          }

          section + aside::after {
            clear: both;
          }
        }
      `}</style>
    </main>
  );
};

ContentSection.propTypes = {
  pageTitle: PropTypes.string,
  pageTitleColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = ({
  // state
  theme: {
    contentTitleColor,
    contentBackgroundColor,
    contentFont,
  },
}, {
  // props
  title,
  children,
}) => ({
  pageTitle: title,
  pageTitleColor: contentTitleColor,
  backgroundColor: contentBackgroundColor,
  font: contentFont,
  children,
});

ContentSection.defaultProps = {
  pageTitle: null,
};

export default connect(mapStateToProps)(ContentSection);
