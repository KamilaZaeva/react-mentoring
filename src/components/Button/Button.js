import './Button.css';
export function Button({ title, onClick, className}) {
    const fullClassName = 'myButton ' + (className ? className : '');

    return (
        <button className={fullClassName} onClick={onClick}>
            {title}
        </button>
    );
}