import InfiniteMarquee from "vanilla-infinite-marquee";
import { useEffect } from "react";
import "./Text.css";


const Text = () => {
    useEffect(() => {
        const Marquee = new InfiniteMarquee({
            element: '.marquee-container',
            speed: 7000,
            smoothEdges: true,
            direction: 'right',
            mobileSettings: {
                direction: 'right',
                speed: 7000
            },
            on: {
                beforeInit: () => {
                    console.log('Not Yet Initialized');
                },
        
                afterInit: () => {
                    console.log('Initialized');
                }
            }
        });
        return () => {
            Marquee.destroy();
        };
    }, [])
    const text = ["About Me"];
  return (
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 no-scrollbar">
        <div className="marquee-container">
            {text.map((text, index) => (
                <div key={index} style={{margin: '2px'}}>
                    <h2 className="font-bold text-6xl ml-10">
                        {text}
                    </h2>
                </div>
            ))}
        </div>
      <p className="mb-4">
        We are strategists, designers and developers. Innovators and problem
        solvers. Small enough to be simple and quick, but big enough to deliver
        the scope you want at the pace you need. Small enough to be simple and
        quick, but big enough to deliver the scope you want at the pace you
        need.
      </p>
      <p>
        We are strategists, designers and developers. Innovators and problem
        solvers. Small enough to be simple and quick.
      </p>
    </div>
  );
};
export default Text;
