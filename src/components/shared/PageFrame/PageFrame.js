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
  const fonts = props.fonts.map(({ id, name }) =>
    <link
      href={`https://fonts.googleapis.com/css?family=${name}`}
      rel="stylesheet"
      key={id}
    />,
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <style>{styles}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {fonts}
      </Head>
      {props.children}
    </div>
  );
};

PageFrame.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  fonts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
PageFrame.defaultProps = { children: null };

export default PageFrame;
