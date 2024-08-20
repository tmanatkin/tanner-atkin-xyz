const ColorChange = () => {
  let currentPosition = '0% 0%';

  function changeGradient(newPosition: string): void {
    // reset position to loop end to end

    if (currentPosition === '67% 67%' && newPosition === '0% 0%') {
      newPosition = '100% 100%';
    } else if (currentPosition === '0% 0%' && newPosition === '67% 67%') {
      currentPosition = '100% 100%';
    }

    // set starting position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-start',
      `${currentPosition}`,
    );

    // set ending (new current) position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-end',
      `${newPosition}`,
    );

    if (newPosition === '100% 100%') {
      currentPosition = '0% 0%';
    } else {
      currentPosition = newPosition;
    }

    const elements = document.querySelectorAll('.gradient-background');
    const buttons = document.querySelectorAll('.color-change-button');

    // toggle animation class for all elements to trigger animation
    elements.forEach((element) => {
      element.classList.add('animate');
    });

    // toggle animation class for all elements to trigger animation
    buttons.forEach((button) => {
      (button as HTMLButtonElement).disabled = true;
    });

    // wait till animation ends to remove
    elements.forEach((element) => {
      element?.addEventListener(
        'animationend',
        () => {
          element.classList.remove('animate');

          buttons.forEach((button) => {
            (button as HTMLButtonElement).disabled = false;
          });
        },
        { once: true },
      );
    });
  }

  return (
    <section>
      <h2>Change Colors...?</h2>
      <button
        className="color-change-button"
        onClick={() => changeGradient('0% 0%')}
      >
        Orange
      </button>
      <button
        className="color-change-button"
        onClick={() => changeGradient('33% 33%')}
      >
        Purple
      </button>
      <button
        className="color-change-button"
        onClick={() => changeGradient('67% 67%')}
      >
        Green
      </button>
    </section>
  );
};

export default ColorChange;
