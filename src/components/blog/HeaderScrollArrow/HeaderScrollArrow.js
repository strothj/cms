import { Component, PropTypes } from 'react';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';
import { breakpoints, gutters } from '../../shared';
import SVG from './SVG';
import animationCss from './animationCSS';

const scrollToContent = (e) => {
  e.preventDefault();
  scroll.scrollTo(screen.height);
};

class ScrollArrow extends Component {
  static propTypes = { color: PropTypes.string.isRequired };

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <nav className="scroll-arrow-wrapper">
        <style jsx>{`
          .scroll-arrow-wrapper {
            visibility: hidden;
            position: absolute;
            width: 100%;
            bottom: 0;
          }

          @media ${breakpoints.FOR_TABLET} {
            .scroll-arrow-wrapper {
              visibility: visible;
            }
          }

          .scroll-arrow-wrapper-content {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
          }

          .scroll-arrow {
            position: absolute;
            bottom: ${gutters(breakpoints.FOR_TABLET)};
            right: ${gutters(breakpoints.FOR_TABLET)};
            width: 84px;
          }
        `}</style>
        <div className="scroll-arrow-wrapper-content">
          <a href="#content-section" onClick={scrollToContent}>
            <figure className="scroll-arrow">
              <SVG color={this.props.color} />
              {/* eslint-disable react/no-danger */}
              <style dangerouslySetInnerHTML={{ __html: animationCss }} />
              {/* eslint-enable */}
            </figure>
          </a>
        </div>
      </nav>
    );
  }
}

export default ScrollArrow;
