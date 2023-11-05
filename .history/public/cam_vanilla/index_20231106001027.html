<div>Teachable Machine Image Model</div>
<button type="button" onclick="init()">Start</button>
<button type="button" onclick="switchCamera()">Switch Camera</button>
<div id="webcam-container"></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
<script type="text/javascript">
    let model, webcam, labelContainer, maxPredictions;
    let cameraDevices = [];
    let currentDeviceIndex = 0;

    async function init() {
        const modelURL = 'https://raw.githubusercontent.com/khulqu15/michinavi/main/public/model/model.json';
        const metadataURL = 'https://raw.githubusercontent.com/khulqu15/michinavi/main/public/model/metadata.json';
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Get the list of available video input devices
        cameraDevices = (await navigator.mediaDevices.enumerateDevices()).filter(device => device.kind === 'videoinput');
        if (cameraDevices.length === 0) {
            alert("No camera found on this device.");
            return;
        }

        // Start with the first camera device
        await setupWebcam(cameraDevices[currentDeviceIndex].deviceId);
    }

    async function setupWebcam(deviceId) {
        if (webcam) {
            webcam.stop(); // stop the previous webcam instance
        }

        // Create a new instance of the webcam
        webcam = new tmImage.Webcam(200, 200, true); // width, height, flip

        // Set up the webcam with the device id
        await webcam.setup({ deviceId });

        // Play the video from the webcam
        await webcam.play();

        // Set up the webcam stream
        window.requestAnimationFrame(loop);

        // Attach the webcam canvas to the DOM
        document.getElementById("webcam-container").innerHTML = "";
        document.getElementById("webcam-container").appendChild(webcam.canvas);

        // Prepare the label containers for the predictions
        labelContainer = document.getElementById("label-container");
        labelContainer.innerHTML = "";
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function switchCamera() {
        // Switch to the next camera device
        currentDeviceIndex = (currentDeviceIndex + 1) % cameraDevices.length;
        const deviceId = cameraDevices[currentDeviceIndex].deviceId;
        await setupWebcam(deviceId);
    }

    async function loop() {
        webcam.update(); // Update the webcam frame
        await predict(); // Predict the image on the webcam canvas
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Make a prediction through the model on our image.
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
</script>
