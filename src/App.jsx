import { Navbar, Hero, Highlights, Model, Features, HowitWorks, Footer } from "./components";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <HowitWorks/>
      <Footer/>
    </main>
  );
};

export default Sentry.withProfiler(App);
