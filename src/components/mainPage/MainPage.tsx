import { FirstBlock } from "./mainPageComponents/FirstBlock";
import { SecondBlock } from "./mainPageComponents/SecondBlock";
import { ThirdBlock } from "./mainPageComponents/ThirdBlock";
import { FourthBlock } from "./mainPageComponents/FourthBlock";
import { FifthBlock } from "./mainPageComponents/FifthBlock";
import { SixthBlock } from "./mainPageComponents/SixthBlock";
import { SeventhBlock } from "./mainPageComponents/SeventhBlock";
import { EightBlock } from "./mainPageComponents/EightBlock";
import { useEffect } from "react";

export function MainPage() {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
  }, []);

  return (
    <>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
      <SeventhBlock />
      <EightBlock />
    </>
  );
}
