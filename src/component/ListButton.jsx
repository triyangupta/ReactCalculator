function ListButton({ item, onButtonClick }) {
    let itemButtons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", ".",]
    return (
        <>
            <div className="w-80 h-50 flex justify-center flex-wrap mx-auto  font-medium text-2xl">
                {itemButtons.map((item, index) => (
                    <button
                        key={index}
                        className="w-20 m-2 h-14 border rounded-xl"
                        onClick={() => onButtonClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ListButton;