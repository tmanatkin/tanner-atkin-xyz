import RotatingTitle from './RotatingTitle';
import headerImg from '../assets/images/tanner-atkin-nobg.png';

const Header = () => {
  return (
    <header>
      <div id="name-container">
        <h1>
          Hi, I'm <span>Tanner</span>.
        </h1>
        <RotatingTitle />
      </div>
      <img src={headerImg} alt="Picture of Tanner Smiling"></img>
    </header>
  );
};

export default Header;
