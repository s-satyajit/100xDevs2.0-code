export default function AppBar({ username, firstname }) {
  console.log(`Appbar usernmae: ${username, firstname}`);
  return (
    <div className="shadow shadow-white h-14 flex justify-between ">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello, {username}
        </div>
        <div className="flex justify-center rounded-full bg-slate-200 h-10 w-10 text-black mt-2 mr-2">
          <div className="flex flex-col justify-center h-full text-2xl2xl">
            {firstname && firstname.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
