import { useEffect } from 'react';

const ColorChange = () => {
  // disable first button on load
  useEffect(() => {
    (
      document.getElementById('color-change-button-0') as HTMLButtonElement
    ).disabled = true;
  }, []);

  // initialize variables
  const positions = ['0% 0%', '33% 33%', '67% 67%', '100% 100%'];
  let currentPosition = 0;

  function changeGradient(newPosition: number): void {
    // reset position to loop end to end
    if (currentPosition === 2 && newPosition === 0) {
      newPosition = 3;
    } else if (currentPosition === 0 && newPosition === 2) {
      currentPosition = 3;
    }

    // set starting position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-start',
      `${positions[currentPosition]}`,
    );

    // set ending (new current) position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-end',
      `${positions[newPosition]}`,
    );

    // set new current position
    if (newPosition === 3) {
      currentPosition = 0;
    } else {
      currentPosition = newPosition;
    }

    // get elements and buttons
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

    // wait till animation ends
    elements.forEach((element) => {
      element?.addEventListener(
        'animationend',
        () => {
          // remove animation
          element.classList.remove('animate');

          // enable buttons (except for current position)
          [0, 1, 2]
            .filter((n) => n !== currentPosition)
            .forEach((n) => {
              (
                document.getElementById(
                  `color-change-button-${n}`,
                ) as HTMLButtonElement
              ).disabled = false;
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
        id="color-change-button-0"
        className="color-change-button"
        onClick={() => changeGradient(0)}
      >
        Orange
      </button>
      <button
        id="color-change-button-1"
        className="color-change-button"
        onClick={() => changeGradient(1)}
      >
        Purple
      </button>
      <button
        id="color-change-button-2"
        className="color-change-button"
        onClick={() => changeGradient(2)}
      >
        Green
      </button>
    </section>
  );
};

export default ColorChange;
