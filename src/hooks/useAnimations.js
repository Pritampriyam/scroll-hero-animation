import { useEffect } from "react";
import gsap from "gsap";

function useAnimations() {
  useEffect(() => {
    /* =====================================
       SELECT REQUIRED ELEMENTS
    ====================================== */
    const car = document.querySelector(".car");
    const progressThumb = document.querySelector(".progress");
    const greenFill = document.querySelector(".green-fill");
    const statCards = document.querySelectorAll(".stat");

    /* =====================================
       ANIMATION STATE
       progress = target scroll progress
       current  = smoothed progress
    ====================================== */
    let progress = 0;
    let current = 0;

    /* =====================================
       INITIAL CARD STATE
       Hidden below their final position
    ====================================== */
    gsap.set(statCards, { y: 30 });

    /* =====================================
       CUSTOM TRIGGER POINTS
       Controls when each card appears
    ====================================== */
    const cardTriggers = [0.12, 0.32, 0.55, 0.78];

    /* =====================================
       MAIN UPDATE LOOP
       Runs every frame
    ====================================== */
    const update = () => {
      const carWidth = car.offsetWidth;

      // Controls final car travel distance
      const maxMove = window.innerWidth - carWidth / 3;

      // Smooth follow motion
      current += (progress - current) * 0.3;

      // Current car X position
      const moveX = current * maxMove;

      /* ---------------------------------
         CAR MOVEMENT
      ---------------------------------- */
      gsap.set(car, {
        x: moveX,
        force3D: true,
      });

      /* ---------------------------------
         CUSTOM SCROLLBAR THUMB
      ---------------------------------- */
      const thumbHeight = 64;

      gsap.set(progressThumb, {
        top: current * (window.innerHeight - thumbHeight),
      });

      /* ---------------------------------
         GREEN TRACK FILL
      ---------------------------------- */
      gsap.set(greenFill, {
        width: moveX + carWidth * 0.18,
      });

      /* ---------------------------------
         STAT CARD APPEAR ANIMATION
      ---------------------------------- */
      statCards.forEach((card, index) => {
        const showAt = cardTriggers[index];

        if (current >= showAt) {
          // Animate only when card is hidden
          if (card.style.display === "none") {
            gsap.set(card, { display: "block" });

            gsap.fromTo(
              card,
              {
                y: 30,
                scale: 0.9,
              },
              {
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              }
            );
          }
        } else {
          // Hide card before trigger point
          gsap.set(card, {
            display: "none",
            y: 30,
            scale: 0.9,
          });
        }
      });

      // Keep loop running
      requestAnimationFrame(update);
    };

    /* =====================================
       MOUSE WHEEL INPUT
       Converts wheel scroll into progress
    ====================================== */
    const handleWheel = (event) => {
      event.preventDefault();

      progress += event.deltaY * 0.0005;
      progress = Math.max(0, Math.min(1, progress));
    };

    /* =====================================
       EVENT LISTENERS
    ====================================== */
    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("resize", update);

    // Start animation loop
    update();

    /* =====================================
       CLEANUP
    ====================================== */
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", update);
    };
  }, []);
}

export default useAnimations;