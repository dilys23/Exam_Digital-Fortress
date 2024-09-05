import React from 'react';

function Login() {
    return (
        <div className="w-full min-h-screen pl-28 bg-[#131619] justify-between items-center gap-28 inline-flex overflow-x-hidden">
            <div className="self-stretch flex-col justify-between items-center inline-flex ml-[200px]">
                <div className="h-[520px] flex-col justify-start items-start gap-16 flex pt-[200px] ">
                    <div className="self-stretch h-24 flex-col justify-start items-start gap-6 flex mb-100">
                        <div className="self-stretch"><span className="text-white text-4xl font-normal leading-[44px]">Hello,</span><span className="text-white text-4xl font-medium leading-[44px]"> </span><span className="text-[#4d62e5] text-4xl font-bold leading-[44px]">Digital Fortress</span></div>
                        <div className="self-stretch text-[#6f767e] text-lg font-medium leading-7 tracking-tight">Log in to platform to start creating magic.</div>
                    </div>
                    <div className="self-stretch h-[360px] flex-col justify-center items-start gap-12 flex">
                        <div className="self-stretch h-[120px] flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch h-12 rounded-xl flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch h-12 px-4 bg-[#1a1d21] rounded-xl shadow border border-[#82dbf7] justify-start items-center gap-3 inline-flex">
                                    <div className="w-6 h-6 px-[3px] py-[5px] justify-center items-center flex" />
                                    <div className="grow shrink basis-0"><span className="text-white text-base font-medium leading-normal tracking-tight">candidate.digitalfortress@gmail</span><span className="text-[#cdcecf] text-base font-medium leading-normal tracking-tight"> </span><span className="text-[#82dbf7] text-base font-medium leading-normal tracking-tight">|</span></div>
                                </div>
                            </div>
                            <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch h-12 px-4 bg-[#1a1d21] rounded-xl border justify-start items-center gap-3 inline-flex">
                                    <div className="w-6 h-6 px-[5px] py-1 justify-center items-center flex" />
                                    <div className="grow shrink basis-0 text-[#6f767e] text-base font-medium leading-normal tracking-tight">Password</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="justify-start items-start gap-4 flex">
                                <div className="w-6 h-6 relative bg-[#1a1d21] rounded border border-[#363a3d]" />
                                <div className="text-[#cdcecf] text-base font-medium leading-normal tracking-tight">Remember me</div>
                            </div>
                            <div className="text-[#82dbf7] text-base font-semibold leading-normal tracking-tight">Forgot Password?</div>
                        </div>
                        <div className="self-stretch h-12 px-6 py-2 bg-[#b6f09c] rounded-xl justify-center items-center gap-3 inline-flex">
                            <div className="text-white font-semibold">Log in</div>
                        </div>
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="text-[#6f767e] text-base font-semibold leading-normal tracking-tight">Don’t have an account?</div>
                            <div className="text-[#82dbf7] text-base font-semibold leading-normal tracking-tight">Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="w-[720px] self-stretch px-14 pt-[576px] pb-14 rounded-tl-3xl rounded-bl-3xl flex-col justify-end items-center inline-flex bg-login"       >
                    <div className="self-stretch h-[392px] flex-col justify-start items-start gap-14 inline-flex">
                        <div className="self-stretch text-white text-[32px] font-semibold leading-10 -mt-[200px] ">Digital Fortress has been a game-changer for our content creation process.<br /><br />The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</div>
                        <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="w-[608px] text-white text-xl font-semibold leading-loose">Lily Alisson</div>
                            <div className="w-[608px] text-[#b6f09c] text-sm font-medium leading-tight tracking-tight">CMO at Digital Fortress</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Login;