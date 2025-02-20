// Usage: Add this script to your docsify project to enable the "Edit on Github" button on each page.
// Source:https://github.com/njleonzhang/docsify-edit-on-github/pull/17
(function (win) {
	function isFunction(functionToCheck) {
		return typeof functionToCheck === 'function';
	}
	function editDoc(event, vm, docEditBase) {
		var docName = vm.route.file;

		if (docName) {
			var editLink = docEditBase + docName;
			window.open(editLink);
			event.preventDefault();
			return false;
		} else {
			return true;
		}
	}

	win.EditOnGithubPlugin = {};

	function create(docBase, docEditBase, title) {
		title = title || 'Edit on github';
		docEditBase = docEditBase || docBase.replace(/\/blob\//, '/edit/');

		function generateHeader(title) {
			return (header = [
				'<div style="overflow: auto">',
				'<p style="float: right"><a style="text-decoration: underline; cursor: pointer"',
				'onclick="EditOnGithubPlugin.onClick(event)">',
				title,
				'</a></p>',
				'</div>',
			].join(''));
		}
            
		return function (hook, vm) {
			win.EditOnGithubPlugin.onClick = function (event) {
				editDoc(event, vm, docEditBase);
			};

			if (isFunction(title)) {
				hook.afterEach(function (html) {
					return generateHeader(title(vm.route.file)) + html;
				});
			} else {
				var header = generateHeader(title);

				hook.afterEach(function (html) {
					return header + html;
				});
			}
		};
	}

	win.EditOnGithubPlugin.create = create;
})(window);