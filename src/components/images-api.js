import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "5tIHeNlvOTskSLbZ_aIavcwIE4hWbuOA7EVwGAmxgoY";

export const fetchImagesWithTopic = async (query, page, per_page = 12) => {
  try {
    const response = await axios.get("/search/photos", {
      params: { client_id: key, query, page, per_page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
