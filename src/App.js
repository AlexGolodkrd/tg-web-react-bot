import "./App.css";
const tg = window.Telegram.WebApp;
function App() {
  const onClose = () => {
    tg.close();
  };
  const useEffect = () => {
    tg.ready();
  };

  return (
    <div className="App">
      {" "}
      <button onclick={onClose}>Close</button>
    </div>
  );
}

export default App;
