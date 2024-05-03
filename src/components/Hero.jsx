import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ndaru1 } from "../assets";
import "./Hero.css";


const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "FrontEnd Developer", "BackEnd Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <section className={`relative w-screen h-screen flex justify-center items-center`}>
      <div className={`max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#7FFFD4]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`} style={{ maxWidth: '500px' }}>
            Hi, I'm <span className='text-[#7FFFD4]'>Ndaru</span> A{' '}
            <span className="txt-rotate text-[#7FFFD4] text-[68px]" dataPeriod="1000" data-rotate='[ "Web Developer", "FrontEnd Developer", "BackEnd Developer" ]'>
              <span className="wrap">{text}</span>
            </span>
          </h1>
        </div>


      </div>
      <div>
        <img src={ndaru1} alt='ndaru1' width='900px' height='900px' />
      </div>
      

      
    </section>



  );
};

export default Hero;
