export default function TabButton(props) {
    function handleClick() {
        props.onClick();
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}