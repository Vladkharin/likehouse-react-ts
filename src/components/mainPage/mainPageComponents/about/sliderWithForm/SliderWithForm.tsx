import { useState } from "react";
import { Form } from "./Components/Form";

import { Slider } from "./Components/Slider";

export function SliderWithForm() {
  const [slide, setSlide] = useState<number>(0);

  return (
    <div className="secondBlock__slider">
      <Form slide={slide} />
      <Slider slide={slide} setSlide={setSlide} />
    </div>
  );
}
