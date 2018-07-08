import './sass/main.scss';

import 'babel-polyfill';
import $ from 'jquery';
import Reveal from 'reveal.js';
import hljs from 'highlight.js';
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Fontawesome setup
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeSolid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(fontawesomeSolid);

import title from './slides/100-title.slide.html';
import aboutMe from './slides/200-about-me.slide.html';
import objectives from './slides/300-objectives.slide.html';

// -------------------------------------------------------------------------
// Slides
// -------------------------------------------------------------------------

const slides = [
  title,
  aboutMe,
  objectives,
]
  .forEach(s => $('#slides').append(s));

// -------------------------------------------------------------------------
// Reveal.js Configuration
// -------------------------------------------------------------------------

Reveal.initialize({
  center: false,
  margin: 0,
  width: "100%",
  height: "100%",
});

RevealMarkdown.initialize();

hljs.initHighlightingOnLoad();
