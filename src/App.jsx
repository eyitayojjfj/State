import { useState } from "react"
import Hide from "./components/Hide";
import Show from "./components/Show";

function App() {
  const [showProfile, setShowProfile] = useState(false);

   return (
     <div>
      {showProfile ? (
        <Hide changeProfile={setShowProfile} />
      ) : (
        <Show changeProfile={setShowProfile} />
      )}
     </div>
   );
 }

export default App
