import { PropTypes } from 'react';
import { connect } from 'react-redux';

import { animateScroll } from 'react-scroll';
import { breakpoints, spacing } from './styles';

const scrollToContent = (e) => {
  e.preventDefault();
  animateScroll.scrollTo(window.innerHeight);
};

const ScrollArrow = props => (
  <nav>
    <div>
      <a href="#content-section" onClick={scrollToContent}>
        <figure className="scroll-arrow">
          <SVG color={props.color} />
          {/* eslint-disable react/no-danger, no-use-before-define */}
          <style dangerouslySetInnerHTML={{ __html: animationCss }} />
          {/* eslint-enable */}
        </figure>
      </a>
    </div>

    <style jsx>{`
      nav {
        visibility: hidden;
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      @media ${breakpoints.tablet} {
        nav { visibility: visible; }
      }

      div {
        position: relative;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      figure {
        position: absolute;
        bottom: ${spacing.tablet}px;
        right: ${spacing.tablet}px;
        width: 84px;
      }
    `}</style>
  </nav>
);

ScrollArrow.propTypes = { color: PropTypes.string.isRequired };

const mapStateToProps = ({
  theme: { headerColor },
}) => ({
  color: headerColor,
});

export default connect(mapStateToProps)(ScrollArrow);

const SVG = ({ color }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.26 485.26" enableBackground="new 0 0 485.26 485.26" xmlSpace="preserve">
    <g className="scroll-arrow__circle-3">
      <path fill={color} d="M242.63,15c30.736,0,60.546,6.017,88.6,17.882c27.104,11.464,51.449,27.879,72.359,48.79 c20.91,20.91,37.325,45.255,48.789,72.359c11.865,28.054,17.882,57.863,17.882,88.6s-6.017,60.546-17.882,88.6 c-11.464,27.104-27.879,51.449-48.789,72.359s-45.255,37.325-72.359,48.789c-28.054,11.865-57.863,17.882-88.6,17.882 s-60.546-6.017-88.6-17.882c-27.104-11.464-51.449-27.879-72.359-48.789c-20.91-20.91-37.325-45.255-48.79-72.359 C21.017,303.176,15,273.366,15,242.63s6.017-60.545,17.882-88.599c11.464-27.104,27.879-51.45,48.79-72.359 c20.91-20.91,45.255-37.325,72.359-48.79C182.084,21.017,211.894,15,242.63,15 M242.63,0C108.629,0,0,108.629,0,242.63 c0,134.002,108.629,242.63,242.63,242.63c134.002,0,242.63-108.628,242.63-242.63C485.26,108.629,376.632,0,242.63,0L242.63,0z" />
    </g>
    <g className="scroll-arrow__circle-2">
      <path fill={color} d="M242.63,15c30.736,0,60.546,6.017,88.6,17.882c27.104,11.464,51.449,27.879,72.359,48.79 c20.91,20.91,37.325,45.255,48.789,72.359c11.865,28.054,17.882,57.863,17.882,88.6s-6.017,60.546-17.882,88.6 c-11.464,27.104-27.879,51.449-48.789,72.359s-45.255,37.325-72.359,48.789c-28.054,11.865-57.863,17.882-88.6,17.882 s-60.546-6.017-88.6-17.882c-27.104-11.464-51.449-27.879-72.359-48.789c-20.91-20.91-37.325-45.255-48.79-72.359 C21.017,303.176,15,273.366,15,242.63s6.017-60.545,17.882-88.599c11.464-27.104,27.879-51.45,48.79-72.359 c20.91-20.91,45.255-37.325,72.359-48.79C182.084,21.017,211.894,15,242.63,15 M242.63,0C108.629,0,0,108.629,0,242.63 c0,134.002,108.629,242.63,242.63,242.63c134.002,0,242.63-108.628,242.63-242.63C485.26,108.629,376.632,0,242.63,0L242.63,0z" />
    </g>
    <g className="scroll-arrow__circle-1">
      <path fill={color} d="M242.63,15c30.736,0,60.546,6.017,88.6,17.882c27.104,11.464,51.449,27.879,72.359,48.79 c20.91,20.91,37.325,45.255,48.789,72.359c11.865,28.054,17.882,57.863,17.882,88.6s-6.017,60.546-17.882,88.6 c-11.464,27.104-27.879,51.449-48.789,72.359s-45.255,37.325-72.359,48.789c-28.054,11.865-57.863,17.882-88.6,17.882 s-60.546-6.017-88.6-17.882c-27.104-11.464-51.449-27.879-72.359-48.789c-20.91-20.91-37.325-45.255-48.79-72.359 C21.017,303.176,15,273.366,15,242.63s6.017-60.545,17.882-88.599c11.464-27.104,27.879-51.45,48.79-72.359 c20.91-20.91,45.255-37.325,72.359-48.79C182.084,21.017,211.894,15,242.63,15 M242.63,0C108.629,0,0,108.629,0,242.63 c0,134.002,108.629,242.63,242.63,242.63c134.002,0,242.63-108.628,242.63-242.63C485.26,108.629,376.632,0,242.63,0L242.63,0z" />
    </g>
    <path className="scroll-arrow__arrow" fill={color} d="M320.033,262.227c-5.271-5.271-13.82-5.271-19.092,0l-46.514,46.514V145.63 c0-6.516-5.282-11.798-11.798-11.798s-11.798,5.282-11.798,11.798v163.11l-46.514-46.514c-5.271-5.271-13.82-5.271-19.092,0 c-5.272,5.272-5.272,13.819,0,19.092l67.857,67.857c2.636,2.636,6.091,3.954,9.546,3.954s6.91-1.318,9.546-3.954l67.857-67.857 C325.306,276.046,325.306,267.499,320.033,262.227z" />
  </svg>
);

SVG.propTypes = { color: PropTypes.string.isRequired };

const animationCss = `
/******************************************
*                                         *
*               RUMILI                    *
*     http://boguz.github.io/rumuli/      *
*                                         *
******************************************/


/*********    SVG  ANIMATION 5   *********/
.scroll-arrow svg {
  height: 80px;
}

.scroll-arrow svg .scroll-arrow__arrow {
  -webkit-transform: scale(.8);
  -ms-transform: scale(.8);
  transform: scale(.8);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

.scroll-arrow svg .scroll-arrow__circle-1 {
  -webkit-animation-name: svg5_1;
  animation-name: svg5_1;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.scroll-arrow svg .scroll-arrow__circle-2 {
  -webkit-animation-name: svg5_2;
  animation-name: svg5_2;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_2 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.scroll-arrow svg .scroll-arrow__circle-3 {
  -webkit-animation-name: svg5_3;
  animation-name: svg5_3;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

@-webkit-keyframes svg5_3 {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  60% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;
