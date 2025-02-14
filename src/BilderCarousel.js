import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
    "jyn.jpeg",
    "galen.jpeg",
    "din.jpeg",
    "stranger.jpeg",
 ]


export default function BilderCarousel(){
    const containerRef = useRef(null);
    
    useEffect(() => {
      
        const duration = 12;

        
        gsap.to(containerRef.current, {
            rotation: 360,
            duration: duration,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%", 
        });
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                width: "300px",
                height: "300px",
                margin: "50px auto",
            }}
        >
            {images.map((src, index) => {
                const angle = (index / images.length) * (2 * Math.PI);
                const x = 120 * Math.cos(angle); 
                const y = 120 * Math.sin(angle); 

                return (
                    <img
                        key={index}
                        src={src}
                        className="image"
                        alt={`Bild ${index + 1}`}
                        style={{
                            position: "absolute",
                            width: "80px",
                            height: "80px",
                            borderRadius: "10px",
                            objectFit: "cover",
                            left: "50%",
                            top: "50%",
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    />
                );
            })}
        </div>
    );
}