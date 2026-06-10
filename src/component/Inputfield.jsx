function Inputfield({ displayValue }) {
    return (
        <>
            <input
                type="text"
                value={displayValue}
                readOnly
                placeholder="Enter number"
                className="w-[80%] h-25 m-10 p-3 border rounded-xl text-2xl text-center font-medium"
            />
        </>
    );
}
export default Inputfield;