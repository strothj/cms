import { breakpoints, spacing } from './styles';
import Row from './Row';
import PageTitle from './PageTitle';

/* eslint-disable react/prop-types */
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
          <span>Placeholder</span>
        </aside>

      </Row>

      <style jsx>{`
        main {
          padding-top: ${spacing.phone * 2}px;
          min-height: 33vh;
        }

        @media ${breakpoints.tablet} {
          main {
            padding-top: ${spacing.tablet * 4}px;
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
