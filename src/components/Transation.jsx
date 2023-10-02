import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

/* eslint-disable react/prop-types */
function Transation({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={sign == '-' ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}
export default Transation;
