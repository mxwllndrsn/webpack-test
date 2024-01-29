// index.js
// webpack entry point 

import resource_one from './resource_one.js';
import resource_two from './resource_two.js';
import resource_three from './resource_three.js';

const runtime = (function() {
    console.log('hello');
    
    console.log(resource_one);
    console.log(resource_two);
    
    resource_three(resource_one);
}());