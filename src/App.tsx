import logoDev from "../src/assets/logoDgProducoes.png";
function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-600 ">
      <div className="flex flex-col justify-center items-center gap-4 bg-white p-4  rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-purple-600 pb-10 ">
          Template - TailwindCSS!
        </h1>
        <img
          className="flex rounded-full h-52 animate-bounce shadow-2xl border border-purple-600"
          src={logoDev}
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
