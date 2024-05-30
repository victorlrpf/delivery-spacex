import Tabs from "./tabs/page";
import FooterButtons from "./_components/footer";
import HeaderCont from "./_components/header";

export default function Home() {
  return (
    <>
      <div className="flex mt-2 border-b-2">
        <div className="flex mb-2 p-4 gap-3">
          <HeaderCont />
          <h2 className=" font-extrabold text-xl">Address</h2>
        </div>
      </div>
      <div className=" container mx-auto mt-5">
        <Tabs/>
      </div>
      <div>
        <FooterButtons/>
      </div>
    </>
  );
}
