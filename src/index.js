import './css/landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RecipeApp from './js/RecipeApp';

import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
// Initialize the RecipeApp
document.addEventListener('DOMContentLoaded', () => {
    window.recipeApp = new RecipeApp();
});

