import mediumZoom from 'medium-zoom';

import styles from './index.scss';  // eslint-disable-line

mediumZoom('.zoomable', { margin: 48 });

const linkToDemo = document.getElementById('link-to-demo');
const figTeaser = document.getElementById('fig-teaser');

linkToDemo.addEventListener('mouseenter', () => {
  figTeaser.setAttribute('class', 'active');
});

linkToDemo.addEventListener('mouseleave', () => {
  figTeaser.setAttribute('class', undefined);
});
