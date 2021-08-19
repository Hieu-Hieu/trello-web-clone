import React from 'react';
import './Column.scss';
import Task from 'components/Task/Task';

function Column() {
    return (
        <div className="column">
            <header>I can do it</header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Tomorrow will better than today because you can do that</li>
                <li className="task-item">Tomorrow will better than today because you can do that</li>
                <li className="task-item">Tomorrow will better than today because you can do that</li>
                <li className="task-item">Tomorrow will better than today because you can do that</li>
            </ul>
            <footer>Add anoter card</footer>
        </div>
    );
}

export default Column;