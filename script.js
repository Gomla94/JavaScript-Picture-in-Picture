const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedia() {
    try {
        const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStreamDevice;
        video.onloadedmetadata = async () => {
            await video.play();
            button.disabled = true;
            video.requestPictureInPicture();
        }
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', selectMedia);