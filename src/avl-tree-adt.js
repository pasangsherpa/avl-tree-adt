(function() {
	'use strict';
	var AVLTree = function() {
		var root = null,
			count = 0;

		function Node(element) {
			this.element = element || null;
			this.right = this.left = null;
		}

		function add(element) {
		}

		function remove(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function getRoot() {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
			return root;
		}

		function find(element) {
			if (isEmpty()) {
				throw new Error("removeMin(): Tree is empty.");
			}
		}

		function isEmpty() {
			return count === 0;
		}

		function size() {
			return count;
		}

		return {
			add: add,
			remove: remove,
			getRoot: getRoot,
			find: find,
			isEmpty: isEmpty,
			size: size
		}
	}

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
