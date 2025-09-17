import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center mt-4">
        <h1 className="text-3xl text-indigo-400">Hey, GSAP</h1>
    </div>
  );
};

export default App;
