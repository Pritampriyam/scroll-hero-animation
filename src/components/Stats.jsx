function Stats() {
  return (
    <>
      {/* =====================================
          CARD 1 - TOP CENTER
          Bright green performance card
      ====================================== */}
      <div
        className="
          stat
          absolute
          top-1
          left-[60%]
          -translate-x-[55%]
          w-83
          h-45
          p-6
          rounded-2xl
          bg-[#def54f]
          shadow-none
        "
      >
        <h2
          className="
            mt-[18px]
            ml-[12px]
            text-6xl
            font-bold
            text-black
          "
        >
          58%
        </h2>

        <p className="mt-4 text-[1.4rem] text-black">
          Increase in pick up point use
        </p>
      </div>

      {/* =====================================
          CARD 2 - TOP RIGHT
          Dark stats card
      ====================================== */}
      <div
        className="
          stat
          absolute
          top-1
          left-[71%]
          right-32
          w-83
          h-45
          p-6
          rounded-2xl
          bg-[#333333]
          shadow-xl
        "
      >
        <h2 className="text-6xl font-bold text-white">27%</h2>

        <p className="mt-2 text-2xl text-white">
          Increase in pick up point use
        </p>
      </div>

      {/* =====================================
          CARD 3 - BOTTOM CENTER LEFT
          Blue support card
      ====================================== */}
      <div
        className="
          stat
          absolute
          bottom-18
          left-[52.3%]
          -translate-x-1/2
          w-88
          h-45
          p-6
          rounded-2xl
          bg-[#6ac9ff]
          shadow-xl
        "
      >
        <h2 className="text-6xl font-bold text-black">23%</h2>

        <p className="mt-2 text-2xl text-black">
          Decreased in customer phone calls
        </p>
      </div>

      {/* =====================================
          CARD 4 - BOTTOM CENTER RIGHT
          Orange stats card
      ====================================== */}
      <div
        className="
          stat
          absolute
          bottom-18
          left-[76%]
          -translate-x-1/2
          w-88
          h-45
          p-6
          rounded-2xl
          bg-[#fa7328]
          shadow-xl
        "
      >
        <h2 className="text-6xl font-bold text-black">40%</h2>

        <p className="mt-2 text-2xl text-black">
          Decreased in customer phone calls
        </p>
      </div>
    </>
  );
}

export default Stats;