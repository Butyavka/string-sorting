import React, {useEffect, useState} from 'react';
import {selectHandler} from "../utils";
import Box from "./Box";

const Board = ({items, options, color}) => {

    const [sortedItems, setSortedItems] = useState(items);
    const [select, setSelect] = useState('date');

    useEffect(() => {
        if (items.length > 1) {
            setSortedItems(selectHandler(select, items));
        } else {
            setSortedItems(items);
        }
    }, [items]);

    return (
        <Box color={color}>
            {sortedItems.length > 0 ? (
                <>
                    <select
                        defaultValue='date'
                        className='select'
                        onChange={(e) => {
                            setSelect(e.target.value);
                            selectHandler(e.target.value, sortedItems);
                        }}>
                        {options.map(option => (
                            <option key={option.name} name={option.name} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                    <ul className='list'>
                        {sortedItems.map(item => (
                            <li className='item' key={item.value}>
                                {item.value} {item.count ? <span>x{item.count}</span> : null}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Данные отсутствуют</p>
            )}
        </Box>
    );
};

export default Board;