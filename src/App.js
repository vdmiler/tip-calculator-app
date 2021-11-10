import React, { useState } from 'react';
import styles from './App.module.scss';
import Input from './components/Input/Input';
import Titles from './components/Titles/Titles';
import TotalItem from './components/TotalItem/TotalItem';
import Button from './components/UI/Button/Button';
import { percents } from './constants';

const App = () => {
  const [bill, setBill] = useState(''),
    [staticPercent, setStaticPercent] = useState(''),
    [customPercent, setCustomPercent] = useState(''),
    [peopleCount, setPeopleCount] = useState('1');

  const [activeId, setActiveId] = useState(null);

  const validateInputs = (e, setState) => {
    const value = e.target.value.replace(/\D/g, '');
    setState(value)
  }

  const handleBill = e => {
    setBill(e.target.value);
    validateInputs(e, setBill);
  }

  const handleCustomPercent = e => {
    setCustomPercent(e.target.value);
    validateInputs(e, setCustomPercent);
  }

  const handlePeopleCount = e => {
    setPeopleCount(e.target.value);
    validateInputs(e, setPeopleCount);
  }

  let selectedPercent = null,
    amount = 0,
    total = 0;

  customPercent !== '' ? selectedPercent = customPercent : selectedPercent = staticPercent;
  if (peopleCount !== '0' && peopleCount !== '') {
    amount = (bill / 100 * selectedPercent) / peopleCount;
    total = bill / 100 * selectedPercent;
  }

  amount = amount.toFixed(2);
  total = total.toFixed(2);

  const doResetForm = () => {
    setBill('');
    setStaticPercent('');
    setCustomPercent('');
    setPeopleCount('1');
    setActiveId(null)
  }
  return (
    <div className="App">
      <section className={styles.calculator}>
        <div className="_container">
          <div className={styles.body}>
            <h1 className={styles.title}>
              Splitter
            </h1>
            <div className={styles.tip}>
              <div className={styles.navigation}>
                <div className={styles.item + ' ' + styles._bill}>
                  <Titles>
                    Bill
                  </Titles>
                  <Input
                    inputName="bill"
                    handleChange={handleBill}
                    inputValue={bill}
                    inputPlug="0"
                  />
                </div>
                <div className={styles.selection}>
                  <Titles>
                    Select Tip %
                  </Titles>
                  <div className={styles.options}>
                    {
                      percents.map(({ id, value }, index) => {
                        return (
                          <div className={styles.option} key={index}>
                            <Button
                              type="button"
                              percent={value}
                              handleClick={e => { setStaticPercent(e.target.dataset.percent); setActiveId(id) }}
                              activeClass={activeId !== id || activeId == null ? '' : true}
                              disabled={customPercent !== '' ? true : false}
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
                        handleKeyPress={() => setActiveId(null)}
                        handleChange={handleCustomPercent}
                        inputValue={customPercent}
                        inputPlug="Custom"
                        addClasses={true}
                      />
                    </div>
                  </div>
                </div>
                <div className={`${styles.item} ${styles._people}`}>
                  <Titles>
                    Number of People
                  </Titles>
                  <div className={`${styles._error_label} ${peopleCount !== '0' && peopleCount !== '' ? '' : styles._active}`}>Can't be zero or null</div>
                  <Input
                    inputName="people"
                    handleChange={handlePeopleCount}
                    inputValue={peopleCount}
                    inputPlug="0"
                    errorClasses={peopleCount}
                  />
                </div>
              </div>
              <div className={styles.results}>
                <div className={styles.totals}>
                  <TotalItem
                    cls="amount"
                    title="Tip Amount"
                    totalNumber={amount}
                  />
                  <TotalItem
                    title="Total"
                    totalNumber={total}
                  />
                </div>
                <Button
                  addClasses={true}
                  handleClick={doResetForm}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
