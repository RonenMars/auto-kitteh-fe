import { SELF_API } from '@api/index.ts';
import axios from 'axios';
import { TJSONFormat } from '@app-types/index';

export const loadData = async (): Promise<TJSONFormat> => {
  try {
    const response = await SELF_API.get('demo/data.json');
    const { data: JSONData } = response;
    return JSONData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert('General error, please try again');
    }
  }
  return {};
};
