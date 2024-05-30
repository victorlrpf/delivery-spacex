import { Button } from "./ui/button";

const FooterButtons = () => {
    return ( 
        <>
        <div className="fixed bottom-0 left-0 right-0 p-4 shadow-md flex justify-end space-x-2 bg-slate-300">
            <Button variant='outline' size='sm'>Cancel</Button>
            <Button variant='outline' size='sm' className=" bg-violet-700 text-white">Save Changes</Button>
        </div>
        </>
     );
}
 
export default FooterButtons;