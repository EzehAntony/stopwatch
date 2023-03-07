"use client";

import styles from "./page.module.css";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(g("#main *"), { visibility: "visible", duration: 1 });
      gsap.from(g("#clock"), { rotate: 30, fill: "black", duration: 1 });
      gsap.from(
        g("#main h1"),
        {
          x: -50,
          opacity: 0,
          onComplete: () => {
            router.push("/home");
          },
        },
        0.4
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <main ref={ref} id="main" className={styles.main}>
      <svg id="clock" width="150" height="150" fill="white" viewBox="0 0 16 16">
        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z" />
      </svg>
      <h1 className={poppins.className}>Stopwatch</h1>
    </main>
  );
}
