import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.colorMain}
  }

  img {
    max-width: 100%;
  }

  a {
    border-bottom: 1.35px solid ${props => props.theme.colorMain};
    color: ${props => props.theme.colorMain};
  }

  blockquote {
    color: ${props => props.theme.colorText};
  }

  /* PrismJS 1.16.0
  https://prismjs.com/download.html#themes=prism-solarizedlight&languages=css */
  /*
  Solarized Color Schemes originally by Ethan Schoonover
  http://ethanschoonover.com/solarized

  Ported for PrismJS by Hector Matos
  Website: https://krakendev.io
  Twitter Handle: https://twitter.com/allonsykraken)
  */

  /*
  SOLARIZED HEX
  --------- -------
  base03    #002b36
  base02    #073642
  base01    #586e75
  base00    #657b83
  base0     #839496
  base1     #93a1a1
  base2     #eee8d5
  base3     #fdf6e3
  yellow    #b58900
  orange    #cb4b16
  red       #dc322f
  magenta   #d33682
  violet    #6c71c4
  blue      #268bd2
  cyan      #2aa198
  green     #859900
  */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #657b83; /* base00 */
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: .85rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    background: #073642; /* base02 */
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    background: #073642; /* base02 */
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 1rem 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: #fdf6e3; /* base3 */
    border: 1px solid #14161e;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #93a1a1; /* base1 */
  }

  .token.punctuation {
    color: #586e75; /* base01 */
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #268bd2; /* blue */
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: #2aa198; /* cyan */
  }

  .token.entity {
    color: #657b83; /* base00 */
    background: #eee8d5; /* base2 */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #859900; /* green */
  }

  .token.function,
  .token.class-name {
    color: #b58900; /* yellow */
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #cb4b16; /* orange */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export default GlobalStyle
