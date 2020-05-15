/**
 *
 * FormInput
 *
 */

import styled from 'styled-components';

const Blockquote = styled.blockquote`
  width: 70%;
  margin: 2em auto;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  line-height: 1.5em;

  border-radius: 3px;
  border: none;

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 3em;
    margin-right: 0.25em;
    vertical-align: -0.3em;
  }

  &:after {
    color: #ccc;
    content: close-quote;
    font-size: 3em;
    margin-left: 0.25em;
    vertical-align: -0.3em;
  }
`;

export default Blockquote;
