import React, { useState, useEffect } from "react";

function Home() {
    // State to control image and text visibility
    const [isImage1Clicked, setImage1Clicked] = useState(false);
    const [isImage2Clicked, setImage2Clicked] = useState(false);
    const [isSpinning, setIsSpinning] = useState(true);

    const [visibleImages1, setVisibleImages1] = useState(0);
    const [visibleImages2, setVisibleImages2] = useState(0);
    const [visibleText1, setVisibleText1] = useState(0);
    const [visibleText2, setVisibleText2] = useState(0);

    const text1 = "I have a PhD in Artificial Intelligence from NTNU and experience in front-end development using React.js and Tailwind. My education and practical skills help me work on projects by combining AI knowledge with front-end development abilities.".split(" ");
    const text2 = "In my free time, I enjoy shopping, trying new styles, and staying up to date with fashion trends. Swimming is another activity I love, as it keeps me fit and refreshed. I also spend quality time with my wonderful husband and our lovely baby son, which brings me joy. Additionally, I have a background in clothes design and tailoring, which I learned while working with my mother. This experience has helped me develop a creative eye for finding innovative solutions.".split(" ");
    
    // Handle clicks for the first button (image group)
    const handleImage1Click = () => {
        setImage1Clicked(true);
        setImage2Clicked(false);
        setVisibleImages1(1); // Start showing images for group 1
        setVisibleImages2(0);
        setVisibleText1(0); // Reset text visibility for group 1
    };

    // Handle clicks for the second button (image group)
    const handleImage2Click = () => {
        setImage2Clicked(true);
        setImage1Clicked(false);
        setVisibleImages2(1); // Start showing images for group 2
        setVisibleImages1(0);
        setVisibleText2(0); // Reset text visibility for group 2
    };

    // Effect to handle image appearance one by one for the first set
    useEffect(() => {
        if (isImage1Clicked && visibleImages1 < 4) {
            const timer = setTimeout(() => {
                setVisibleImages1((prev) => prev + 1);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isImage1Clicked, visibleImages1]);

    // Effect to handle text appearance word by word for the first set
    useEffect(() => {
        if (isImage1Clicked && visibleImages1 === 4 && visibleText1 < text1.length) {
            const timer = setTimeout(() => {
                setVisibleText1((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isImage1Clicked, visibleImages1, visibleText1, text1.length]);

    // Effect to handle image appearance one by one for the second set
    useEffect(() => {
        if (isImage2Clicked && visibleImages2 < 4) {
            const timer = setTimeout(() => {
                setVisibleImages2((prev) => prev + 1);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isImage2Clicked, visibleImages2]);

    // Effect to handle text appearance word by word for the second set
    useEffect(() => {
        if (isImage2Clicked && visibleImages2 === 4 && visibleText2 < text2.length) {
            const timer = setTimeout(() => {
                setVisibleText2((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isImage2Clicked, visibleImages2, visibleText2, text2.length]);

    // Effect to handle spinning text animation on start
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinning(false);
        }, 3000); // 2 seconds spin duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="relative flex justify-center bg-[#E0C2BE] items-center h-screen p-4">
                <button onClick={handleImage1Click} className="  focus:outline-none">
                    
                    <img
                        src="ntnu.png"
                        alt="University Building"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2  top-[20%] left-[79%] lg:left-[49%] z-20 ${visibleImages1 >= 1 ? 'opacity-100' : 'opacity-25'}`}
                    />

                    
                    <img
                        src="newtailwind.png"
                        alt="Tailwind Logo"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[47%] left-[79%] lg:left-[66%] sm:rotate-[0deg] md:rotate-[0deg] lg:rotate-[6deg] z-40 ${visibleImages1 >= 3 ? 'opacity-100' : 'opacity-25'}`}
                    />

                    
                    <img
                        src="newreact.png"
                        alt="React Logo"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[30%] left-[79%] lg:left-[60%] sm:rotate-[0deg] md:rotate-[0deg] lg:rotate-[-4deg] z-30 ${visibleImages1 >= 2 ? 'opacity-100' : 'opacity-25'}`}
                    />

                    
                    <img
                        src="ai.png"
                        alt="AI Graphic"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[65%] left-[79%] lg:left-[60%] sm:rotate-[0deg] md:rotate-[0deg] lg:rotate-[-15deg] z-50 ${visibleImages1 >= 4 ? 'opacity-100' : 'opacity-25'}`}
                    />
                </button>
                
                {isImage1Clicked && (
                    <div className="absolute text-xs lg:text-base sm:text-sm lg:top-[10%] sm:top-[30%] sm:left-[37%] lg:left-[72%] z-50 text-black w-1/4 font-playfair">                  
                        <div className="text-black">
                            {text1.slice(0, visibleText1).join(" ")}
                        </div>
                    </div>
                )}

                <button onClick={handleImage2Click} className="focus:outline-none">
                    
                    <img
                        src="newswiming.jpg"
                        alt="Swimming"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[18%] lg:top-[65%] left-[20%] lg:left-[37%] sm:rotate-[0deg] lg:rotate-[15deg] z-70 ${visibleImages2 >= 3 ? 'opacity-100' : 'opacity-25'}`}
                    />

                   
                    <img
                        src="newfamily.jpg"
                        alt="Family Silhouette"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[49%]  lg:top-[72%] left-[20%] lg:left-[48%] sm:rotate-[0deg] lg:rotate-[5deg] z-60 ${visibleImages2 >= 4 ? 'opacity-100' : 'opacity-25'}`}
                    />

                   
                    <img
                        src="shopping.png"
                        alt="Shopping"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[28%]  lg:top-[30%] left-[20%] lg:left-[38%] sm:rotate-[0deg] lg:rotate-[5deg] z-10 ${visibleImages2 >= 1 ? 'opacity-100' : 'opacity-25'}`}
                    />

                   
                    <img
                        src="fashion.png"
                        alt="Fashion Design"
                        className={`w-32 h-28 sm:w-44 sm:h-36 object-cover rounded-3xl hover:opacity-100 hover:scale-110 absolute transform -translate-x-1/2 -translate-y-1/2 top-[70%] lg:top-[47%] left-[20%] lg:left-[33%] sm:rotate-[0deg] lg:rotate-[-7deg] z-90 ${visibleImages2 >= 2 ? 'opacity-100' : 'opacity-25'}`}
                    />
                </button>
                
                {isImage2Clicked && (
                    <div className="absolute lg:text-base text-xs sm:text-sm sm:top-[30%] sm:left-[37%] lg:top-[10%]  lg:left-[2%] z-50 text-black w-1/4 font-playfair">
                        <p className="text-black">
                            {text2.slice(0, visibleText2).join(" ")}
                        </p>
                    </div>
                )}

               
                <h1  className={`absolute text-center text-lg sm:text-3xl lg:text-5xl font-semibold text-black font-greatvibes lg:top-[44%] top-[23%] sm:top-[23%] left-[38%] lg:left-[42%] z-20 ${isSpinning ? 'animate-ping' : 'animate-pulse'}`} style={{ animationDuration: '5s' }}>
                        Hoda Nikpour
                </h1>
            </div>
        </>
    );
}

export default Home;
