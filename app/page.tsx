"use client";
import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Tabs from "./components/Courses/Courses";
import Mentor from "./components/Mentor/Mentor";
import Students from "./components/Students/Students";
import Newsletter from "./components/Newsletter/Newsletter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function page() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Banner />
        <Companies />
        <Tabs />
        <Mentor />
        <Students />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default page;
