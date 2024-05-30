const Maps = () => {
    return ( 
        <>
        <h2 className="text-base font-semibold mb-4">Map</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d208562.3741638387!2d-46.56464208919767!3d-23.537361451351238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1717106962129!5m2!1spt-BR!2sbr" 
        // className="block w-[380px] h-[190px] border-0 rounded-lg" 
        className="block w-full sm:w-[400px] md:w-[55em] lg:w-[600px] h-[190px] sm:h-[250px] md:h-[300px] lg:h-[450px] border-0 rounded-lg"
        loading="lazy"></iframe>
        </>
     );
}
 
export default Maps;