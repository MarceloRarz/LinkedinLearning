import TextInput from "./componentes/TextInpult";
import styles from './app.module.css';
import Index from "./paginas";

function App() {
  return (
     <div className={styles.appContainer}>
      <Index />

      {/* <TextInput></TextInput> */}
      {/* <TextInput placeholder={'O que está aconteceu?'} maxLength={125}></TextInput> */}
      {/* <TextInput placeholder={'Novidades?'} maxLength={250}></TextInput>
      <TextInput placeholder={'Diga Algo?'} maxLength={250} value={'Valor'}></TextInput>
      <TextInput maxLength={50}></TextInput> */}
    </div>
  )
}

export default App
