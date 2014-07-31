(function() {
    'use strict';
    var AVLTree = {};

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return AVLTree;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = AVLTree;
    } else {
        window.AVLTree = AVLTree;
    }
})();
