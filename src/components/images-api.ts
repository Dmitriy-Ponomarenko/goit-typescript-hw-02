import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "5tIHeNlvOTskSLbZ_aIavcwIE4hWbuOA7EVwGAmxgoY";

export const fetchImagesWithTopic = async <T>(
  query: string,
  page: number,
  per_page: number = 12
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get("/search/photos", {
      params: { client_id: key, query, page, per_page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
