const ColorChange = () => {
  // possible background positions
  const positions = [
    '0% 0%',
    '20% 20%',
    '40% 40%',
    '60% 60%',
    '80% 80%',
    '100% 100%',
  ];

  let currentPosition = 0;

  function changeGradient(direction: number): void {
    // reset position to loop end to end
    if (direction === 1 && currentPosition === positions.length - 1) {
      currentPosition = 0;
    } else if (direction === -1 && currentPosition === 0) {
      currentPosition = positions.length - 1;
    }

    // set starting position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-start',
      `${positions[currentPosition]}`,
    );

    // increment position
    currentPosition += direction;

    // set ending (new current) position
    document.documentElement.style.setProperty(
      '--gradient-animation-position-end',
      `${positions[currentPosition]}`,
    );

    const elements = document.querySelectorAll('.gradient-background');

    // toggle animation class for all elements to trigger animation
    elements.forEach((element) => {
      element.classList.add('animate');
    });

    // wait till animation ends to remove
    elements.forEach((element) => {
      element?.addEventListener(
        'animationend',
        () => {
          element.classList.remove('animate');
        },
        { once: true },
      );
    });
  }

  return (
    <section>
      <h2>Change Colors...?</h2>
      <button onClick={() => changeGradient(-1)}>Previous</button>
      <button onClick={() => changeGradient(1)}>Next</button>
    </section>
  );
};

export default ColorChange;
