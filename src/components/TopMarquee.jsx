import myLogo from "../assets/scale100million logo.png"; 

export default function TopMarquee() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/50 border-b border-white/20 py-2 flex items-center">
        {/* Logo */}
        <img
          src={myLogo}
          alt="Scale100Million Logo"
          className="h-4 md:h-5 ml-3 mr-4"
        />

        {/* Scrolling Marquee */}
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"  // ✅ lowercase
          className="text-white/80 text-sm md:text-base font-medium tracking-wide"
        >
          This isn’t just another fitness program. It’s your exit plan—for women
          who live in the sky.
        </marquee>
      </div>
    </div>
  );
}
