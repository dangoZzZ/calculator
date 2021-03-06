import { Button } from "antd"
import { operatorKeys, utilKeys } from "./helper"
import CalcStyle from '../styles/calc.module.css'

// utility buttons, AC, +/-, %, .(decimal)
const Util = ({ uType, result, setResult, setAllClear, curOp, newNum, setNewNum }:
  {
    uType: utilKeys, result: string,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setAllClear: React.Dispatch<React.SetStateAction<boolean>>,
    curOp: operatorKeys,
    newNum: boolean,
    setNewNum: React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  // handler functions for util buttons
  const handlers = {
    '+/-': () => {
      if (result === '0' || curOp !== '=') { setResult('-0'); return setNewNum(false); }
      setResult(`${+result * -1}`);
    },
    'AC': () => {
      setAllClear(true);
      setResult('0');
      setNewNum(false);
    },
    '%': () => {
      setResult(`${+result / 100}`);
    },
    '.': () => {
      if (result.indexOf('.') !== -1) return;
      if (newNum) { setResult('0.'); return setNewNum(false); }
      setResult(`${result}.`);
    }
  }

  return (
    <>
      <Button onClick={() => handlers[uType]()} className={CalcStyle.icon} type={'primary'}
        style={{ backgroundColor: '#999999', borderColor: '#999999' }}>
        {(uType === 'AC' && result !== '0') ? 'C' : uType}
      </Button>
    </>
  )
}


export default Util

