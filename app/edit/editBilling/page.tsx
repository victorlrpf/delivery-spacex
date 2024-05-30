import Dropdown from "@/app/_components/dropdown";
import FooterButtons from "@/app/_components/footer";
import Form from "@/app/_components/form";
import HeaderCont from "@/app/_components/header";
import Maps from "@/app/_components/maps";

const editBilling = () => {
    return ( 
        <>
        <div className="flex mt-2 border-b-2">
            <div className="flex mb-2 p-4 gap-3">
                <HeaderCont />
                <h2 className=" font-extrabold text-xl">Edit billing address</h2>
            </div>
        </div>
        <div className="p-4">
            <h2 className="text-base font-semibold mb-4">Planet</h2>
            <Dropdown />
        </div>

        <div className="p-4">
            <Maps/>
        </div>

        <div className="p-4">
            <Form/>
        </div>

        <div>
            <FooterButtons/>
        </div>
        </>
     );
}
 
export default editBilling;