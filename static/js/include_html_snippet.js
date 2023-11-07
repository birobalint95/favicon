// $(document).ready (function() {
// 	includeHTMLSnippet();
// });

export {includeHTMLSnippet};

function includeHTMLSnippet() {

	// Traverse the collection of all
	// HTML elements
	let id = document.getElementsByTagName("*");
	for (i = 0; i < id.length; i++) {
		let element = id[i];

		// Search for elements with
		// specific attributes
		let file = element.getAttribute(
			"include-html-snippet");

		if (file) {

			// Create an HTTP request with
			// the attribute value as the
			// file name
			let xmlRequest = new XMLHttpRequest();
			xmlRequest.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						element.innerHTML = this.responseText;
					}

					if (this.status == 404) {
						element.innerHTML = "Page not found.";
					}

					// Delete the attribute and
					// call this function again.
					element.removeAttribute(
						"include-html-snippet");

					includeHTMLSnippet();
				}
			}
			xmlRequest.open("GET", file, true);
			xmlRequest.send();
			return; // Exit function.
		}
	}
};
