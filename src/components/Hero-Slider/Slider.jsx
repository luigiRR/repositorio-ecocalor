import React from 'react'
import HeroSlider, { Slide, Nav } from "hero-slider";
import savepig from '../../assets/Slider/savepig.jpg'
import innovation from '../../assets/Slider/innovation2.jpg'
import respect from '../../assets/Slider/respect.jpg';


export default function Slider() {
    
    return (
        <HeroSlider
            slidingAnimation="right_to_left"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(nextSlide, previousSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "#000"
            }}
            settings={{
                slidingDuration: 600,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 8000,
                height: "90vh"
            }}
            >
            <Slide 
                background={{
                    backgroundImage: savepig,
                }}
            >
                <div className="flex justify-center m-0 p-0 w-full h-full align-center">
                    <h1 className="uppercase m-auto pt-80 text-right text-5xl w-4/5 text-gray-50 font-bold">
                        promover el ahorro de los recursos ecologicos</h1>
                    
                </div>
            </Slide>

            <Slide
                background={{
                    top: 5,
                    backgroundImage: innovation
                }}
            >
                <div className="flex justify-center m-0 p-0 w-full h-full align-center">
                    <h1 className="uppercase m-auto pt-96 text-center text-5xl w-4/5 text-red-500 font-bold">
                        nuevos horizontes energeticos</h1>
                </div>
            </Slide>

            <Slide
                background={{
                    backgroundImage: respect
                }}
            >
                <div className="flex justify-center m-0 p-0 w-full h-full align-center">
                    <h1 className="uppercase m-auto pt-80 pr-40 text-left text-5xl w-4/5 text-blue-500 font-bold">
                        respeto por el medio ambiente</h1>
                </div>
            </Slide>

            <Nav
                position={{
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)"
                }}
            />
           
        </HeroSlider>
    )
}
