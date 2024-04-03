function Pallete({palleteData }) {
    const colors = palleteData.colors;
    const blocksPerRow = 5;
    const blockWidth = `${100 / blocksPerRow}%`;

    return (
        <div className="cursor-pointer w-[300px] h-[200px] bg-white rounded px-[3%] pt-[3%] flex flex-col">
            <div className="flex flex-wrap h-full">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{ width: blockWidth, backgroundColor: color.color }}
                    >
                    </div>
                ))}
            </div>
            <div class="font-bold text-sm text-black py-[4%] flex justify-between">
                <div>{palleteData.paletteName}</div>
                <div>{palleteData.emoji}</div>
            </div>
        </div>
    );
}

export default Pallete;