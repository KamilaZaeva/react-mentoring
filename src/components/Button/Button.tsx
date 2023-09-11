import './Button.css'

type ButtonProps = {
    title: string
    onClick: () => void
    className?: string
}

export const Button = ({ title, onClick, className }: ButtonProps) => {
    const fullClassName: string = 'myButton ' + (className ? className : '')

    return (
        <button className={fullClassName} onClick={onClick}>
            {title}
        </button>
    )
}
