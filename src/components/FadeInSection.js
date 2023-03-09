import React from 'react'
import {useState, useEffect, useRef} from 'react'

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setVisible(entry.isIntersecting);
            }
        });
    });
    if(domRef.current) observer.observe(domRef.current);
    return () => {
      if(domRef.current) observer.unobserve(domRef.current);
    }
}, [domRef]);
  return (
    <div
    className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    ref={domRef}
>
    {props.children}
</div>
  )
}

export default FadeInSection