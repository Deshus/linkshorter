const shorten = document.getElementById("shorten");
const linkInput = document.getElementById("linkInput");
const invalidLink = document.getElementById("invalidLink");

const shortenedLink = document.getElementById("shortenedLink");
const shortenedLinkText = document.getElementById("shortenedLinkText");

const copyLink = document.getElementById("copyLink");
const shareLink = document.getElementById("shareLink");

const linkViewer = document.getElementById("linkViewer");


let currentLink = ""

shorten.addEventListener("click", async function() {
	const link = linkInput.value;
	createLink(link).then(function(res) {
		if (res === 400) {
			invalidLink.style.display = "block";
			return false
		}
		linkViewer.style.display = "flex";
		invalidLink.style.display = "none";
		console.log(res)
		currentLink = `${window.location.origin}/${res}` 
		shortenedLink.href = currentLink
		shortenedLinkText.innerHTML = `${window.location.host}/${res}`
	})	
})

copyLink.addEventListener("click", async function() {
	if (!currentLink) return false
	try {
		await navigator.clipboard.writeText(currentLink);
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
})

shareLink.addEventListener("click", async function() {
	if (!currentLink) return false /* This thing doesn't work on http, only at https */
	await navigator.share({
		url: currentLink,
	});
})