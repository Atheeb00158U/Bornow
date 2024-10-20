import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <main>
      <div className="h-[420px] overflow-hidden">
      <img src="/footerImg.png" className="w-full h-full object-cover bg-top" alt="Footer Image" />

      </div>
    <footer className="flex flex-col text-white px-4 py-6 bg-black">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10">
        <article className="flex flex-col items-center gap-4">
          <h3 className="text-bornow-green font-inter text-sm font-bold">
            Socials
          </h3>
          <div className="flex items-center gap-3 text-2xl">
            <a href="https://twitter.com/" target="blank">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </article>
        <aside className="flex flex-wrap gap-6 font-allotrix-font px-10 justify-center my-10 md:my-[unset] md:gap-14">
          <article className="flex flex-col gap-3">
            <h3 className="text-bornow-green text-sm font-bold">
              <Link to="/">Product</Link>
            </h3>
            <ul className="text-sm">
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/termsofservice">Terms of Service</a>
              </li>
              <li>
                <a href="/refundpolicy">Refund Policy</a>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-bornow-green text-sm font-bold">
              <Link to="#">Shop</Link>
            </h3>
            <ul className="text-sm">
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Why company?</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Other Products</a>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-bornow-green text-sm font-bold">Resources</h3>
            <ul className="text-sm">
              <li>Coming Soon!</li>
            </ul>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-bornow-green text-sm font-bold">
              <Link to="/contact">Contact</Link>
            </h3>
            <ul className="text-sm">
              <li>
                <a
                  className="flex gap-1 items-center"
                  href="mailto:company@gmail.com?subject=Meeting%20Request"
                >
                  <IoMdMail />
                  company@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="flex gap-1 items-center"
                  href="tel:+1(778)874-4788"
                >
                  <IoMdCall />
                  +1 (778) 874-4788
                </a>
              </li>
              <li>
                <a className="flex gap-1 items-center" href="tel:+919840572975">
                  <IoMdCall />
                  +91 9840572975
                </a>
              </li>
            </ul>
          </article>
        </aside>
      </div>
      <aside className="flex justify-between items-center border-t-2 border-solid border-t-bornow-green pt-6 md:mx-32">
        <div className="w-[80px]">
          <Link to={"/"}>
            <img src={Logo} alt="bornow" className="max-h-full max-w-full" />
          </Link>
        </div>
        <div className="bg-[#161617] text-[13px] font-light py-1 px-4 rounded-2xl font-inter text-[white] transition-all duration-300 ease-out border-[1px] border-solid hover:border-allotrix-std">
          <button>Shop Now </button>
        </div>
      </aside>
    </footer>
    </main>

  );
};

export default Footer;
