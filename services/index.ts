import axios from 'axios';
import { useRuntimeConfig } from '#imports';

export const postData = async (body = {}): Promise<any | null> => {
  const runtimeConfig = useRuntimeConfig();

  try {
    const { data } = await axios.post(`${runtimeConfig.public.apiBaseUrl}/data`, body);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
