export default function TabButton(props) {
    function handleClick() {
        alert("Image path changed")
        props.onClick();
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}