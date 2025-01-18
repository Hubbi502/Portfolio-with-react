import Image from "../assets/Image.png";
import IconSection from "../components/HeroComponent/icon";
import Title from "../components/HeroComponent/Title";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-transparent">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Image} alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <Title />
          <IconSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
