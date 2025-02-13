const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    let yesButtonSize = 18; // Initial font size

    noButton.addEventListener('click', () => {
      // Increase Yes button size
      yesButtonSize += 10;
      yesButton.style.fontSize = `${yesButtonSize}px`;

      // Move No button randomly
      const maxX = window.innerWidth - noButton.offsetWidth;
      const maxY = window.innerHeight - noButton.offsetHeight;
      const randomX = Math.max(0, Math.floor(Math.random() * maxX));
      const randomY = Math.max(0, Math.floor(Math.random() * maxY));

      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    });
