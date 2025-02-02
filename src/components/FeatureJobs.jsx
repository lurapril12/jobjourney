/* eslint-disable react/prop-types */
import { FaCalculator, FaHeartPulse } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { HiGlobe } from "react-icons/hi";
import { BiChart } from "react-icons/bi";
import { HiPencilSquare } from "react-icons/hi2";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdImportContacts } from "react-icons/md";
import { PiPaintBrushThin } from "react-icons/pi";
import { TbWhirl } from "react-icons/tb";
import { TiWaves } from "react-icons/ti";

const FeatureJobs = () => {
  const Offers = ({
    icon1,
    title,
    position,
    location,
    type,
    company,
    icon2,
    bg1,
    color,
    bg2,
  }) => {
    return (
      <div className="bg-white rounded-lg px-6 py-8 flex flex-col justify-between gap-6 shadow-md transition-shadow hover:shadow-lg">
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full text-4xl"
            style={{ backgroundColor: bg1, color }}
          >
            {icon1}
          </button>
          <span>
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg">1 Opening</p>
          </span>
        </div>
        <div>
          <p className="text-2xl font-semibold">{position}</p>
          <div className="flex justify-between items-center text-xl pt-4">
            <p className="flex items-center gap-2">
              <HiGlobe className="text-2xl" /> {location}
            </p>
            <p className="text-gray-500">{type}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>
            <p className="text-gray-500 text-lg">July 23, 2024 by</p>
            <p className="text-xl font-medium">{company}</p>
          </span>
          <button
            className="rounded-lg p-2 text-white"
            style={{ backgroundColor: bg2 }}
          >
            {icon2}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#fcfaf6]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Feature Job Offers
          </h2>
          <button className="rounded-full bg-primary text-lg text-white font-bold px-8 py-3 transition-colors hover:bg-primary-dark">
            All Job Offers
          </button>
        </div>
        <p className="text-2xl mt-4 font-light">
          Know more about top companies that are hiring.
        </p>
        <div className="mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <Offers
            bg1="#f4fefe"
            bg2="black"
            color="#1ae4e8"
            company="Telkom"
            icon1={<BiChart size={40} />}
            icon2={<HiPencilSquare size={30} />}
            location="Jakarta, Indonesia"
            position="Software Engineer"
            title="Programmer"
            type="Full Time"
          />
          <Offers
            bg1="#f5fef8"
            bg2="#457b9d"
            color="#25ef75"
            company="TikTok"
            icon1={<PiPaintBrushThin size={40} />}
            icon2={<GiHamburger size={30} />}
            location="Jakarta, Indonesia"
            position="Finance Specialist"
            title="Finance"
            type="Internship"
          />
          <Offers
            bg1="#f4fefe"
            bg2="#e76f51"
            color="#d9b833"
            company="TikTok"
            icon1={<GrAnnounce size={40} />}
            icon2={<MdImportContacts size={30} />}
            location="Jakarta, Indonesia"
            position="Marketing Specialist"
            title="Marketing"
            type="Full Time"
          />
          <Offers
            bg1="#f7fcfd"
            bg2="#f4a261"
            color="#5eb9d7"
            company="Craftgenics"
            icon1={<IoPersonCircleSharp size={40} />}
            icon2={<TbWhirl size={30} />}
            location="Jakarta, Indonesia"
            position="Coordinator"
            title="Human Resources"
            type="Full Time"
          />
          <Offers
            bg1="#fff9f6"
            bg2="#457b9d"
            color="#ff8c48"
            company="Syspresoft"
            icon1={<FaHeartPulse size={40} />}
            icon2={<GiHamburger size={30} />}
            location="Jakarta, Indonesia"
            position="Coordinator"
            title="Health and care"
            type="Internship"
          />
          <Offers
            bg1="#fff9f7"
            bg2="#f4a261"
            color="#ff843d"
            company="Gramware"
            icon1={<FaCalculator size={40} />}
            icon2={<TbWhirl size={30} />}
            location="Jakarta Selatan, Indonesia"
            position="Senior Editor"
            title="Accounting"
            type="Contract"
          />
          <Offers
            bg1="#f7fcfd"
            bg2="#4895ef"
            color="#69b5fd9"
            company="DataRes"
            icon1={<IoPersonCircleSharp size={40} />}
            icon2={<GiHamburger size={30} />}
            location="Jakarta Pusat, Indonesia"
            position="Support Engineer"
            title="Customer Services"
            type="Full Time"
          />
          <Offers
            bg1="#f6f6ff"
            bg2="#e76f51"
            color="#4b4efc"
            company="Gramware"
            icon1={<GoLaw size={40} />}
            icon2={<TiWaves size={30} />}
            location="Jakarta Barat, Indonesia"
            position="Web Designer"
            title="Designer"
            type="Remote"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
