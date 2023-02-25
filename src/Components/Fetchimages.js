import axios from "axios";
export const searchImages = async (searchTerm) => {
  
  const headers = {
    Authorization: `Client-ID BwAnnC-F39o4V-Vb-s2TkWA2CPO7-x-Nm3-RDpzlKVs`
};


 const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}`,{headers})
  .then(response =>  
    response
  )
  .catch(error => {
      
      console.error('Oops error..!', error);
  });

  return response
} 