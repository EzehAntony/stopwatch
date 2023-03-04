import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Poppins } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const actions = [
    { name: "length", img: "/rulers.svg" },
    { name: "area", img: "/area.svg" },
    { name: "mass", img: "/box.svg" },
    { name: "volume", img: "/volume.svg" },
    { name: "time", img: "/time.svg" },
    { name: "speed", img: "/speed.svg" },
    { name: "weight", img: "/scale.svg" },
    { name: "temperature", img: "/thermometer.svg" },
    { name: "angle", img: "/angle.svg" },
  ];
  return (
    <main className={styles.main}>
      <header>
        <h1 className={poppins.className}>Unit Converter</h1>
      </header>

      <div className={styles.search}>
        <input type="text" />
      </div>

      <div className={styles.container}>
        {actions.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt="" />
            <h3 className={poppins.className}>{card.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
