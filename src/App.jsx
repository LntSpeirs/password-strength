import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [valores, setValores] = useState({ password: "" });

  const progreso = useRef(undefined);

  useEffect(() => {
    const longitudPassword = valores.password.length;
    progreso?.current?.classList.remove("bad", "ok", "good");

    if (longitudPassword > 1 && longitudPassword < 8) {
      progreso.current.classList.add("bad");
    } else if (longitudPassword >= 8 && longitudPassword < 12) {
      progreso.current.classList.add("ok");
    } else if (longitudPassword >= 12) {
      progreso.current.classList.add("good");
    }
  }, [valores.password]);

  const handleChange = (evento) => {
    setValores({
      ...valores,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <>
      <div className="App">
        <form>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              value={valores.password}
              onChange={handleChange}
            />
            <div className="bar-container">
              <div className="progress" ref={progreso}></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
