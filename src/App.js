import "./App.css";
import Typewriter from "typewriter-effect";

const bounceButtonStyle = {
  backgroundColor: "greenyellow",
  color: "black",
  margin: "100px 2px",
  cursor: "pointer",
  // border: "2px solid #4CAF50",
  borderRadius: "8px",
};
function BounceButton(props) {
  return (
    <button
      style={bounceButtonStyle}
      onClick={(e) => {
        e.preventDefault();
        window.location.href =
          "http://www.bouncelife.com/events/622024c94c917e0e2fa83090";
      }}
    >
      Get Tickets!
    </button>
  );
}

function App() {
  return (
    <div className="Riddler_div">
      <Typewriter
        options={{
          strings: [
            "Looking for Friday night plans?",
            "Did you miss the last WAYF event?",
            "Are you ready for the biggest Reunion of 2022?",
            "03-25-2022",
          ],
          autoStart: true,
          loop: true,
          onRemoveNode: {},
        }}
        // onInit={(typewriter) => {
        //   typewriter
        //     .typeString("Hello World!")
        //     .callFunction(() => {
        //       console.log("String typed out!");
        //     })
        //     .pauseFor(2500)
        //     .deleteAll()
        //     .callFunction(() => {
        //       console.log("All strings were deleted");
        //     })
        //     .start();
        // }}
      />
      <div>
        <BounceButton />
      </div>
    </div>
  );
}

export default App;
