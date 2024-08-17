import styled, { keyframes } from 'styled-components';

// displayed titles
const titles = [
  'Full-Stack Dev',
  'Problem Solver',
  'Software Engineer',
  'BYU Student',
  'AI Enthusiast',
  'Coding Wizard',
];

// seconds per title
let secondsPerTitle = 3;

// percentage of seconds per title that is held (0-1, reccomended 0.5)
let titleHoldPercent = 0.5;
let titleHold = (100 / titles.length) * titleHoldPercent;

// generate keyframes for titles
const rotateTitles = () => keyframes`
  0% {
    transform: translateY(0);
  }

  ${titleHold}% {
    transform: translateY(0%);
  }

  ${(() => {
    // generated keyframes for each title
    let keyframesRule = '';
    for (let i = 1; i < titles.length; i++) {
      keyframesRule += `    
        /* Title */
        ${(i * 100) / titles.length}% {
          transform: translateY(${-100 * i}%);
        }
    
        /* Title Hold */
        ${(i * 100) / titles.length + titleHold}% {
          transform: translateY(${-100 * i}%);
        }
        `;
    }
    return keyframesRule;
  })()}

  100% {
    transform: translateY(${-100 * titles.length}%);
  }`;

const Title = styled.h1`
  animation: ${rotateTitles} ${titles.length * secondsPerTitle}s ease-in-out
    infinite;
`;

const RotatingTitle: React.FC = () => {
  return (
    <div id="rotating-title-container" className="faded-border">
      {titles.map((title) => (
        <Title>{title}</Title>
      ))}
      <Title>{titles[0]}</Title>
    </div>
  );
};

export default RotatingTitle;
