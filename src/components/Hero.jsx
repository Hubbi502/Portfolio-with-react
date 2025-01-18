import Image from "../assets/Image.png";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-transparent">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={Image} alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="text-container mt-20">
            <h1 className="title yellow-border max-w-4xl mb-4 text-8xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl">
              <span className="text">Hubbi</span>
              <span className="text">EL</span>
              <span className="text">Fairuz</span>
            </h1>
            <h1 className="title white-fill max-w-4xl mb-4 text-8xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl">
              <span className="text">Hubbi</span>
              <span className="text">EL</span>
              <span className="text">Fairuz</span>
            </h1>
            <h1 className="title yellow-border max-w-4xl mb-4 text-8xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl">
              <span className="text">Hubbi</span>
              <span className="text">EL</span>
              <span className="text">Fairuz</span>
            </h1>
          </div>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Transforming Ideas into Stunning Websites 💻 🌐
          </p>

          <img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/>

        </div>
      </div>
    </section>
  );
};

export default Hero;
