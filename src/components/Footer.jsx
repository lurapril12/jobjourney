import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b1f23] py-20">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-4xl text-white text-center font-semibold">
          Ready to Elevate Your Business with Innovative Solutions? Lets Get Started Today!
        </h2>
        <p className="lg:w-1/2 mx-auto text-white text-center text-xl py-8">
          Contact us now to discuss how our tailored strategies can drive your success. Were here to help you every step of the way!
        </p>
        <div className="flex justify-center my-8">
          <button className="rounded-full bg-[#ff5a00] px-8 py-3 text-white font-bold transition-colors hover:bg-[#e44b00]">
            Login to get started
          </button>
        </div>

        <section className="flex flex-wrap pt-16 justify-between gap-8">
          <div className="flex flex-col justify-between">
            <span className="flex items-center lg:text-5xl text-3xl">
              <p className="font-bold text-primary px-2">Job</p>
              <p className="font-semibold text-white">Journey</p>
            </span>
            <p className="text-white text-lg mt-4">Call us</p>
            <p className="text-white">(021) 123-4567</p>
            <p className="text-white text-lg mt-4">
              Plaza Sudirman, 3rd Floor <br />
              Jakarta, Indonesia 10250 <br /> job@journey.com
            </p>
          </div>
          <div>
            <h6 className="text-white text-2xl pb-6">Community</h6>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#" className="text-white no-underline hover:text-primary">Against Discrimination</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Invite Friends</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Gift Card</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white text-2xl pb-6">Booking Support</h6>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#" className="text-white no-underline hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white text-2xl pb-6">About</h6>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#" className="text-white no-underline hover:text-primary">How it works</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">About us</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Media</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white text-2xl pb-6">Become an employer</h6>
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#" className="text-white no-underline hover:text-primary">Post Your Job</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Business Account</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Resource Center</a></li>
              <li><a href="#" className="text-white no-underline hover:text-primary">Community</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className="container mx-auto px-6 mt-12 text-center">
        <p className="text-white">All rights reserved. Lurry</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-white transition-colors hover:text-primary" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} className="text-white transition-colors hover:text-primary" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-white transition-colors hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} className="text-white transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
