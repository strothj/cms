import { PropTypes } from 'react';

import { breakpoints, spacing } from './styles';

const Search = () => (
  <section>
    <form action="/search" method="post">
      <input type="text" id="query" placeholder="Search..." />
      <button type="submit">
        <SVG color="white" />
      </button>
    </form>

    <style jsx>{`
      section {
        padding-bottom: ${spacing.phone * 2}px;
      }

      @media ${breakpoints.tablet} {
        section {
          padding-bottom: ${spacing.tablet * 2}px;
        }
      }

      form {
        display: block;
        position: relative;
      }

      input {
        width: 100%;
        height: 3rem;
        padding-left: 1rem;
        border-radius: 3px;
        border: 1px solid #ddd;
        outline: none;
        font-size: 1rem;
        font-family: inherit;
        line-height: 3rem;
      }

      input:focus {
        border: 1px solid #222;
      }

      button {
        position: absolute;
        width: 3.5rem;
        height: 2.6rem;
        right: .2rem;
        top: .2rem;
        border: none;
        background-color: #222;
        line-height: 5;
        cursor: pointer;
      }
    `}</style>
  </section>
);

export default Search;

// https://material.io/icons/#ic_search
const SVG = props => (
  <svg fill={props.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    <path d="M0 0h24v24H0z" fill="none" />

    <style jsx>{`
      svg {
        width: 2rem;
        height: 2rem;
      }
    `}</style>
  </svg>
);

SVG.propTypes = { color: PropTypes.string.isRequired };
