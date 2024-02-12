document.getElementById("no").addEventListener("mouseenter", function () {
	const pic = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];
	const msg = [
		"noo please",
		"i will be sad :(",
		"dont say noo",
		"pweaseee",
		"i love you :(",
		"i rerally really love you :(",
		"i would love to be your valentine",
		"i wuv youuuuu",
	];
	var x = Math.random() * 1000;
	var y = Math.random() * 1000;
	while (x > 900 || y > 600) {
		x = Math.random() * 1000;
		y = Math.random() * 1000;
	}
	var randomImage = pic[Math.floor(Math.random() * pic.length)];
	var randomMessage = msg[Math.floor(Math.random() * msg.length)];

	document.getElementById("no").textContent = randomMessage;
	document.getElementById("picture").src = "./Assets/" + randomImage;

	document.getElementById("no").style.left = x + "px";
	document.getElementById("no").style.top = y + "px";
});

document.getElementById("yes").addEventListener("click", function () {
	// window.location.href = "https://amorex.github.io/valnetinroute/";
	const url = "https://twit-vtp0.onrender.com/valentine?ok=fine";

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json", // Adjust the content type based on the server's expectations
			// You may need to add other headers as needed
		},
		// You can include additional data in the body if required
		// body: JSON.stringify({ key1: 'value1', key2: 'value2' })
	})
		.then((response) => {
			// Handle the response here if needed
			console.log("POST request sent successfully");
			window.location.href = "https://amorex.github.io/valnetinroute/";
		})
		.catch((error) => {
			// Handle errors here
			console.error("Error sending POST request:", error);
			window.location.href = "https://amorex.github.io/valnetinroute/";
		});
});

// https://twit-vtp0.onrender.com/valentine?ok=fine
