import TypingAnimation from "../../Animation/TypingAnimation";
const Title = () => {
    return(
    <>
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
            <TypingAnimation text="Transforming Ideas into Stunning Websites 💻 🌐" speed={100}/>
          </p>
    </>
    )
}
export default Title;