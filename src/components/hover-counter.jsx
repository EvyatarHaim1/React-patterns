import withCounter from './updated-component';

const HoverCounter = ({count, increment}) => {
    return <div>
        <h1 onMouseOver={increment}>clicked {count} times</h1>
    </div>
}

export default withCounter(HoverCounter);