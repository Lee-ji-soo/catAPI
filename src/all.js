import { AppAll } from './routers';
const css = require('./scss/index.scss');

new AppAll({
    $target: document.querySelector("#All")
});
