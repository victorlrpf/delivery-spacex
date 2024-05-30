import { ChevronLeftIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeaderCont = () => {
    return ( 
        <>
        <Button
          variant='outline'
          size='icon'
          className="h-fit p-0 text-black hover:bg-transparent"
          >
            <Link href='/'>
              <ChevronLeftIcon size={26} className="text-black"/>
            </Link>
          </Button>
        </>
     );
}
 
export default HeaderCont;