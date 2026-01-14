import Hero from "@/app/componenets/Hero";
import Doctors from "@/app/componenets/Doctors";
import Testimonials from "@/app/componenets/Testimonials";
import Services from "./componenets/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Doctors />
      <Services />
      <Testimonials />
    </>
  );
}