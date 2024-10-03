function InputSpace(props) {
    const {type,placeholder,text}=props;
  return (
    <>
      <div className="flex justify-center items-center ">
        <label htmlFor=""> {text}
        <input
          id="price"
          name="price"
          type={type}
          placeholder={placeholder}
          className="block w-96 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-3"
        />
        </label>
      </div>
    </>
  );
}
export default InputSpace;
