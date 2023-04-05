import { useEffect, useRef } from 'react'
import './App.css'
import ViewerPC from "./ViewerPC";

function App() {
    const viewerContainer = useRef(null);

    useEffect(() => {
        new ViewerPC(viewerContainer.current);
    }, []);

  return (
      <div id="three-viewer-container" ref={ viewerContainer }
           className="height-100 w-100 position-absolute"/>
  )
}

export default App
