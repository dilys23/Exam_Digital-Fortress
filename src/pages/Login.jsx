import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'test@example.com' && password === 'password123') { 
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="w-full min-h-screen pl-28 bg-[#131619] justify-between items-center gap-28 inline-flex overflow-x-hidden">
            <div className="self-stretch flex-col justify-between items-center inline-flex ml-[200px]">
                <div className="h-[520px] flex-col justify-start items-start gap-16 flex pt-[200px]">
                    <div className="self-stretch h-24 flex-col justify-start items-start gap-6 flex mb-100">
                        <div className="self-stretch">
                            <span className="text-white text-4xl font-normal leading-[44px]">Hello,</span>
                            <span className="text-white text-4xl font-medium leading-[44px]"> </span>
                            <span className="text-[#4d62e5] text-4xl font-bold leading-[44px]">Digital Fortress</span>
                        </div>
                        <div className="self-stretch text-[#6f767e] text-lg font-medium leading-7 tracking-tight">
                            Log in to platform to start creating magic.
                        </div>
                    </div>
                    <div className="self-stretch h-[360px] flex-col justify-center items-start gap-12 flex">
                        <div className="self-stretch h-[120px] flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch h-12 rounded-xl flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch h-12 px-4 bg-[#1a1d21] rounded-xl shadow border border-[#82dbf7] flex items-center">
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-full bg-[#1a1d21] text-white placeholder-[#82dbf7] outline-none"
                                    />
                                </div>
                            </div>
                            <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch h-12 px-4 bg-[#1a1d21] rounded-xl border flex items-center">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-full bg-[#1a1d21] text-[#6f767e] placeholder-[#6f767e] outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="justify-start items-start gap-4 flex">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 bg-[#1a1d21] border border-[#363a3d] rounded"
                                />
                                <div className="text-[#cdcecf] text-base font-medium leading-normal tracking-tight">Remember me</div>
                            </div>
                            <div className="text-[#82dbf7] text-base font-semibold leading-normal tracking-tight">Forgot Password?</div>
                        </div>
                        <button
                            className="self-stretch h-12 px-6 py-2 bg-[#b6f09c] rounded-xl flex justify-center items-center gap-3 inline-flex"
                            onClick={handleLogin}
                        >
                            <div className="text-white font-semibold">Log in</div>
                        </button>
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="text-[#6f767e] text-base font-semibold leading-normal tracking-tight">Don’t have an account?</div>
                            <div className="text-[#82dbf7] text-base font-semibold leading-normal tracking-tight">Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[720px] self-stretch px-14 pt-[576px] pb-14 rounded-tl-3xl rounded-bl-3xl flex-col justify-end items-center inline-flex bg-login">
                <div className="self-stretch h-[392px] flex-col justify-start items-start gap-14 inline-flex">
                    <div className="self-stretch text-white text-[32px] font-semibold leading-10 -mt-[200px]">
                        Digital Fortress has been a game-changer for our content creation process.<br /><br />
                        The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
                    </div>
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
