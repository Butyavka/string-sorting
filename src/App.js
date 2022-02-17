import React, {useState} from 'react';
import './App.css'
import Board from "./components/Board";
import Input from "./components/Input";

const App = () => {
    const [inputValue, setInputValue] = useState();
    const [stringItems, setStringItems] = useState([]);
    const [numberItems, setNumberItems] = useState([]);
    const [mixedItems, setMixedItems] = useState([]);

    const addItem = (e) => {
        e.preventDefault();
        if (!Number(inputValue) && inputValue !== '' && inputValue != 0) {
            if (/[0-9]/.test(inputValue)) {
                if (!mixedItems.some(e => e.value === inputValue) && inputValue !== '') {
                    setMixedItems([...mixedItems, {value: inputValue, date: mixedItems.length}]);
                }
                return
            }
            let countItem = 0;
            let arr = []
            arr = stringItems;
            for (let i = 0; i < arr.length; i++ ){
                if (arr[i].value === inputValue) {
                    arr[i].count += 1;
                    countItem += 1;
                    break;
                }
            }
            if (countItem === 0) {arr.push({value: inputValue, count: 1, date: arr.length})}
            setStringItems([...arr]);
        } else {
            if (!numberItems.some(e => e.value === inputValue) && inputValue !== '') {
                setNumberItems([...numberItems, {value: inputValue, date: numberItems.length}]);
            }
        }
    };

    const stringSort = (a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }

    const selectHandler = (e, arr, setArr) => {
        switch (e.target.value) {
            case 'string': {
                let newArr = arr.sort((a, b) => stringSort(a.value, b.value))
                setArr([...newArr]);
                break;
            }
            case 'number': {
                let newArr = arr.sort((a, b) => {return a.value - b.value})
                setArr([...newArr]);
                break;
            }
            case 'count': {
                let newArr = arr.sort((a, b) => {return a.count - b.count})
                setArr([...newArr]);
                break;
            }
            case 'date': {
                let newArr = arr.sort((a, b) => {return a.date - b.date})
                setArr([...newArr]);
                break;
            }
            default: break;
        }
    }

    return (
        <>
            <div className='box'>
                <Board color='white'>
                    <form onSubmit={addItem}>
                        <Input inputHandler={setInputValue}/>
                    </form>
                </Board>
                <Board color='peach'>
                    {stringItems.length > 0 ? (
                        <>
                            <select
                                defaultValue='date'
                                className='select'
                                onChange={(e) => {
                                    selectHandler(e, stringItems, setStringItems)
                                }}>
                                <option name='date' value="date">По добавлению</option>
                                <option name='string' value="string">По алфавиту</option>
                                <option name='count' value="count">По количеству</option>
                            </select>
                            <ul className='list'>
                                {stringItems.map((item, index) => (
                                    <li className='item' key={item.value}>{item.value} <span>x{item.count}</span></li>
                                ))}
                            </ul>
                        </>
                    )
                    :
                    (
                    <p>Данные отсутствуют</p>
                    )}
                </Board>
            </div>
            <div className='box'>
                <Board color='purple'>
                    {numberItems.length > 0 ? (
                        <>
                            <select
                                defaultValue='date'
                                className='select'
                                onChange={(e) => {
                                    selectHandler(e, numberItems, setNumberItems)
                                }}>
                                <option name='date' value="date">По добавлению</option>
                                <option name='number' value="number">По значению</option>
                            </select>
                            <ul className='list'>
                                {numberItems.map((item, index) => (
                                    <li className='item' key={item.value}>{item.value}</li>
                                ))}
                            </ul>
                        </>
                    )
                    :
                    (
                    <p>Данные отсутствуют</p>
                    )}
                </Board>
                <Board color='black'>
                    {mixedItems.length > 0 ? (
                        <>
                            <select
                                defaultValue='date'
                                className='select'
                                onChange={(e) => {
                                    selectHandler(e, mixedItems, setMixedItems)
                                }}>
                                <option name='date' value="date">По добавлению</option>
                                <option name='string' value="string">По алфавиту</option>
                            </select>
                            <ul className='list'>
                                {mixedItems.map((item, index) => (
                                    <li className='item' key={item.value}>{item.value}</li>
                                ))}
                            </ul>
                        </>
                    )
                    :
                    (
                    <p>Данные отсутствуют</p>
                    )}
                </Board>
            </div>
        </>
    );
};

export default App;