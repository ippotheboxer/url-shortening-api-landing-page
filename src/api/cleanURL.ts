import axios from "axios";

export async function postLongLink(userLink: string) {
    return await axios.post("https://cleanuri.com/docs/api/v1/shorten", {
        url: userLink
    })
    .then((response) => {
        console.log(response.data);
      }, 
    (error) => {
        console.log(error);
      });
}