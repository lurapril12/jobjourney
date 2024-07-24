import { GrAnnounce } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaDotCircle } from "react-icons/lia";

/* eslint-disable react/prop-types */
const RecommendedJob = () => {
  const Categories = ({ image, title, opening }) => {
    return (
      <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
        <span className="flex items-center gap-x-4">
          <img src={image} alt="" width={30} /> <p>{title}</p>
        </span>
        <p>{opening} Openings</p>
      </div>
    );
  };

  const Recommended = ({
    time,
    type,
    title,
    amount,
    country,
    job,
    bgColor,
    color,
  }) => {
    return (
      <div
        className="w-full rounded-[10px] shadow mb-8 lg:mb-0"
        style={{ borderLeft: `6px solid ${color}` }}
      >
        <div className="bg-white w-full p-8 rounded-t-[10px]">
          <span className="flex items-center justify-between">
            <span className="flex-1 md:flex items-start lg:gap-x-4 lg:text-2xl text-lg">
              <button
                className="p-4 rounded-md border-none outline-none md:mb-0 mb-4"
                style={{ backgroundColor: `${bgColor}` }}
              >
                <GrAnnounce size={30} style={{ color: `${color}` }} />
              </button>
              <p>Type: {type}</p> <p>Time: {time} month ago</p>
            </span>
            <HiOutlineHeart className="text-2xl" />
          </span>
          <div className="md:pl-24">
            <p className="lg:text-2xl font-semibold md:mt-0 mt-4">{title}</p>
            <p className="text-xl pt-4">IDR: {amount} / month</p>
          </div>
        </div>
        <div
          className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border-solid border-[#e2e4e7]"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="flex-1 md:flex items-center gap-x-8 text-2xl">
            <span className="flex items-center gap-x-3">
              <IoLocationOutline className="text-2xl" style={{ color: `${color}` }} />
              <p className="text-xl font-light">{country}</p>
            </span>
            <span className="flex items-center gap-x-3 lg:py-0 py-4">
              <LiaDotCircle className="text-2xl" style={{ color: `${color}` }} />
              <p className="text-xl font-light">{job}</p>
            </span>
          </div>
          <button className="bg-white rounded-full text-black border-[#e2e4e7] text-lg font-bold py-3 px-8 outline-none border-none shadow hoverBtn">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f3f3f4]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center md:justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Recommended Jobs
          </h2>
          <span className="md:flex gap-x-4">
            <button className="bg-primary rounded-full md:my-0 my-4 text-white font-bold py-3 px-8 outline-none border-none hoverBtn">
              Latest Job
            </button>
            <button className="bg-transparent border border-solid border-[#e2e4e7] text-lg text-black rounded-full md:my-0 my-4 font-bold py-3 px-8 outline-none shadow-white hoverBtn">
              Most Recent
            </button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">Explore the latest job openings</p>
        <div className="xl:flex gap-x-8 mt-16">
          <div className="xl:w-2/5">
            <div className="bg-white rounded-[10px] py-8 pl-6 mb-4">
              <h2 className="text-2xl font-semibold">Job Categories</h2>
            </div>
            <div className="flex flex-col gap-y-4">
              <Categories image="/car_icon.png" title="Automotive" opening="3" />
              <Categories image="/programmer_icon.png" title="Programmer" opening="5" />
              <Categories image="/analyst.png" title="Analyst" opening="2" />
              <Categories image="/marketing.png" title="Marketing" opening="4" />
            </div>
          </div>
          <div className="xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4">
            <Recommended
              amount="5000000-6000000"
              bgColor="#f3f3f4"
              color="#4b4efc"
              type="Permanent"
              country="Indonesia"
              job="Automotive"
              time="3"
              title="Lead Automotive Engineer"
            />
            <Recommended
              amount="5000000-9000000"
              bgColor="#f3f3f4"
              color="#40E0D0"
              type="Contract"
              country="Indonesia"
              job="Analyst"
              time="3"
              title="Data Analyst Specialist"
            />
            <Recommended
              amount="6000000-10000000"
              bgColor="#f3f3f4"
              color="red"
              type="Contract"
              country="Indonesia"
              job="Programmer"
              time="3"
              title="Frontend Developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedJob;