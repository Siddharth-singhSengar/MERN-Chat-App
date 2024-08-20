import User from "./User";

function Users() {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="my-2 py-2 flex-1 overflow-y-auto "
        style={{
            maxHeight: "calc(81vh - 10vh)",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer 10+
          }}
        >
         
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
export default Users;
