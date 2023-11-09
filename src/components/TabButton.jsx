export default function TabButton(props) {
    function handleClick() {
        props.onClick();
    }

    return (
        <li>
            <button className={props.isSelected ? "active" : undefined} onClick={handleClick}>{props.children}</button>
        </li>
    );
}