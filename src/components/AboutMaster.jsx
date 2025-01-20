import Image from "./AboutComponent/Image";
import Text from "./AboutComponent/Text";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="bg-transparent">
        <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <Image />
          <Text />
        </div>
      </section>
    </>
  );
};

export default About;