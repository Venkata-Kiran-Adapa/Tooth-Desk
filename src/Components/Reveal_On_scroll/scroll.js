import { useInView } from 'react-intersection-observer';
import './scroll.css';

const Reveal_On_scroll = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,       
    triggerOnce: true,    
  });

  return (
    <div ref={ref} className={`reveal_on-scroll ${inView ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default Reveal_On_scroll;
