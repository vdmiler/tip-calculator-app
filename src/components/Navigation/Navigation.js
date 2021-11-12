import React from 'react';
import styles from './Navigation.module.scss';
import Input from '../Input/Input';
import Labels from '../Labels/Labels';
import { percents } from '../../constants';
import { connect } from 'react-redux';
import { setActiveId, setBill, setCustomPercent, setPeopleCount, setStaticPercent } from '../../store/actions/actions';
import Button from '../UI/Button/Button';

const Navigation = (props) => {
   console.log(props)
   return (
      <div className={styles.navigation}>
         <div className={styles.item + ' ' + styles._bill}>
            <Labels label="Bill" />
            <Input
               inputName="bill"
               handleChange={e => props.onSetBill(e.target.value)}
               inputValue={props.bill}
               inputPlug="0"
            />
         </div>
         <div className={styles.selection}>
            <Labels label="Select Tip %" />
            <div className={styles.options}>
               {
                  percents.map(({ id, value }, index) => {
                     return (
                        <div className={styles.option} key={index}>
                           <Button
                              type="button"
                              percent={value}
                              handleClick={e => { props.onSetStaticPercent(e.target.dataset.percent); props.onSetActiveId(id) }}
                              activeClass={props.activeId !== id || props.activeId == null ? false : true}
                              disabled={props.customPercent !== '' ? true : false}
                           >
                              {value + '%'}
                           </Button>
                        </div>
                     )
                  })
               }
               <div className={styles.option}>
                  <Input
                     inputName="custom"
                     handleKeyPress={() => props.onSetActiveId(null)}
                     handleChange={e => props.onSetCustomPercent(e.target.value)}
                     inputValue={props.customPercent}
                     inputPlug="Custom"
                     addClasses={true}
                  />
               </div>
            </div>
         </div>
         <div className={`${styles.item} ${styles._people}`}>
            <Labels label="Number of People" />
            <div className={`${styles._error_label} ${props.peopleCount !== '0' && props.peopleCount !== '' ? '' : styles._active}`}>Can't be zero or null</div>
            <Input
               inputName="people"
               handleChange={e => props.onSetPeopleCount(e.target.value)}
               inputValue={props.peopleCount}
               inputPlug="0"
               errorClasses={props.peopleCount}
            />
         </div>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      bill: state.tip.bill,
      staticPercent: state.tip.staticPercent,
      customPercent: state.tip.customPercent,
      peopleCount: state.tip.peopleCount,
      activeId: state.tip.activeId
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);