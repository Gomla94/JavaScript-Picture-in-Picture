const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMedia() {
    try {
        const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStreamDevice;
        // video.requestPictureInPicture();
        video.onloadedmetadata = async () => {
            await video.play();
            video.requestPictureInPicture();

            // video.requestPictureInPicture();
        }
        // video.onloadedmetadata = startPictureInPicture();
        // video.onplay = async () => {
        //     video.requestPictureInPicture();
        // }
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