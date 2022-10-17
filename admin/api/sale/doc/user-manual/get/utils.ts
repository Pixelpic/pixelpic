import axios from 'axios';

export const loadImage = async (url?: string | null) => {
  if (url) {
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer',
    });
    return Buffer.from(data, 'utf-8');
  }
  return Promise.reject();
};
