import { Information } from "./mainPageComponents/information/Information";
import { About } from "./mainPageComponents/about/About";
import { Catalog } from "./mainPageComponents/catalog/Catalog";
import { Technology } from "./mainPageComponents/technology/Technology";
import { FifthBlock } from "./mainPageComponents/FifthBlock";
import { SixthBlock } from "./mainPageComponents/SixthBlock";
// import { SeventhBlock } from "./mainPageComponents/SeventhBlock";
import { EightBlock } from "./mainPageComponents/EightBlock";
import React, { SetStateAction, useEffect } from "react";

type MainPageProps = {
  setBodyStyle: React.Dispatch<SetStateAction<string>>;
};

export function MainPage({ setBodyStyle }: MainPageProps) {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
    document.title = "Каркасные дома | Like House";
  }, []);

  return (
    <>
      <Information setBodyStyle={setBodyStyle} />
      <About />
      <Catalog />
      <Technology />
      <FifthBlock />
      <SixthBlock />
      {/* <SeventhBlock /> */}
      <EightBlock />
    </>
  );
}
