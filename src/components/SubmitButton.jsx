

export function SubmitButton({text, onClick, type = "button", className = ""}) {
    return (
        <button 
            type={type} 
            style={{backgroundColor: "var(--secondary-color)", color: "#000", fontWeight: "bold"}}
            onClick={onClick} 
            className={`btn btn-primary ${className}`}
        >
            {text}
        </button>
    )
}