const findDestinationIdByName = (destinations=[] , name) => {
   return destinations?.filter((dest) => dest.name == name)[0];
}; 

export default findDestinationIdByName;