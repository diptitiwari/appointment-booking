import axios from 'axios';

import {createNotification} from '../../utils/notification';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

export const createAvailableSlot = (payload) => {
  return async (dispatch) => {
    try{
      await axios.post(`${API_ENDPOINT}/availabilitySlot`, payload);
      createNotification('success', 'Successfully created available for the admin');
      dispatch(getAvailableSlotList());
    } catch (e) {
      createNotification('error', 'While creating available slot', e);
    }
  }
}

export const getAvailableSlotList = async () => {
  try {
    const list = await axios.get(`${API_ENDPOINT}/availabilitySlot`);
    return {
      type: 'SET_AVAILABLE_SLOT_LIST',
      payload: list
    }
  } catch (e) {
    createNotification('error', 'While creating Catalog', e);
  }
}