import "./index.css";

const Footer = () => {
  return (
    <div className="text-light footer_bg_container bg-dark w-100 pt-5 pb-4">
      <div className="footer_width">
        <div className="col-md-4">
          <h1 className="pb-4">Work India</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="">
          <h5 className="pb-4">About Us</h5>
          <p>Home</p>
          <p>Features</p>
          <p>About</p>
          <p>Testimonial</p>
        </div>
        <div className="">
          <h5 className="pb-4">Features</h5>
          <p>How it works</p>
          <p>Privacy policy</p>
          <p>Terms of Service</p>
          <p>Refund policy</p>
        </div>
        <div className="">
          <h5 className="pb-4">Our Products</h5>
          <p>HMS</p>
          <p>HCMS</p>
          <p>Dynamic Pricing</p>
          <p>HRMS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
