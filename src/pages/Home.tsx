import React, { useState } from 'react';

interface DashboardCard {
  title: string;
  value: string;
}

interface SuggestedResource {
  id: number;
  image: string;
  title: string;
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dashboardCards: DashboardCard[] = [
    { title: "Resources Shared", value: "12" },
    { title: "Classes Joined", value: "5" },
    { title: "Peers Connected", value: "23" }
  ];

  const suggestedResources: SuggestedResource[] = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZN6X2IF0br1R13zdGS8SX4KtSzAx-fAWIs1y5ZOZIIhfPIb17nKjeWbkZKsJPi4HHPwO109vh1ihnNisV7ZGN_gd7bkOimYqpDpZhSI8IRdfEWrKt17BavoIg88jrEJfYuUL44B3_n_U_88Gr3QIkVOHWmx2YrMyYHDPHWLVzOLONNRfZNMNTizNVu2FgLvfB-0ZB5vnVX_3jy8WfNPmG5OeHD0rrJCkwjc3DP58FrJEbyPRY_9_Mnp3nC4Nv4PpUtF1AVHr5XGU",
      title: "Introduction to Economics"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDehAPPgYI7Gg5714wTSgt4OJaq93EX0N8ZnUfKqL7Tc9c_ymorxJGME8QTimW44MZOdzAhkAJk0vS-lcSEF9FZ-hBZs4xklrtmubIsV0TSMWU7XKyaT4QdDl4XQ5IiEA2Jc9F8ORNkFPZC5gy7FDvGhE3pptrgdSvlGwoJjGYMqfZvF7W3-uCHM3FQm3aZBWh6T_8TBi37Z_zgIiHBJ4QcrtlLqnsbiWI32uVkQ0tAtgx7aqVhC4AX666NsRp7BEeFKKTLPDQobtY",
      title: "Advanced Calculus Notes"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAak8Bpqd96h55yuYTIn8jikOPBzgn_feZKb6Vre8sEsikh2ByWvHsNNacwfY53iohE5i4D8o_Q_hbld8n2EAba-o8wsvBtUUAssraDT-Hi2_IL4UUsELU-rVTkjaDA0q9vrmKn7JhmLeQSUIGt2c09_zbAjdcCezDFbrc7zt0J_T1ToalKbSrp3JJdvKLA-hcMUC7EyLxjD1xT9GLpHJN1kGyFLS6GY6vzaxRMU1bAB9FJWKtv_0oA03lQ1MidW0WU53EKCkJJIbo",
      title: "Past Exam Papers - Physics 101"
    }
  ];

  const navItems = [
    { 
      icon: "House", 
      label: "Home", 
      active: true,
      svg: <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
    },
    { 
      icon: "BookOpen", 
      label: "Study", 
      active: false,
      svg: <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" />
    },
    { 
      icon: "Users", 
      label: "Classes", 
      active: false,
      svg: <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
    },
    { 
      icon: "UsersThree", 
      label: "Community", 
      active: false,
      svg: <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
    },
    { 
      icon: "User", 
      label: "Profile", 
      active: false,
      svg: <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
    }
  ];

  const handleNotificationClick = () => {
    // Add notification logic here
    console.log('Notification bell clicked');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fbfc] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-center bg-[#f8fbfc] p-4 pb-2 justify-between">
        {/* Profile Image */}
        <div className="flex items-center size-12 shrink-0">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full aspect-square size-8"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHLeeUkw2pqcgJVot4fSJhI3smgE7KIp-16nuop_1Tc78IvxkbYMC8tXNbyMuR7Mh4-gCB9G6oJXvlLCEFR7y8Mc5KGEB-ulr_g7PYuemVYpZSzru20ePUFZM-_qgrikDCQg97HeCElg2-7MAuHyvQiyL1wnQ5NBRQvvKKUJNrG1uY96xfTsJWwQhu_Qq-xYh5hg_RqF5-2plvvgNS0fRlNzMcx0E6pCXOM5QljSw2HGMyjl7aMOUUJHXZZwVD6AYx5MidVNWnIro")'
            }}
          />
        </div>

        {/* App Title */}
        <h2 className="text-[#0c191d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          EduPal
        </h2>

        {/* Notification Bell */}
        <div className="flex items-center justify-end w-12">
          <button
            onClick={handleNotificationClick}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#0c191d] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-[#e6f1f4] transition-colors"
          >
            <div className="text-[#0c191d]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <label className="flex flex-col w-full h-12 min-w-40">
          <div className="flex items-stretch flex-1 w-full h-full rounded-xl">
            <div className="text-[#458da1] flex border-none bg-[#e6f1f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for resources, classes, or peers"
              value={searchQuery}
              onChange={handleSearch}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0c191d] focus:outline-0 focus:ring-0 border-none bg-[#e6f1f4] focus:border-none h-full placeholder:text-[#458da1] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal focus:bg-[#dde9ec] transition-colors"
            />
          </div>
        </label>
      </div>

      {/* Welcome Message */}
      <h3 className="text-[#0c191d] tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2 pt-5">
        Hi, Wisdom 👋🏼 Welcome back to EduPal
      </h3>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-4 p-4">
        {dashboardCards.map((card, index) => (
          <div key={index} className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#cde3ea] bg-white hover:shadow-md transition-shadow">
            <p className="text-[#0c191d] text-base font-medium leading-normal">{card.title}</p>
            <p className="text-[#0c191d] tracking-light text-2xl font-bold leading-tight">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Suggested Resources Section */}
      <h2 className="text-[#0c191d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Suggested for you
      </h2>

      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch gap-3 p-4">
          {suggestedResources.map((resource) => (
            <div key={resource.id} className="flex flex-col flex-1 h-full gap-4 transition-transform rounded-lg cursor-pointer min-w-40 hover:scale-105">
              <div
                className="flex flex-col w-full bg-center bg-no-repeat bg-cover shadow-md aspect-square rounded-xl"
                style={{ backgroundImage: `url("${resource.image}")` }}
              />
              <p className="text-[#0c191d] text-base font-medium leading-normal">{resource.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#e6f1f4] bg-[#f8fbfc] px-4 pb-3 pt-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${
                item.active 
                  ? 'text-[#0c191d]' 
                  : 'text-[#458da1] hover:text-[#0c191d]'
              } transition-colors`}
            >
              <div className={`flex h-8 items-center justify-center ${
                item.active ? 'text-[#0c191d]' : 'text-[#458da1]'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  {item.svg}
                </svg>
              </div>
              <p className={`text-xs font-medium leading-normal tracking-[0.015em] ${
                item.active ? 'text-[#0c191d]' : 'text-[#458da1]'
              }`}>
                {item.label}
              </p>
            </a>
          ))}
        </div>
        <div className="h-5 bg-[#f8fbfc]"></div>
      </div>
    </div>
  );
};

export default Home;