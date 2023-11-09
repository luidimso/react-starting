export default function TabButton(props) {
    function handleClick() {
        alert("Hello");
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}