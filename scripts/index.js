/*
DO NOT MAKE CHANGES TO THE HTML FILE

1. Validates that all fields other than day phone are filled out / checked
2. Validates that email is an email and phone number is in (###) ###-#### format
3. If a field is not filled out/checked, show a relavent error with the name of the field and highlight the field

DO NOT MAKE CHANGES TO THE HTML FILE
*/

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	var element = document.getElementsByClassName("errorMessage");
	if (element.length > 0) {
		Array.from(element).map((item) => {
			item.parentNode.removeChild(item);
		});
	}
	let firstName = document.getElementsByTagName("input")[0].value;
	let lasttName = document.getElementsByTagName("input")[1].value;
	let email = document.getElementsByTagName("input")[2].value;
	let phone = document.getElementsByTagName("input")[3].value;
	let agreeCheck = document.getElementsByName("agreement")[0].checked;
	FormValidation(firstName, lasttName, email, agreeCheck, phone);
});

const addNode = (node, message) => {
	let newSpan = document.createElement("span");
	newSpan.setAttribute("class", "errorMessage");
	newSpan.innerHTML = message;
	newSpan.style.color = "red";
	let newErrorNode = node.parentElement;
	newErrorNode.appendChild(newSpan);
};
const isValidPhonFormate = (number) => {
	let phoneno = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	if (phoneno.test(number)) {
		return true;
	} else {
		return false;
	}
};

const FormValidation = (firstName, lasttName, email, agreeCheck, phone) => {
	const emailRgex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (firstName === "")
		addNode(document.getElementsByTagName("input")[0], "First Name Required");
	if (lasttName === "")
		addNode(document.getElementsByTagName("input")[1], "Last Name Required");
	if (!emailRgex.test(String(email).toLowerCase()))
		addNode(
			document.getElementsByTagName("input")[2],
			"Invalid email addreess"
		);
	if (!agreeCheck)
		addNode(
			document.getElementsByName("agreement")[0],
			"Please agree all conditions"
		);
	if (!isValidPhonFormate(phone)) {
		addNode(
			document.getElementsByTagName("input")[3],
			"Enter number with given formate"
		);
	}
};
