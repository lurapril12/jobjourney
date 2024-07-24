/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
import { HiOutlineHeart, HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Topcompany = () => {
  const Jobs = ({ type, img, title, color, bg_color }) => {
    return (
      <div className="shadow lg:w-[95%] mt-12">
        <div className="bg-white rounded-t-md px-6 py-8 flex flex-col items-center">
          <span className="flex items-center justify-between w-full">
            <button
              className="rounded-full bg-transparent text-lg text-black py-2 px-8 outline-none border-none hoverBtn"
              style={{ border: `3px solid ${color}` }}
            >
              {type}
            </button>
            <HiOutlineHeart className="text-3xl" />
          </span>
          <img src={img} alt="" className="w-28 h-28 rounded-full my-8" />
        </div>
        <div className="rounded-b-md px-6 py-8" style={{ backgroundColor: `${bg_color}` }}>
          <p className="text-2xl font-semibold">{title}</p>
          <p className="py-2 text-lg">Plaza Sudirman, Jakarta Pusat</p>
          <div className="flex pb-4">
            {[...Array(5)].map((_, index) => {
              return <HiStar key={index} className="text-[#ffcc02] text-2xl mr-1" />;
            })}
          </div>
          <div className="p-2 border border-solid border-[#000000] rounded-md flex justify-between text-sm">
            <p>Salary</p>
            <p className="font-semibold" style={{ color: `${color}` }}>9.000.000</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#fafbfc]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Top Company</h2>
          <span className="md:flex gap-x-4">
            <button className="bg-primary md:my-0 my-4 rounded-full text-lg text-white font-bold py-3 px-8 outline-none border-none hoverBtn">
              Browse Jobs
            </button>
            <button className="bg-transparent border border-solid border-[#e2e4e7] text-lg text-black rounded-full md:my-0 my-4 font-bold py-3 px-8 outline-none shadow-white hoverBtn">
              See All Companies
            </button>
          </span>
        </div>
        <p className="text-lg mt-4 front-light">Know more about top companies that are hiring.</p>
        <div className="mt-8">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite
            showDots
            autoPlay={true}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
          >
            <Jobs
              bg_color='#f4f4ff'
              color="#4b4efc"
              img="/tokopedia.jpg"
              title="UI/UX Designer"
              type="Full Time"
            />
            <Jobs
              bg_color='#fca5a5'
              color="red"
              img="/tokopedia.jpg"
              title="PHP Developer"
              type="Internship"
            />
            <Jobs
              bg_color='#a7f3d0'
              color="green"
              img="/tokopedia.jpg"
              title="Frontend Developer"
              type="Full Time"
            />
            <Jobs
              bg_color='#d1d5db'
              color="gray"
              img="/tokopedia.jpg"
              title="Product Manager"
              type="Permanent"
            />
            <Jobs
              bg_color='#fef08a'
              color="#f59e0b"
              img="/tokopedia.jpg"
              title="Marketing"
              type="Contract"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Topcompany;
