import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 22px;
font-size: 18px;
width: 100%;
gap: 10px;
font-weight: bold;
& input{
   outline: none;
   padding: 10px 12px;
   border-radius: 12px;
   border: 1px solid #e6e8e9;
   background: e6e8e9;
   width: 100%;
}
`;

const Cell = styled.div`
display: flex;
flex-direction: row;
padding: 10px 15px;
font-size: 14px;
border-radius: 2px;
align-items: center;
width: 100%;
border: 1px solid #e6e8e9;
font-weight: normal;
justify-content: space-between;
border-right: 4px solid ${(props) => (props.isExpense? "red" : "green")}
`;

const TransactionCell = (props) => {
   const deleteExpenseHandler = () => {
      props.deleteTransaction(props.payload.id);
   };

   return (
      <Cell isExpense={props.payload?.type === "EXPENSE"} >
         <span>{props.payload.desc}</span>
         <span>${props.payload.amount}</span>
         <Button onClick={deleteExpenseHandler}>Delete</Button>
      </Cell>
   );
}

const Transaction = (props) => {
   const [filteredTxn, setFilteredTxn] = useState(props.transactions);
   const [searchText, setSearchText] = useState("");

   const filteredData = () => {

      if(!searchText || !searchText.trim().length){
         setFilteredTxn(props.transactions);
         return;
      }

      let txn = [...props.transactions];
      txn = txn.filter((payload) => payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()));
      setFilteredTxn(txn);

   };

   useEffect(() => filteredData(searchText), [props.transactions]);
   return (
    <Container>Transactions
      <input placeholder="Search" value={searchText} onChange={(e) => {setSearchText(e.target.value);
      filteredData(e.target.value)}} />
      {filteredTxn.length? filteredTxn.map((payload) => (<TransactionCell payload={payload}
       deleteTransaction={props.deleteTransaction}
       />)) : "" }
    </Container>
   );
}  

export default Transaction;