import { useEffect, useState } from 'react';
import Onboarding from './Onboarding';
import EduPalLogo from '../assets/images/EduPal_logo_1-removebg-preview.png';

const SplashScreen = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 300);

    const onboardingTimer = setTimeout(() => {
      setShowOnboarding(true);
    }, 4200); // Slightly shorter for snappier feel

    return () => {
      clearTimeout(timer);
      clearTimeout(onboardingTimer);
    };
  }, []);

  if (showOnboarding) {
    return <Onboarding />;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent animate-pulse"></div>
        <div className="absolute rounded-full -top-40 -left-40 w-96 h-96 bg-teal-500/30 blur-3xl animate-drift"></div>
        <div className="absolute rounded-full -bottom-40 -right-40 w-96 h-96 bg-blue-600/30 blur-3xl animate-drift-reverse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Glow + Scale + Float */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isAnimating
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-75 opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute transition-transform duration-700 scale-0 -inset-4 bg-teal-400/40 rounded-3xl blur-xl group-hover:scale-100"></div>

            {/* Logo Card */}
            <div className="relative p-6 transition-all duration-700 border shadow-2xl bg-white/95 backdrop-blur-xl rounded-3xl border-white/20 transform-gpu hover:scale-110 hover:rotate-3">
              <img
                src={EduPalLogo}
                alt="EduPal Logo"
                className="object-contain w-28 h-28 drop-shadow-2xl"
              />
            </div>

            {/* Orbiting Ring */}
            <div className="absolute border-2 rounded-full -inset-6 border-teal-400/40 animate-spin-slow"></div>
            <div className="absolute border rounded-full -inset-8 border-teal-300/30 animate-spin-reverse"></div>
          </div>
        </div>

        {/* Title */}
        <h1
          className={`text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent transition-all duration-1200 delay-500 ${
            isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          EduPal
        </h1>

        {/* Tagline with staggered word animation */}
        <div
          className={`mt-8 text-center space-y-3 transition-all duration-1000 delay-700 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-xl font-medium tracking-wide text-teal-100 md:text-2xl">
            {["Learn", "Share", "Grow", "Together"].map((word, index) => (
              <span
                key={word}
                className={`inline-block opacity-0 animate-fade-slide-up`}
                style={{ animationDelay: `${1.2 + index * 0.25}s` }}
              >
                {word}
                {index < 3 && <span className="mx-3 text-teal-300">•</span>}
              </span>
            ))}
          </p>
        </div>

        {/* Minimal Loading Indicator */}
        <div className="flex mt-16 space-x-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-teal-300 rounded-full opacity-0 animate-pulse-minimal"
              style={{ animationDelay: `${1.8 + i * 0.15}s` }}
            />
          ))}
        </div>

        {/* Subtle Progress Bar */}
        <div className="absolute w-48 h-1 overflow-hidden -translate-x-1/2 rounded-full bottom-12 left-1/2 bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-blue-400 animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;