function displayPopup() {
    document.getElementById("popup").style.display = "block";
}
setTimeout(displayPopup, 3000);

function closePopup() {
    document.getElementById("popup").style.display = "none";
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            const audioContext = new AudioContext();
            const microphone = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            microphone.connect(analyser)

            const threshold = 0.1
            const buffersie = 1024
            const buffer = new Float32Array(buffersie);

            function detectBlow() {
                analyser.getFloatTimeDomainData(buffer);
                let sum = 0
                for (let i = 0; i < buffersie; i++) {
                    sum += buffer[i] * buffer[i]
                }

                const rms = Math.sqrt(sum / buffersie)
                if (rms > threshold) {
                    console.log("blow detected! Candle flame is blown out")
                    $(".flame").animate({
                        "opacity": 0
                    }, "fast");

                    $(".flame2").animate({
                        "opacity": 0
                    }, "fast");

                    $(".flame3").animate({
                        "opacity": 0
                    }, "fast");

                    $(".text").animate({
                        "top": -160,
                        "opacity": 1
                    }, "fast");
                }

                requestAnimationFrame(detectBlow);
            }
            detectBlow();
        })
        .catch(function (error) {
            console.log("Error accessing microphone", error)
        });
}


//Blow Detector JavaScript





