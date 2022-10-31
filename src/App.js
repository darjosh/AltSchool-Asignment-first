import ButtonContainer from "./Components/ButtonContainer";
import Cover from "./Components/Cover";
import Screen from "./Components/Screen";
import Button from "./Components/Button";
import CalcProvider from "./context/CalcuContext";


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="], 
];

function App() {
  return (
    <CalcProvider>
      <Cover>
        <Screen />
        <ButtonContainer>
          {btnValues.flat().map((btn, i) => (
            <Button
            value={btn}
            key={1}
            />
          ))}
        </ButtonContainer>
      </Cover>
    </CalcProvider>
  );
}

export default App;
