import { useEffect, useState } from "react";
import Header from "./components/Header";
import PalletContainer from "./components/PalleteContainer";
import FullscreenPallete from "./components/FullscreenPallete";

function App() {

  const [paletteState, setPaletteState] = useState("");

  const handlePaletteState = (data) => {
    setPaletteState(data);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      paddingLeft: `${paletteState === "" ? '25%' : '0'}`,
      paddingRight: `${paletteState === "" ? '25%' : '0'}`
    }}>
      {paletteState === "" ? (
        <>
          <Header></Header>
          <PalletContainer handlePalette={handlePaletteState}></PalletContainer>
        </>)
        : (
          <>
            <FullscreenPallete handlePalette={handlePaletteState} palleteData={paletteState}></FullscreenPallete>
          </>)}

    </div>
  );
}

export default App;
