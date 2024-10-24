import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function EditStatus(){

    const [hotels, setHotels] = useState([]);
    //const status = "gbomkfgbdfv,odopp+++++++++++++++++++++++";
    const id = useParams();
    console.log(id);
    useEffect(() => {
        axios.put(`http://localhost:8000/editSatutus`,{
            id,
            
        })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);

    return (
    
<div className=" relative md:top-[400px] sm:top-1">
<form class="max-w-sm mx-auto ">
  <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
  </select>
  <div className=" bottom-6">
  <button
  className=" text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >Udate Status
  </button>
  </div>
</form>

      
</div>

);
}
export default EditStatus;