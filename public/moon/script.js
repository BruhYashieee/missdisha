function changeContent() {
    const resolution = document.getElementById("resolutionSelect").value;
    console.log(resolution)
    const contentDiv = document.getElementById("content");

    if (resolution == "1080p" ) {
        contentDiv.innerHTML = '<video width="100%" height="100%" autoplay loop><source src="chipi.mp4" type="video/mp4"></video>'
    } else {
        const imageUrl = getImageUrlForResolution(resolution);
        contentDiv.innerHTML = '<img src="' + imageUrl + '" alt="Image for' + resolution +'">';
    }
}

function getImageUrlForResolution(resolution) {
    switch(resolution) {
        case "144p":
            return "144p.jpeg";
        case "240p":
            return "240p.jpeg";
        case "360p":
            return "360p.jpeg";
        case "480p":
            return "480p.jpeg";
        case "720p":
            return "720p.jpeg";
        default:
            return "5423439.jpg"
    }
}