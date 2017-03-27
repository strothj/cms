import { PropTypes } from 'react';
import Head from 'next/head';
import generateTitle from './generateTitle';

const PageFrame = (props) => {
  const title = generateTitle(props);
  const styles = `
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }
    body {
      min-height: 100vh;
      margin: 0;
    }
  `;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <style>{styles}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {props.children}
    </div>
  );
};

PageFrame.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
PageFrame.defaultProps = { children: null };

export default PageFrame;
