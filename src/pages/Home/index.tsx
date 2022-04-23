import * as React from "react";
// import "./style.scss";

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
    const valueCuted = value.split('')

    let result:any = []

    valueCuted.forEach(function(a: any){
      for (let [key, value] of Object.entries(matrix)) {
        if (key === a) {
          result.push(value)
        }
      }
    })

    let result2:any = []
    let result3:any = []

    if (result.length > 1) {
      for(let i=0;i<result.length;i++) {
        for(let j=0;j<result[i].length;j++) {
          result2.push(result[i][j])
          for(let k=0;k<result2.length;k++) {
            result3.push(result2[k].concat(result[i][j]))
          }
        }
      }
    }
    setResult(result3)
  }

  return (
    <div className="container">
      {/* <TopBar backStatus={false} headingName="Eastplayers Test" /> */}
      <div className="home">
        <div className="home-list">
          <div className="home-item">

            <div>

            <input name="stringNumber" value={numberString} onChange={(e) => handleNumberString(e)} type="number"/>
            </div>
            <ul>
              {result.length > 0 && result.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
