import { IoSend } from "react-icons/io5";
import { useState } from "react";
import useSendmessage from "../../context/useSendmessage.js";
function TypeSend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendmessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[8vh]  bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" bg-black border border-gray-700 rounded-xl outline-none mt-1 px-4 py-3 w-full "
          />
        </div>
        <button>
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}
export default TypeSend;
