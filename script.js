const video = document.getElementById('video');
const shareButton = document.getElementById('share-button');
const startButton = document.getElementById('start-button');
const loader = document.getElementById('loader');
// startButton.disabled = true;

video.setAttribute('src', 'Screen Recording 2020-11-18 at 10.36.21 AM.mov');

// async function selectMedia() {
//     try {
//         const mediaStreamDevice = await navigator.mediaDevices.getDisplayMedia();
//         video.srcObject = mediaStreamDevice;
//         video.onloadedmetadata = async () => {
//             await video.play();
//             startButton.disabled = false;
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// // button.addEventListener('click', async () => {
// //     button.disabled = true;
// //     await video.requestPictureInPicture();
// //     button.disabled = false;
// // });

// shareButton.addEventListener('click', selectMedia);
startButton.addEventListener('click', startPictureInPicture);


async function startPictureInPicture() {
    startButton.disabled = true;
    video.hidden = true;
    video.requestPictureInPicture();
}
// selectMedia();