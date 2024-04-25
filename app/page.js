import Header from "@/components/header";
import BookingSection from "@/components/booking-section";
import Details from "@/components/details";
import SignUp from "@/components/signup";
import Signin from "@/components/signin";
import Payment from "@/components/payment";

const Home = () => {
  return (
    <main className="py-8">
      <section className="container">
        <Header />
        <BookingSection />
        {/* <Details/> */}
        {/* <SignUp /> */}
        {/* <Signin /> */}
        {/* <Payment /> */}
      </section>
    </main>
  );
};

export default Home;
