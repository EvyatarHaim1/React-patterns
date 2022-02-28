import withCounter from './updated-component';

const ClickCounter = ({count, increment}) => {
    return <div>
        <button onClick={increment}>clicked {count} times</button>
    </div>
}

export default withCounter(ClickCounter);