document.addEventListener("DOMContentLoaded", 
	function (event) {

		// Unobstrusive event binding
		document.querySelector("button")
		.addEventListener("click", function() {
			var self = this;
			var name = "";

			// Call server to get the name
			$ajaxUtils
			.sendGetRequest("C:/Users/Sharma/test2/site2/name.text",
				function (request) {
					self.name = request.responseText;
				});

			document.querySelector("#content")
			.innerHTML = "<h2>Hello " +
			self.name + "!";
		});
	}
	);