import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import  FormContainer  from "./partials/FormContainer"
import theme from "./theme";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className='app'>
            <FormContainer/>
        </div>
      </ThemeProvider>
  );
}

export default App;
