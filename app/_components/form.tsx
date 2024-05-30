import { Input } from "./ui/input";

const Form = () => {
    return ( 
        <>
        <form action="">
        <div className="flex justify-evenly gap-3">
            <div className="w-full">
                <h2>Full Name * </h2>
                <Input type='text' placeholder="Full Name" required/>
            </div>
            <div className="w-full">
                <h2>Email *</h2>
                <Input type='text' placeholder="Email" required/>
            </div>
        </div>
        <div className="mt-2">
            <h2>Endereço</h2>
            <Input type='text' placeholder="Endereço |  Caso seja marte digite os 4 digitos" required/>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
                <h2>País</h2>
                <Input type="text"/>
            </div>
            <div>
                <h2>Estado</h2>
                <Input type="text"/>
            </div>
            <div>
                <h2>Cidade</h2>
                <Input type="text"/>
            </div>
            <div>
                <h2>CEP | Zip Code</h2>
                <Input type="text"/>
            </div>
        </div>
        </form>
        </>
     );
}
 
export default Form;