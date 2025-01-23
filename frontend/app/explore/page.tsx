import Display from "@/components/Display";
import TextToSpeech from "@/components/TextToSpeech";
import WhatIfComponent from "@/components/WhatIfComponent";
import React from "react";

const Explore = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto  overflow-clip">
      <Display />
      <WhatIfComponent />
      <TextToSpeech text="Journey Through Time Explore Key Eras in History" startItself={true} className="hidden" />
    </main>
  );
};

export default Explore;
