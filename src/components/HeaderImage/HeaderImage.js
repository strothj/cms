import { PropTypes } from 'react';

const HeaderImage = ({ headerImage, routeName }) => {
  const classes = routeName === 'index' ? ['header-image header-image--fixed'] : ['header-image'];

  return (
    <div className={classes}>
      <style jsx>{`
        .header-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -100;
        }

        .header-image--fixed img {
          position: fixed;
          top: 0;
        }
      `}</style>
      <img src={headerImage} alt="" />
    </div>
  );
};

HeaderImage.propTypes = {
  headerImage: PropTypes.string,
  routeName: PropTypes.string,
};
HeaderImage.defaultProps = {
  headerImage: '',
  routeName: '',
};

export default HeaderImage;
