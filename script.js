const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedia() {
    try {
        const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStreamDevice;
        video.onloadedmetadata = async () => {
            await video.play();
        }
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
});

selectMedia();