import React from 'react';

function Home() {
    return (
        <div className="bg-slate-950">
            <nav className="w-full h-14 bg-indigo-300 flex justify-between px-4 md:px-7  items-center">
                <div className="text-2xl text-indigo-800 font-semibold">Skills</div>
                <ul className="md:flex items-center hidden w-2/5 h-9 justify-evenly text-white text-xl font-semibold">
                    <li className="mx-[10px] cursor-pointer">Home</li>
                    <li className="mx-[10px] cursor-pointer">About</li>
                    <li className="mx-[10px] cursor-pointer">Contact</li>
                </ul>
                <div className="hidden md:block px-2 py-2 text-indigo-700 rounded font-bold cursor-pointer">Login/SignUp</div>
                <div className="md:hidden">
                    <a href="#" className="text-4xl">&#8801;</a>
                </div>
            </nav>
            {/* navbar ends here */}

            <header className="w-full h-auto">
                <img className="w-full hidden md:block" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
                <img className="w-full md:hidden" src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
            </header>
            {/* image section ends here */}

            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center justify-center p-10">
                <div className="w-full h-auto flex flex-wrap items-center justify-center  text-center flex-col ">
                    <p className="text-indigo-800 font-bold text-3xl md:4xl text-center">Pure HardWork,No ShortCuts</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded md:mt-4 mb-12"></div>
                </div>
                <div className="w-full flex flex-wrap justify-evenly">
                    <div className="w-46 flex flex-col items-center mb-12 gap-2">
                        <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="link-emoji" />
                        <p className="text-white font-semibold text-xl">600+</p>
                        <p className="text-white font-semibold text-xl">Different Courses</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 gap-2">
                        <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="link-emoji" />
                        <p className="text-white font-semibold text-xl">600+</p>
                        <p className="text-white font-semibold text-xl">Different Courses</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 gap-2">
                        <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="link-emoji" />
                        <p className="text-white font-semibold text-xl">600+</p>
                        <p className="text-white font-semibold text-xl">Different Courses</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-slate-950 h-auto w-100 flex flex-col items-center justify-center " >
                    <p className=" text-4xl font-bold text-indigo-800">Our Products</p>
                    <div className=" w-36 h-1 border-b-4  border-yellow-500 rounded mt-4 mb-12"></div>
                </div>
                {/* Products Sections */}
                <div className="h-auto w-[100%] flex flex-wrap flex-row justify-around items-center p-10 bg-slate-950">
                    <div className="w-64 flex flex-col justify-center items-center mb-12  rounded-xl p-2 gap-4">
                        <img className="w-40 h-50" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="" />
                        <p className="text-3xl font-bold text-white ">PW Skills Labs</p>
                        <p className="text-xl font-bold text-gray-500 flex items-center text-center justify-center">SuperCharge your project development with our robust lab.</p>
                    </div>
                    <div className="w-64 flex flex-col justify-center items-center mb-12  rounded-xl p-2 gap-4">
                        <img className="w-40 h-50" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="" />
                        <p className="text-3xl font-bold text-white ">PW Skills Labs</p>
                        <p className="text-xl font-bold text-gray-500 flex items-center text-center justify-center">SuperCharge your project development with our robust lab.</p>
                    </div>
                    <div className="w-64 flex flex-col justify-center items-center mb-12  rounded-xl p-2 gap-4">
                        <img className="w-40 h-50" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="" />
                        <p className="text-3xl font-bold text-white ">PW Skills Labs</p>
                        <p className="text-xl font-bold text-gray-500 flex items-center text-center justify-center">SuperCharge your project development with our robust lab.</p>
                    </div>
                    <div className="w-64 flex flex-col justify-center items-center mb-12  rounded-xl p-2 gap-4">
                        <img className="w-40 h-50" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="" />
                        <p className="text-3xl font-bold text-white ">PW Skills Labs</p>
                        <p className="text-xl font-bold text-gray-500 flex items-center text-center justify-center">SuperCharge your project development with our robust lab.</p>
                    </div>
                    <div className="w-64 flex flex-col justify-center items-center mb-12  rounded-xl p-2 gap-4">
                        <img className="w-40 h-50" src="https://cdn-icons-png.flaticon.com/512/1754/1754435.png" alt="" />
                        <p className="text-3xl font-bold text-white ">PW Skills Labs</p>
                        <p className="text-xl font-bold text-gray-500 flex items-center text-center justify-center">SuperCharge your project development with our robust lab.</p>
                    </div>
                </div>
                {/* Footer Starts Here  */}
                <footer className="w-full h-auto  bg-gray-900 px-10 py-10 text-white md:flex-row justify-evenly flex-wrap pt-8 flex flex-col">
                    <div className="w-full flex items-center align-center flex-col">
                        <img className="w-40 h-16" src="https://pwskills.com/images/PWSkills-white.png" alt="" />
                        <p className="my-4">Email us :support@pwskills.com</p>
                        {/* <img src="https://pwskills.com/images/iso-9001-2015.svg" alt="Image" /> */}
                    </div>
                    <div className=" h-40 md:w-40 flex flex-col justify-center items-center mb-10">
                        <h2 className="font-bold text-xl mt-4">PWSkills</h2>
                        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                            <p>About Us</p>
                            <p>FAQS</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className=" h-40 md:w-40 flex flex-col justify-center items-center mb-20">
                        <h2 className="font-bold text-xl mt-4">PWSkills</h2>
                        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                            <p>About Us</p>
                            <p>FAQS</p>
                            <p>Privacy Policy</p>

                        </div>
                    </div>
                    <div className=" h-40 md:w-40 flex flex-col justify-center items-center mb-20">
                        <h2 className="font-bold text-xl mt-4">PWSkills</h2>
                        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                            <p>About Us</p>
                            <p>FAQS</p>
                            <p>Privacy Policy</p>

                        </div>
                    </div>
                    <div className=" h-40 md:w-40 flex flex-col justify-center items-center mb-20">
                        <h2 className="font-bold text-xl mt-4">PWSkills</h2>
                        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                            <p>About Us</p>
                            <p>FAQS</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className=" h-40 md:w-40 flex flex-col justify-center items-center mb-20">
                        <h2 className="font-bold text-xl mt-4">PWSkills</h2>
                        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                        <div>
                            <p>About Us</p>
                            <p>FAQS</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </footer>
            </div >
        </div >
    );
}

export default Home;