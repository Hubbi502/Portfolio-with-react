import FlipCard from "../../Animation/FlipCard";

const Image = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-8">
      {/* FlipCard pertama */}
      <FlipCard
        frontImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
        backImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
      />

      {/* FlipCard kedua */}
      <div className="mt-4 sm:mt-0 lg:mt-10 rounded-lg w-full">
        <FlipCard
          frontImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
          backImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        />
      </div>
    </div>
  );
};

export default Image;
