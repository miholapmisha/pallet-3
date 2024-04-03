import Pallete from "./Pallete";
import palletes from '../palletes.json';
import { useState } from "react";

function PalletContainer({ handlePalette }) {

    return (
        <div class="grid gap-y-10 gap-x-8 grid-cols-3 mt-[5%]">
            {
                palletes.map((palleteData, index) => (
                    <div onClick={() => handlePalette(palleteData)}>
                        <Pallete key={index} palleteData={palleteData} />
                    </div>
                ))
            }
        </div>
    );
}

export default PalletContainer;