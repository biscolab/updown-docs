/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'UpDown SDK', // Title for your website.
  tagline: 'Integrate updown.io service in your application',
  url: 'https://updown-sdk.biscolab.com', // Your website URL
  cname: 'updown-sdk.biscolab.com',
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  // baseUrl: '/updown-sdk/',

  // Used for publishing and more
  projectName: 'updown-php-sdk',
  organizationName: 'biscolab',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    {href: '/docs/laravel', label: 'Laravel'},
    // {page: 'help', label: 'Help'},
	  {href: 'https://github.com/biscolab/updown-php-sdk', label: 'GitHub'}
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
	headerIcon: 'img/biscolab_white.svg',
	footerIcon: 'img/biscolab_white.svg',
	favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: "Copyright © " + new Date().getFullYear() + " Roberto Belotti 🍪",

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', 
    'http://chs03.cookie-script.com/s/5462f0b70af569a29b401589fc180ce6.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js'
  ],

  stylesheets: ['/css/code-blocks-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
	ogImage: 'img/biscolab_white.png',
	twitterImage: 'img/biscolab_white.png',

	scrollToTop: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/biscolab/updown-php-sdk',
  
  gaTrackingId: 'UA-5439279-36',

  gaGtag: true,

  docsSideNavCollapsible: true

};

module.exports = siteConfig;
