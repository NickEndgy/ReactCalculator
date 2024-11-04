import { useState, useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');

  const firstArr = [];

  const handleButtonClick = (number) => {

    if (number == '') {
      setInputValue('');
    }

    setInputValue(prevInputValue => prevInputValue + number);

    console.log(inputValue);

    if (number == '=') {
      firstArr.push(inputValue);
      setInputValue('');

      const arr = firstArr[0].split(' ');
      console.log(arr);

      let arrRes = 0;

      for (let i = 0; i < arr.length; i++) {
        switch (arr[i + 1]) {
          case '+':
            arrRes = (Number(arr[i]) + Number(arr[i + 2]));
            break;

          case '-':
            arrRes = (Number(arr[i]) - Number(arr[i + 2]));
            break;

          case '*':
            arrRes = (Number(arr[i]) * Number(arr[i + 2]));
            break;

          case '/':
            arrRes = (Number(arr[i]) / Number(arr[i + 2]));
            break;
        }

      }



      // switch (arr[3]) {
      //   case '+':
      //     arrRes = (arrRes + (Number(arr[4])));
      //     break;
      //
      //   case '-':
      //     arrRes = (arrRes - (Number(arr[4])));
      //     break;
      // }

      setInputValue(arrRes);

    }


  }


  return (
    <div className="window">
      <input type="text" value={inputValue} readOnly />

      <div className="btns">
        <div className="bntsNumber">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('')}>C</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>

        <div className="bntsSymb">
          <button onClick={() => handleButtonClick(' + ')}>+</button>
          <button onClick={() => handleButtonClick(' - ')}>-</button>
          <button onClick={() => handleButtonClick(' * ')}>*</button>
          <button onClick={() => handleButtonClick(' / ')}>/</button>
        </div>

      </div>

    </div>
  )

}





















export default App
