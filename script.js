const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedia() {
    try {
        const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStreamDevice;
        // video.onloadedmetadata = async () => {
        //     await video.play();
        // }
        video.onloadedmetadata = startPictureInPicture();
    } catch (error) {
        console.log(error)
    }
}

// button.addEventListener('click', async () => {
//     button.disabled = true;
//     await video.requestPictureInPicture();
//     button.disabled = false;
// });

button.addEventListener('click', selectMedia);


async function startPictureInPicture() {
    await video.play();
    if (video.play()) {
        video.requestPictureInPicture();
    } else {
        startPictureInPicture();
    }
}
// selectMedia();