"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Snowfall from "react-snowfall";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  //State
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [secondR, setSecondR] = useState(false);

  var interval = useRef(null);

  //Controllers
  const start = () => {
    if (secondR) {
    } else {
      setSecondR(true);
      interval.current = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);
    }
  };
  const pause = () => {
    if (secondR) {
      setSecondR(false);
      clearInterval(interval.current);
    } else {
    }
  };
  const reset = () => {
    setSecondR(false);
    clearInterval(interval.current);
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  //updates minute when second timer gets to 60 seconds
  useEffect(() => {
    if (second == 60) {
      setMinute((minute) => minute + 1);
      setSecond(0);
    } else {
    }
  }, [second]);

  //updates hour when minute timer gets to 60 minute
  useEffect(() => {
    if (minute == 60) {
      setHour((hour) => hour + 1);
      setMinute(0);
    } else {
    }
  }, [minute]);

  //resets timer when hour gets to 24 hours
  useEffect(() => {
    if (hour == 24) {
      setHour(0);
      setMinute(0);
      setSecond(0);
    } else {
    }
  }, [minute]);

  return (
    <main className={styles.main}>
      <img className={styles.watch} src="/watch.svg" alt="" />
      <div className={styles.counter}>
        <h1 className={poppins.className}>
          {hour}:{minute}:{second}
        </h1>
      </div>

      <div className={styles.buttons}>
        <button onClick={start}>
          <h3 className={poppins.className}>Start</h3>
        </button>
        <button onClick={pause}>
          <h3 className={poppins.className}>Pause</h3>
        </button>
        <button onClick={reset}>
          <h3 className={poppins.className}>Reset</h3>
        </button>
      </div>
      <Snowfall />
    </main>
  );
}
