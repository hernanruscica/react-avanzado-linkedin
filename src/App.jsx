import "./App.css";
import Contador from "./components/Contador.jsx";
import MyButtonCounter from "./components/MyButtonCounter.jsx";
import MyButtonError from "./components/MyButtonError.jsx"
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Agenda from "./components/Agenda/Agenda.jsx";
import Formulario from "./components/formulario/Formulario.jsx";
import FormularioFuncional from './components/formulario/FormularioFuncional.jsx'

function App() {
  const MyCounter01 = Contador(MyButtonCounter);
  const MyCounter02 = Contador(MyButtonCounter);

  return (
    <>
      <h1>Ejemplos del curso de React Avanzado de Linkedin</h1>
      <h2>Botones con HOCs - High Order Components</h2>
      <ErrorBoundary>
        <MyCounter01 counterName="Contador 1" />
        <MyCounter02 counterName="Contador 1"/>
        <h2>Manejo de errores</h2>
        <MyButtonError></MyButtonError>
      </ErrorBoundary>
      <h2>portals</h2>
      <Agenda />
      <FormularioFuncional></FormularioFuncional>
    </>
  );
}

export default App;
