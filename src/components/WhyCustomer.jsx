import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"

const WhyCustomer = () => {
  const logos = [
    "/tiktok.png",
    "/tokopedia.png",
    "/alibaba.png",
    "/dropbox.png",
  ];

  const duplicatedImages = [];
  while (duplicatedImages.length < 10) {
    duplicatedImages.push(...logos);
  }

  return (
    <div className="text-center py-24 container mx-auto px-6">
      <h2 className="lg:text-5xl text-2xl font-semibold">
        Why Customer Trust Us
      </h2>
      <p className="text-2xl mt-4 font-light">
        What our customers are saying
      </p>
      <div className="flex items-center justify-center mt-15 pb-12 gap-x-2 lg:w-1/2 mx-auto">
        <FaChevronLeft size={30} />
        <p className="text-2xl leading-10">
          JobJourney has revolutionized our recruitment process. The platform is intuitive, making the selection smooth and efficient with advanced features like customized searches and data analysis. Their responsive support team is a great help. JobJourney is the best investment for our HR department!
        </p>
        <FaChevronRight size={30}/>
      </div>
      <p className="text-3xl font-semibold">Rina Andriana</p>
      <p className="text-xl pt-4">TikTok</p>
      <div className="flex items-center lg:gap-16 gap-3 overflow-hidden my-24">
        {duplicatedImages.slice(0, 10).map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt="" 
            className="w-40 h-14 object-contain"
            />
          ))}
      </div>
    </div>
  )
}

export default WhyCustomer