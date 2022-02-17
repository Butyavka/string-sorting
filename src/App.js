import React, {useState} from 'react';
import './App.css'
import Box from "./components/Box";
import Input from "./components/Input";
import Board from "./components/Board";

const App = () => {

    const [inputValue, setInputValue] = useState('');
    const [stringItems, setStringItems] = useState([]);
    const [numberItems, setNumberItems] = useState([]);
    const [mixedItems, setMixedItems] = useState([]);

    const addItem = (e) => {
        e.preventDefault();
        if (!Number(inputValue) && inputValue !== '' && Number(inputValue) !== 0) {
            if (/[0-9]/.test(inputValue)) {
                if (!mixedItems.some(e => e.value === inputValue) && inputValue !== '') {
                    setMixedItems([...mixedItems, {value: inputValue, date: mixedItems.length}]);
                    setInputValue('')
                }
                return
            }
            let countItem = 0;
            let arr = [];
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
            if (!numberItems.some(e => e.value === Number(inputValue)) && inputValue !== '') {
                setNumberItems([...numberItems, {value: Number(inputValue), date: numberItems.length}]);
            }
        }
        setInputValue('')
    };

    return (
        <>
            <div className='container'>
                <Box color='white'>
                    <form onSubmit={addItem}>
                        <Input inputHandler={setInputValue} inputValue={inputValue} placeholder={'Введите запись...'}/>
                    </form>
                </Box>
                <Board
                    items={stringItems}
                    options={[
                        {name: 'date', value: "date", text: 'По добавлению'},
                        {name: 'string', value: "string", text: 'По алфавиту'},
                        {name: 'count', value: "count", text: 'По количеству'},
                    ]}
                    color='peach'
                />
            </div>
            <div className='container'>
                <Board
                    items={numberItems}
                    options={[
                        {name: 'date', value: "date", text: 'По добавлению'},
                        {name: 'number', value: "number", text: 'По значению'},
                    ]}
                    color='purple'
                />
                <Board
                    items={mixedItems}
                    options={[
                        {name: 'date', value: "date", text: 'По добавлению'},
                        {name: 'string', value: "string", text: 'По алфавиту'},
                    ]}
                    color='black'
                />
            </div>
        </>
    );
};

export default App;