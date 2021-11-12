import React from 'react';
import styles from './Results.module.scss';
import TotalItem from '../TotalItem/TotalItem';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import { countingValues, doResetForm } from '../../functions';
import { setBill, setStaticPercent, setCustomPercent, setActiveId, setPeopleCount } from '../../store/actions/actions';

const Results = (props) => {
   const sum = countingValues(props);
   return (
      <div className={styles.results}>
         <div className={styles.totals}>
            <TotalItem
               cls="amount"
               title="Tip Amount"
               totalNumber={sum.resultAmount}
            />
            <TotalItem
               title="Total"
               totalNumber={sum.resultTotal}
            />
         </div>
         <Button
            addClasses={true}
            handleClick={() => doResetForm(props)}
         >
            Reset
         </Button>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      bill: state.tip.bill,
      staticPercent: state.tip.staticPercent,
      customPercent: state.tip.customPercent,
      peopleCount: state.tip.peopleCount,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onSetBill: e => dispatch(setBill(e)),
      onSetStaticPercent: data => dispatch(setStaticPercent(data)),
      onSetCustomPercent: e => dispatch(setCustomPercent(e)),
      onSetPeopleCount: e => dispatch(setPeopleCount(e)),
      onSetActiveId: id => dispatch(setActiveId(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);