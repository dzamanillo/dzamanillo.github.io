const projects = [
	{
		name: "Holiday Chaos Coordinator",
		description: "Full Stack Group Project with Focus on React and Material UI",
		builtWith: [
			"JavaScript",
			"Node JS",
			"Express",
			"React",
			"GraphQL",
			"Apollo",
			"Material UI",
			"Mongo",
			"Mongoose",
			"JWT",
		],
		image: "Assets/Images/HCC_screenShot.png",
		deployUrl: "https://holiday-chaos-dz.herokuapp.com/",
		gitHubUrl: "https://github.com/dzamanillo/target-shopping",
	},
	{
		name: "Deep Thoughts",
		description: "MERN Stack Blog with JWT Authorization",
		builtWith: [
			"Node JS",
			"Express",
			"React",
			"GraphQL",
			"Apollo",
			"Mongo",
			"Mongoose",
			"JWT",
		],
		image: "Assets/Images/deep-thoughts-screenshot.png",
		deployUrl: "https://deep-thoughts-dz.herokuapp.com/",
		gitHubUrl: "https://github.com/dzamanillo/deep-thoughts",
	},
	{
		name: "Book Search",
		description: "Full Stack app using GraphQL and Google Book Search API",
		builtWith: [
			"Node JS",
			"Express",
			"React",
			"GraphQL",
			"Apollo",
			"Mongo",
			"Mongoose",
			"JWT",
		],
		image: "Assets/Images/book-search-screenShot.png",
		deployUrl: "https://book-search-dz.herokuapp.com/",
		gitHubUrl: "https://github.com/dzamanillo/book-search",
	},
	{
		name: "Virtual Guardian",
		description:
			"Full Stack Group Project with Focus on Sequelize and Handlebars",
		builtWith: [
			"CSS",
			"JavaScript",
			"Bootstrap",
			"Node JS",
			"Express",
			"Handlebars",
			"Sequelize",
		],
		image: "Assets/Images/vg_screen.png",
		deployUrl: "https://password-manager-gadaell.herokuapp.com/",
		gitHubUrl: "https://github.com/gadaell/Password-Manager",
	},
	{
		name: "Periodic Table of Breaking Bad",
		description:
			"Front End Group Project With Focus on Working with 3rd Party API's and Managing a Project on GitHub",
		builtWith: ["HTML", "CSS", "JavaScript", "Bootstrap"],
		image: "Assets/Images/PTBB-screenShot.png",
		deployUrl: "https://dzamanillo.github.io/Period-Table-of-Breaking-Bad/",
		gitHubUrl: "https://github.com/dzamanillo/Period-Table-of-Breaking-Bad",
	},
	{
		name: "Password Generator",
		description: "Front End Project With Focus on SASS and Materialize CSS",
		builtWith: ["HTML", "CSS", "JavaScript"],
		image: "Assets/Images/PWG-screenshot.png",
		deployUrl: "https://dzamanillo.github.io/password-gen/",
		gitHubUrl: "https://github.com/dzamanillo/password-gen",
	},
	{
		name: "Code Quiz",
		description:
			"Test your know with this app that highlight DOM manipulation ",
		builtWith: ["HTML", "SASS", "JavaScript", "Materialize CSS"],
		image: "Assets/Images/code-quiz-screenShot.png",
		deployUrl: "https://dzamanillo.github.io/code-quiz/",
		gitHubUrl: "https://github.com/dzamanillo/code-quiz",
	},
];

const workContentEl = document.querySelector("#work-content");

projects.forEach((project) => {
	let card = document.createElement("div");
	card.classList = "card m-2";

	let image = document.createElement("img");
	image.classList = "card-img-top";
	image.setAttribute("src", project.image);
	image.setAttribute("alt", project.name);

	let cardBody = document.createElement("div");
	cardBody.classList = "card-body card-space";

	let cardTitle = document.createElement("h5");
	cardTitle.classList = "card-title";
	cardTitle.textContent = project.name;

	let cardText = document.createElement("p");
	cardText.classList = "card-text";
	cardText.textContent = project.description;

	let builtWith = document.createElement("p");
	builtWith.textContent = "Built With:";

	let ul = document.createElement("ul");

	project.builtWith.forEach((item) => {
		let li = document.createElement("li");
		li.textContent = item;
		ul.append(li);
	});

	let buttonDiv = document.createElement("div");
	buttonDiv.classList = "d-flex justify-content-between";

	let deployUrl = document.createElement("a");
	deployUrl.classList = "btn";
	deployUrl.setAttribute("href", project.deployUrl);
	deployUrl.setAttribute("target", "_blank");
	deployUrl.textContent = "Website";

	let gitHubUrl = document.createElement("a");
	gitHubUrl.classList = "btn";
	gitHubUrl.setAttribute("href", project.gitHubUrl);
	gitHubUrl.setAttribute("target", "_blank");
	gitHubUrl.textContent = "GitHub";

	buttonDiv.append(deployUrl, gitHubUrl);
	cardBody.append(cardTitle, cardText, builtWith, ul, buttonDiv);
	card.append(image, cardBody);

	workContentEl.append(card);
});
