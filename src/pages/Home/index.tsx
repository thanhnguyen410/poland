import * as React from "react";
import "./style.scss";

export default function Home() {
  const matrix = {
    1: '',
    2: ['A','B','C'],
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R', 'S'],
    8: ['T','U','V'],
    9: ['W','X','Y', 'Z'],
  }


  const [numberString, setNumberString] = React.useState('');
  const [result, setResult] = React.useState([])

  const handleNumberString = (e: any) => {
    const { value } = e.target
    setNumberString(value)
    let valueCuted = value.split('')

    if (valueCuted.length < 2) {
      setResult([])
      return
    }

    let result:any = []

    valueCuted.forEach(function(a: string){
      for (let [key, value] of Object.entries(matrix)) {
        if (key === a) {
          result.push(value)
        }
      }
    })

    let result2:any = []
    let tempArr = [...result];
  
    for(let i = 0; i < result.length; i++) {
      tempArr.shift();
      const itemOrigin = result[i];
      for(let k = 0; k < itemOrigin.length; k++) {
        for (let j = 0; j < tempArr.length; j++){
          let a = run(itemOrigin[k], tempArr[j]);
          result2 = result2.concat(a)
        }
      }
    }

    setResult(result2)
  }
  
  const run = (letter: string, array: any []) => {
    let good: any = []
    for(let i = 0; i< array.length; i++) {
      good.push(`${letter}${array[i]}`)
    }
    return good
  }

  return (
    <div className="container">
      <div className="home">
        <div className="home-list">
          <div className="home-item">
            <div>
              <label htmlFor="">Enter number: </label>
            <input name="stringNumber" value={numberString} onChange={(e) => handleNumberString(e)} type="number"/>
            </div>
            <ul>
              {result.length > 0 && result.map((item) => (
                <li key={Math.random()}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

