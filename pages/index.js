import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Undoctor</title>
        <meta name="description" content="Un Doctor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Presenting <span style={{ color: "green" }}>UnDoctor</span>
        </h1>
        <h1>What do you want to get rid of?</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.card}>Diabetes</div>
          <div className={styles.card}>BP</div>
          <div className={styles.card}>Cholesterol</div>
          <div className={styles.card}>Digestive Disorders</div>
          <div className={styles.card}>Migrane</div>
          <div className={styles.card}>Pcos</div>
          <div className={styles.card}>Hypertension</div>
        </div>
        <h3>{`Don't worry, we will make you do that!`}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Join the waitlist"
            style={{
              padding: "10px",
              border: "1px solid lightgray",
              borderRadius: "8px",
            }}
          />
          <button
            style={{
              padding: "10px",
              border: "1px solid lightgray",
              borderRadius: "8px",
              background: "#0070f3",
              color: "white",
            }}
          >
            GO
          </button>
        </div>
        <h2>{`Coming soon...`}</h2>
        <h4 style={{ position: "fixed", bottom: "10px" }}>
          Yoga Day 21st June 2022
        </h4>
      </main>
    </div>
  );
}
