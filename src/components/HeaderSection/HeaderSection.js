import { PropTypes } from 'react';
import HeaderImage from '../HeaderImage';

const HeaderSection = (props) => {
  const classes = props.routeName === 'index' ? ['header-section header-section--size-full-screen'] : ['header-section'];

  return (
    <header className={classes}>
      <style jsx>{`
        .header-section {
        }

        .header-section--size-full-screen {
          height: 100vh;
        }
      `}</style>
      <HeaderImage />
    </header>
  );
};

HeaderSection.propTypes = { routeName: PropTypes.string };
HeaderSection.defaultProps = { routeName: '' };

export default HeaderSection;
