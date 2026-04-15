import useAnimations from "../hooks/useAnimations";
import Stats from "./Stats";

function Hero() {
  // Handles car movement, progress bar, green fill, card animations
  useAnimations();

  // Title text split into letters for better spacing/control
  const titleText = "WELCOME ITZFIZZ".split("");

  return (
    <section
      className="
        hero
        relative
        flex items-center
        h-screen
        overflow-hidden
        bg-[#d9d9d9]
      "
    >
      {/* =========================
          ROAD TRACK
          Black horizontal road strip
      ========================== */}
      <div className="absolute w-full h-[27.4vh] bg-black"></div>

      {/* =========================
          GREEN PROGRESS FILL
          Expands as car moves
      ========================== */}
      <div
        className="
          green-fill
          absolute
          left-0
          w-0
          h-[27.4vh]
          bg-[#47d978]
        "
      ></div>

      {/* =========================
          MAIN TITLE
          Letter-by-letter rendering
      ========================== */}
      <div
        className="
          title
          absolute
          left-18
          z-[5]
          flex
          gap-1
          leading-none
          text-black
          font-bold
          text-5xl
          md:text-[8.5rem]
        "
      >
        {titleText.map((char, index) => (
          <span key={index} className="value-letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* =========================
          CAR IMAGE
          Moves horizontally on scroll
      ========================== */}
      <img
        src="/images/car.png"
        alt="Car"
        className="
          car
          absolute
          left-0
          z-10
          w-[50vh]
          md:w-[57vh]
        "
      />

      {/* =========================
          FLOATING STAT CARDS
      ========================== */}
      <Stats />

      {/* =========================
          CUSTOM RIGHT SCROLLBAR
          Visual scroll progress indicator
      ========================== */}
      <div
        className="
          fixed
          top-0
          right-0
          z-[9999]
          flex
          justify-center
          w-[18px]
          h-screen
          bg-[#2b2b2b]
        "
      >
        {/* Scrollbar Track */}
        <div className="relative w-[8px] h-screen bg-[#3a3a3a]">
          {/* Moving Thumb */}
          <div
            className="
              progress
              absolute
              top-0
              left-0
              w-full
              h-16
              rounded-full
              bg-[#9b9b9b]
              shadow-md
            "
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;