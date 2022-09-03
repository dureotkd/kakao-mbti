import React from "react";
import { useLocation } from "react-router-dom";
import {
  ProgressBar,
  Question,
  OnboardingButton,
  Loading,
} from "../components";

const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};

function Onboarding1() {
  const { state } = useLocation();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await wait(2000);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="wrap">
      <ProgressBar step={1} />
      <Question
        imageUrl={require("../assets/image/onboarding-step1-image.png")}
      />
      <OnboardingButton
        text="당연하지! 어디서 할지 고민 중이야!"
        onClick={() => {}}
      />
      <OnboardingButton
        text="음 아니 조용히 혼자 집에서 보내고 싶어 ㅠㅠ"
        onClick={() => {}}
      />
    </div>
  );
}

export default Onboarding1;
