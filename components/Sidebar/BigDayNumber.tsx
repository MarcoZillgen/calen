import React, { useRef, useState, useEffect } from "react";
import { useDayContext } from "@/context/day";
import { getDayNumber } from "@/utils/date";

export default function BigDayNumber() {
  const {
    state: { selectedDay },
    dispatch: dispatchDay,
  } = useDayContext();
  const prevDayRef = useRef<HTMLDivElement>(null);
  const currentDayRef = useRef<HTMLDivElement>(null);
  const nextDayRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!hasScrolled) {
        setHasScrolled(true);
        handleScrollAnimation(e);
      }
    };

    const handleScrollEnd = () => {
      setHasScrolled(false);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  });

  function handleScrollAnimation(e: WheelEvent) {
    const direction = e.deltaY > 0 ? "next" : "prev";
    if (isAnimating) return;

    setIsAnimating(true);

    const dayChange =
      direction === "next" ? "SELECT_NEXT_DAY" : "SELECT_PREV_DAY";
    const movingDayRef = direction === "next" ? nextDayRef : prevDayRef;
    const lastDayMovement = direction === "next" ? "-100%" : "100%";

    requestAnimationFrame(() => {
      if (movingDayRef.current) {
        movingDayRef.current.style.transform = `translateY(0)`;
        movingDayRef.current.style.transition = "transform 0.3s";
      }
      if (currentDayRef.current) {
        currentDayRef.current.style.transform = `translateY(${lastDayMovement})`;
        currentDayRef.current.style.transition = "transform 0.3s";
      }
    });

    setTimeout(() => {
      dispatchDay({ type: dayChange });

      [prevDayRef, currentDayRef, nextDayRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.transition = "none";
        }
      });

      setTimeout(() => {
        [prevDayRef, currentDayRef, nextDayRef].forEach((ref, index) => {
          if (ref.current) {
            const transforms = ["-100%", "0%", "100%"];
            ref.current.style.transform = `translateY(${transforms[index]})`;
          }
        });
        setIsAnimating(false);
      }, 0);
    }, 300);
  }

  return (
    <div className="w-full relative overflow-hidden select-none py-[12rem] h-[16rem] cursor-pointer">
      <div
        className="text-[16rem] text-center select-none font-bold absolute top-0 left-0 w-full transform -translate-y-full"
        ref={prevDayRef}
      >
        {getDayNumber(new Date(selectedDay.getTime() - 86400000))}
      </div>
      <div
        className="text-[16rem] text-center select-none font-bold absolute top-0 left-0 w-full"
        ref={currentDayRef}
      >
        {getDayNumber(selectedDay)}
      </div>
      <div
        className="text-[16rem] text-center select-none font-bold absolute top-0 left-0 w-full transform translate-y-full"
        ref={nextDayRef}
      >
        {getDayNumber(new Date(selectedDay.getTime() + 86400000))}
      </div>
    </div>
  );
}
