const blob = document.getElementById('blob-effect');

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  // Calculate the blob size based on its height
  const blobSize = parseInt(getComputedStyle(blob).height);

  // Calculate the maximum x and y positions for the blob to prevent it from going off-screen
  const maxX = document.documentElement.clientWidth - blobSize;
  const maxY = document.documentElement.clientHeight - blobSize;

  // Adjust the position of the blob based on the calculated maximum x and y positions
  const adjustedX = Math.min(clientX, maxX);
  const adjustedY = Math.min(clientY, maxY);

  blob.animate(
    {
      left: `${adjustedX}px`,
      top: `${adjustedY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  );
};
