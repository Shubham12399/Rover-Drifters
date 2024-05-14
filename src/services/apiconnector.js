import axios from "axios";

const apiconnector = async (method, url, bodyData, headers, params) => {
  console.log(url,method); 
    const responce = await axios({
        // Endpoint to send files
        url: url,
        method: `${method}`,
        headers: headers ? headers : null,
        // Attaching the form data
        data: bodyData ? bodyData : null,
        params: params ? params : null,
        // withCredentials:true
      }) // Handle the response from backend here
      .then((res) => {
        console.log(res.data); 
        return res;
      })
  
      // Catch errors if any
      .catch((error) => {
        console.log("err",error.response);
        return error.response;
      });

      return responce;

};

export default apiconnector;