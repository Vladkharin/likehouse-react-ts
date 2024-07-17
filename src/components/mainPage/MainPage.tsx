import { FirstBlock } from "./mainPageComponents/FirstBlock";
import { SecondBlock } from "./mainPageComponents/SecondBlock";
import { ThirdBlock } from "./mainPageComponents/ThirdBlock";
import { FourthBlock } from "./mainPageComponents/FourthBlock";
import { FifthBlock } from "./mainPageComponents/FifthBlock";
import { SixthBlock } from "./mainPageComponents/SixthBlock";
import { SeventhBlock } from "./mainPageComponents/SeventhBlock";
import { EightBlock } from "./mainPageComponents/EightBlock";
import { useEffect } from "react";

type typePropsMainPage = {
  setMainPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MainPage({ setMainPage }: typePropsMainPage) {
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
  }, []);

  return (
    <>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock setMainPage={setMainPage} />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
      <SeventhBlock />
      <EightBlock />
    </>
  );
}
