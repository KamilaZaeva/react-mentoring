import './Button.css';
export function Button({ title, onClick}) {
    return (
        <button className="myButton" onClick={onClick}>
            {title}
        </button>
    );
}