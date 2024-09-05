import React from 'react';

import avatar from '../images/avatar.jpg'
import logo from '../images/logo.png'
function Dashboard() {
    
    return (
        <div className="w-full h-screen relative bg-[#131619] inline-flex overflow-x-hidden  ">
            <div className="w-full p-6 absolute top-0 left-0 bg-[#0d0f10] rounded-2xl border-b border-[#131619] flex justify-between items-center overflow-y-hidden">
                <div className="h-12 p-3 bg-[#1a1d21] rounded-xl flex justify-start items-center gap-3">
                    <div className="w-6 h-6 pl-0.5 pr-[3px] pt-0.5 pb-[3px] flex justify-center items-center" />
                  
                    <div className="text-[#6f767e] text-base font-normal  leading-normal">Search anything</div>
                </div>
                <div className="h-12 flex justify-end items-center gap-8">
                    <div className="flex justify-start items-start gap-8">
                        <div className="p-3 flex justify-start items-start gap-2.5">
                            <div className="w-6 h-6 relative" />
                        </div>
                        <div className="w-12 h-12 relative">
                            <div className="w-6 h-6 p-0.5 absolute left-[12px] top-[12px] flex justify-center items-center" />
                            <div className="w-3 h-3 absolute left-[24px] top-[9px] bg-[#fd5a5a] rounded-full" />
                        </div>
                        <div className="bg-[#8571ff] rounded-[48px] flex justify-center items-center">
                            <img className="w-[130px] h-[97.50px]" src={avatar} alt="placeholder" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[312px] h-[1000px] px-8 py-6 left-[12px] top-[12px] absolute bg-[#0d0f10] rounded-2xl flex-col justify-start items-center gap-[423px] inline-flex">
                <div className="flex-col justify-start items-start gap-9 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        
                        <img src={logo} alt="" />
                        
                        <div className="w-8 h-8 p-2.5 bg-[#1a1d21] rounded-2xl shadow justify-center items-center flex">
                            <div className="grow shrink basis-0 self-stretch pl-0.5 pr-[3px] pb-[0.01px] justify-center items-center inline-flex" />
                        </div>
                    </div>
                    <div className="w-[282px] h-px bg-[#272727]" />
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="w-[286px] p-3 bg-[#b6f09c] rounded-xl justify-start items-center gap-[105px] inline-flex">
                            <div className="justify-start items-center gap-3 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                    </div>
                                </div>
                                <div className="text-[#1a1d1f] text-sm font-medium  leading-tight">Dashboard</div>
                            </div>
                        </div>
                        <div className="w-[286px] p-3 rounded-[20px] justify-start items-center gap-[105px] inline-flex">
                            <div className="justify-start items-center gap-3 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                    </div>
                                </div>
                                <div className="text-[#6f767e] text-sm font-medium  leading-tight">Task</div>
                            </div>
                        </div>
                        <div className="w-[286px] p-3 rounded-[20px] justify-start items-center gap-[105px] inline-flex">
                            <div className="justify-start items-center gap-3 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                        <div className="w-3 h-[8.29px] left-[6px] top-[7.85px] absolute">
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[#6f767e] text-sm font-medium  leading-tight">Projects</div>
                            </div>
                        </div>
                        <div className="w-[286px] p-3 rounded-[20px] justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-3 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                    </div>
                                </div>
                                <div className="text-[#6f767e] text-sm font-medium  leading-tight">Schedule</div>
                            </div>
                            <div className="w-8 p-1 bg-[#b6f09c] rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-[#1a1d1f] text-base font-medium  leading-normal">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-[336px]  top-[132px] absolute flex-col justify-start items-start gap-4 inline-flex w-full bg-[#0d0f10] flex">
                <div className="text-center text-white text-[32px] font-semibold ">Dashboard</div>
                <div className="h-[766px] bg-[#0d0f10] rounded-2xl border flex-col justify-between items-start flex w-full  bg-[#0d0f10] flex ">
                    <div className="self-stretch bg-[#0d0f10] justify-start items-start inline-flex">
                        <div className="w-[340px] flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-11 px-6 py-3 bg-[#0d0f10] justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 pl-1.5 pr-[7px] bg-[#b6f09c] rounded justify-center items-center flex" />
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-[#667084] text-xs font-semibold  leading-[18px]">Project</div>
                                    <div className="w-4 h-4 p-[3.33px] justify-center items-center flex" />
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar}/>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 relative bg-[#1a1d21] rounded border border-[#363a3d]" />
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 relative bg-[#1a1d21] rounded border border-[#363a3d]" />
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 p-[5px] bg-[#b6f09c] rounded justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch px-[1.25px] py-[2.50px] justify-center items-center inline-flex" />
                                </div>
                                <img className="w-10 h-10 rounded-[200px]" src={avatar} />
                                <div className="flex-col justify-start items-start inline-flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Sisyphus</div>
                                    <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">sisyphus.com</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <div className="w-36 h-11 px-4 py-3 bg-[#0d0f10] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-[#667084] text-xs font-semibold  leading-[18px]">Last assessed</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">22 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">20 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">24 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">26 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">18 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">28 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">16 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">16 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="w-36 h-[72px] p-4 justify-start items-center inline-flex">
                                <div className="text-[#6f767e] text-sm font-normal font-['Inter'] leading-tight">16 Jan 2022</div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-11 px-6 py-3 bg-[#0d0f10] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-[#667084] text-xs font-semibold  leading-[18px]">License use</div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] px-6 py-4 justify-start items-center inline-flex">
                                <div className="justify-start items-start gap-1 flex">
                                    <div className="border border-black justify-start items-start flex">
                                        <div className="pl-1.5 pr-2 py-0.5 bg-[#0e593a] rounded-2xl justify-center items-center gap-1.5 flex">
                                            <div className="w-2 h-2 p-px justify-center items-center flex">
                                                <div className="w-1.5 h-1.5 bg-[#45e8a4] rounded-full" />
                                            </div>
                                            <div className="text-center text-[#45e8a4] text-xs font-medium  leading-[18px]">Active</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#423419] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffd666] text-xs font-medium  leading-[18px]">Customer data</div>
                                        </div>
                                    </div>
                                    <div className="justify-start items-start flex">
                                        <div className="px-2 py-0.5 bg-[#422721] rounded-2xl justify-center items-center flex">
                                            <div className="text-center text-[#ffac82] text-xs font-medium  leading-[18px]">Admin</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <div className="self-stretch h-11 px-6 py-3 bg-[#0d0f10]" />
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                            <div className="self-stretch h-[72px] p-4 justify-start items-center gap-1 inline-flex">
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 px-[2.50px] py-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                                <div className="rounded-lg justify-start items-start flex">
                                    <div className="p-2.5 rounded-lg justify-center items-center gap-2 flex">
                                        <div className="w-5 h-5 pl-[1.67px] pr-[1.81px] pt-[1.81px] pb-[1.67px] justify-center items-center flex" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-px bg-[#272727]" />
                        </div>
                    </div>
                    <div className="self-stretch h-16 flex-col justify-start items-start flex">
                        <div className="self-stretch h-px bg-[#272727]" />
                        <div className="self-stretch px-6 pt-[11px] pb-4 justify-between items-center inline-flex">
                            <div className="rounded-lg justify-start items-start flex">
                                <div className="px-3.5 py-2 bg-[#131619] rounded-lg border border-[#272727] justify-center items-center gap-2 flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Previous</div>
                                </div>
                            </div>
                            <div><span className="text-[#6f767e] text-sm font-normal  leading-tight">Page </span><span className="text-[#6f767e] text-sm font-medium  leading-tight">1</span><span className="text-[#6f767e] text-sm font-normal  leading-tight"> of </span><span className="text-[#6f767e] text-sm font-medium  leading-tight">10</span></div>
                            <div className="rounded-lg justify-start items-start flex">
                                <div className="px-3.5 py-2 bg-[#131619] rounded-lg border border-[#272727] justify-center items-center gap-2 flex">
                                    <div className="text-white text-sm font-medium  leading-tight">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;