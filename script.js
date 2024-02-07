let isDragging = false;
    let previousX, previousY;
    let currentX = 0, currentY = 0;
    let scene = document.getElementById('scene');
    let cube = document.getElementById('cube');

    function startDrag(event) {
        isDragging = true;
        previousX = event.clientX;
        previousY = event.clientY;
    }

    function stopDrag() {
        isDragging = false;
    }

    function dragCube(event) {
        if (isDragging) {
            currentX += (event.clientX - previousX) / 2;
            currentY += (event.clientY - previousY) / 2;

            cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg) rotateZ(0deg)`;
            scene.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg) rotateZ(0deg)`;

            previousX = event.clientX;
            previousY = event.clientY;
        }
    }