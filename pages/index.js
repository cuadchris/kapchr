import Head from "next/head";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapchr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Kapchr Photography"
        message="I capture moments, and I keep them alive."
      />
      <Slider slides={SliderData} />
    </>
  );
}
