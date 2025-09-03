import { useState, useEffect, useContext } from 'react';
import { OperandContext } from './context/OperandContext';

function Form() {
  const { operand, setOperand } = useContext(OperandContext);
  const [workingOperand, setWorkingOperand] = useState(0);

  useEffect(() => {
    setWorkingOperand(operand);
  }, [operand]);

  function handleSubmit(e) {
    e.preventDefault();
    if (workingOperand != '') {
      setOperand(parseFloat(workingOperand));
    }
  }
  return (
    <form>
      <label htmlFor="value">Calculate with: </label>
      <input
        type="number"
        id="value"
        value={workingOperand}
        onChange={(e) => setWorkingOperand(e.target.value)}
      />
      <button
        aria-label="submit"
        onClick={handleSubmit}
        disabled={workingOperand === ''}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
