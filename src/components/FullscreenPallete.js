import { useState } from "react";
import sound from '../src_notify.mp3'

function FullscreenPallete({ handlePalette, palleteData }) {
    const colors = palleteData.colors;
    const blocksPerRow = 5;
    const blockWidth = `${100 / blocksPerRow}%`;
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [displayColor, setDisplayColor] = useState(null);

    const handleReturn = () => {
        handlePalette("");
    }

    const displayOnColorOnScreen = (color) => {
        setDisplayColor(color);
        setTimeout(() => {
            setDisplayColor(null);
        }, 1000);
    }

    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
    }

    const copyColor = (color) => {
        navigator.clipboard.writeText(color);
    }

    return (
        <div class="w-full h-full flex flex-col">
            <div class="pl-[2%] w-full h-[50px] bg-white font-bold text-black flex items-center">
                <p onClick={handleReturn} class="cursor-pointer">← Back</p>
            </div>
            <div className="flex flex-wrap w-full h-full">
                {colors.map((color, index) => (
                    <div
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                        style={{
                            backgroundColor: color.color,
                            width: blockWidth,
                            fontWeight: "bold"
                        }}
                    >
                        {hoveredIndex === index && (
                            <button className="text-m absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-4 py-1 rounded border border-white"
                                onClick={() => {
                                    playSound();
                                    copyColor(color.color);
                                    displayOnColorOnScreen(color.color);
                                }}>
                                COPY
                            </button>
                        )}
                        <span class="absolute bottom-0 right-0 p-2">{color.name.toUpperCase()}</span>
                    </div>
                ))}
            </div>
            {displayColor && (
                <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: displayColor }}>
                    <span className="text-white text-3xl font-bold">COLOR: {displayColor.toUpperCase()}</span>
                </div>
            )}
        </div>
    );
}

export default FullscreenPallete;