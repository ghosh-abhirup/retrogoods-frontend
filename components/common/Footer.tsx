const Footer = () => {
  return (
    <div className="w-full py-5 flex items-center justify-between text-sm">
      <div className="w-[30%]">
        <p className="font-bold mb-5 text-lg">What do we do?</p>
        <p className="">This a clone of Retrogoods e commerce website. A project to get hands on experience in DB design, Next 14, Prisma etc.</p>
      </div>
      <div>
        <p className="font-bold mb-5 text-lg">Support</p>
        <div>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Payment Provider</p>
        </div>
      </div>
      <div>
        <p className="font-bold mb-5 text-lg">Information</p>
        <div>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
