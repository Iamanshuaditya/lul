import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    id: 2,
    section: "Support",
    link: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status",
    ],
  },
];

const footer = () => {
  return (
    <div className="-mt-64 bg-[#451F49] text-white" id="first-section">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-64 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <img src={"/assets/logo/Logo2.svg"} alt="logo" className="pb-4" />
            <h3 className="mb-4 text-lg font-medium leading-9 text-white lg:mb-20">
              {" "}
              Level up your skills, and get dream <br /> job with passion.{" "}
            </h3>
            <div className="flex gap-4">
              <Link href="/">
                <img
                  src={"/assets/footer/insta.svg"}
                  alt="instagram"
                  className="footer-icons"
                />
              </Link>
              <Link href="/">
                <img
                  src={"/assets/footer/dribble.svg"}
                  alt="dribble"
                  className="footer-icons"
                />
              </Link>
              <Link href="/">
                <img
                  src={"/assets/footer/twitter.svg"}
                  alt="twitter"
                  className="footer-icons"
                />
              </Link>
              <Link href="/">
                <img
                  src={"/assets/footer/youtube.svg"}
                  alt="youtube"
                  className="footer-icons"
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="mb-9 text-xl font-semibold text-white">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-offwhite space-links mb-6 text-sm font-normal"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Stay up to date
            </h3>
            <div className="relative flex flex-row-reverse text-white focus-within:text-white">
              <input
                type="Email address"
                name="q"
                className="w-full rounded-md bg-[#6A4C6D]   py-4 pl-4 text-sm text-white focus:text-white focus:outline-none"
                placeholder="Your email address"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="submit"
                  className="focus:shadow-outline p-1 focus:outline-none"
                >
                  <img src={"/assets/footer/inputIcon.svg"} alt="inputicon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="px-4 pb-24">
        <h3 className="text-offwhite text-center">
          @2023 - All Rights Reserved by{" "}
          <Link href="https://adminmart.com/" target="_blank">
            {" "}
            Anshu Aditya
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default footer;
