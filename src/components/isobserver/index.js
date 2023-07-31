// @ts-ignore Wrong type
import { createRoot } from "react-dom/client";
import { InView } from "react-intersection-observer";
import ScrollWrapper from "./elements/ScrollWrapper";
import Wrapper from "./elements/Wrapper";
import {useState} from "react";
import "./style.scss";
const IntersectionObserver = () => {
  const [inView, setInView] = useState(false);

  return (
    <ScrollWrapper inView={inView}>
      <InView onChange={setInView}>
          <h2>Element is inside the viewport: {inView.toString()}</h2>
        {/* <Wrapper>
        </Wrapper> */}
      </InView>
    </ScrollWrapper>
  );
}

export default IntersectionObserver