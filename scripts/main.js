// Importing main CSS so Rollup will watch and bundle with PostCSS!
import "../styles/index.css";

import initNav from "./nav";
import backToTop from "./backToTop";
import initModals from "./modal";

backToTop();
initNav();
initModals();
