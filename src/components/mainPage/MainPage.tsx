import { Information } from "./mainPageComponents/information/Information";
import { About } from "./mainPageComponents/about/About";
import { ThirdBlock } from "./mainPageComponents/ThirdBlock";
import { FourthBlock } from "./mainPageComponents/FourthBlock";
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
      <ThirdBlock />
      <FourthBlock setBodyStyle={setBodyStyle} />
      <FifthBlock />
      <SixthBlock />
      {/* <SeventhBlock /> */}
      <EightBlock />
    </>
  );
}
