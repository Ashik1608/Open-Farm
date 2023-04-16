import axios from "axios";

export const request = async (requestOptions) => {
  let response;
  try {
    const { data } = await axios({
      ...requestOptions,
    });
    response = { data };
  } catch (error) {
    response = { error };
  }
  return response;
};

export const getPlaylistItems = async (workshop_id) => {
  const options = {
    method: "GET",
    url: `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${workshop_id}&key=AIzaSyDV_o21MSx3_dEqGAenAA2nYGppSnjLdNU`,
  };
  const response = await request(options);
  return response;
};

export const getAllPlaylist = async (key) => {
  const word = encodeURI(key);
  const options = {
    method: "GET",
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${word}&maxResults=21&order=viewCount&key=AIzaSyDV_o21MSx3_dEqGAenAA2nYGppSnjLdNU`,
  };
  const response = await request(options);
  return response;
};

export const getAllBooks = async () => {
  const options = {
    method: "GET",
    url: "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json",
  };
  const response = await request(options);
  return response;
};
