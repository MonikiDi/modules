// import axios from "axios";
import { API_KEY } from "../constans/api";

class GetDataApi {
  // async getData(url) {
  //     try {
  //         const response = await axios.get(url, {
  //             params: {
  //                 apikey: API_KEY,
  //                 limit: 100
  //             }
  //         });

  //         return response.data.data.results;
  //     } catch (error) {
  //         console.log(error.message);
  //         return false;
  //     }
  // }

async getData(url) {
      try {
          const response = await this.getResponse(url, {
              params: {
                  apikey: API_KEY,
                  limit: 100
              }
          });

          return response.data.results;
      } catch (error) {
          console.log(error.message);
          return false;
      }
  }
  getResponse(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url + `?apikey=${API_KEY}&limit=100`);
      xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status != 200) {
          alert(
            "ошибка: " + (this.status ? this.statusText : "запрос не удался")
          );
          reject();
        }
        resolve( JSON.parse(xhr.responseText));

      };
      xhr.send();
    });
  }
}

export const getDataApi = new GetDataApi();
