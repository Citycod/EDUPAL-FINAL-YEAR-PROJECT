import React from 'react';

interface OnboardingScreenProps {
  onNext: () => void;
  currentStep: number;
}

const OnboardingScreen1: React.FC<OnboardingScreenProps> = ({ onNext, currentStep }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white justify-between overflow-x-hidden font-['Manrope','Noto_Sans',sans-serif]">
      {/* Main Content */}
      <div>
        {/* Image Section */}
        <div className="container">
          <div className="px-4 py-3">
            <div 
              className="flex flex-col justify-end w-full overflow-hidden bg-white bg-center bg-no-repeat bg-cover rounded-lg min-h-80"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0Rqkt669u4CBJCkvPE1HpFgM-r-pZk-qMRrdWfqkLWjIVUss8BbZNqh300Qcuz1IQz7kZv8uzMW3YCM4tUptM2bi6HuEDFGka3Wmuj44quhsRizdA1iWnLtG350zXPj9Y-2r7AllMAfvkEWvVQJcz1xGpV2ILryYOBSAuFLo1iX2I7pxpu3dsF79ipAe7KzLJH_E2jBemyCVeP7Ad2ThUeZ1h8UF830jYMODIUe5gGP3ahwLUylVBvP3UBxBxNHgJZibOJWKsL-oM")'
              }}
            ></div>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-[#111418] tracking-tight text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Access past questions & study notes from peers
        </h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          EduPal connects you with fellow students, providing access to a wealth of study materials and past exam questions.
        </p>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Progress Dots */}
        <div className="flex flex-row items-center justify-center w-full gap-3 py-5">
          <div className={`h-2 w-2 rounded-full ${currentStep === 1 ? 'bg-[#111418]' : 'bg-[#dbe0e6]'}`}></div>
          <div className={`h-2 w-2 rounded-full ${currentStep === 2 ? 'bg-[#111418]' : 'bg-[#dbe0e6]'}`}></div>
          <div className={`h-2 w-2 rounded-full ${currentStep === 3 ? 'bg-[#111418]' : 'bg-[#dbe0e6]'}`}></div>
        </div>

        {/* Action Button */}
        <div className="flex px-4 py-3">
          <button
            onClick={onNext}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1172d4] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors duration-200"
          >
            <span className="truncate">Get Started</span>
          </button>
        </div>

        {/* Bottom Spacing */}
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default OnboardingScreen1;