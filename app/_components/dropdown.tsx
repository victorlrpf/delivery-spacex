import { ChevronDownIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Dropdown = () => {

  return (
    <div className="w-full border-2 border-blue-500 rounded-lg">
        {/* <select name="planet" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="marte">Marte</option>
            <option value="terra">Terra</option>
        </select> */}
        <DropdownMenu>
            <DropdownMenuTrigger className='flex justify-between w-full pl-3 pr-10 py-2 text-base border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>Select Planet <ChevronDownIcon/> </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem >Terra</DropdownMenuItem>
                <DropdownMenuItem >Marte</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default Dropdown;
