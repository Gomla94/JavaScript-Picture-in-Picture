const video = document.getElementById('video');
const shareButton = document.getElementById('share-button');
const startButton = document.getElementById('start-button');
const loader = document.getElementById('loader');
startButton.disabled = true;

async function selectMedia() {
    try {
        const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStreamDevice;
        video.onloadedmetadata = async () => {
            await video.play();
            startButton.disabled = false;
        }
    } catch (error) {
        console.log(error)
    }
}

// button.addEventListener('click', async () => {
//     button.disabled = true;
//     await video.requestPictureInPicture();
//     button.disabled = false;
// });

shareButton.addEventListener('click', selectMedia);
startButton.addEventListener('click', startPictureInPicture);


async function startPictureInPicture() {
    startButton.disabled = true;
    video.requestPictureInPicture();
}
// selectMedia();