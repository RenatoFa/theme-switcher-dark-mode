import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
background:${props=> props.theme.theme.background};
color:${props => props.theme.theme.color};
font-size:18px;
font-family: sans-serif;

li {
    line-height:36px;
}

`;


const TodoList = ()=>{
    return (
        <List>

           
        <ul>
            <li>
                Fazer Café
            </li>
            <li>
                Entrar na comunidade da Rocketseat
            </li>
            <li>
                Estudar React.js
            </li>
        </ul>
        </List>
    )
}



export default TodoList;