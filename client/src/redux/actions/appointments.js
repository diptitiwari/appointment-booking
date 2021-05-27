import axios from 'axios';

import {createNotification} from '../../utils/notification';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

export const createAppointment = (payload) => {
  return (dispatch) => {
    axios.post(`${API_ENDPOINT}/availabilitySlot`, payload)
      .then(() => {
        createNotification('success', `Successfully created appointment`);
        dispatch(getAppointmentList());
      })
      .catch((e) => {
        createNotification('error', 'While creating appointment', e);
      })
  }
};

export const getAppointmentList = (params) => {
  return async (dispatch) => {
    try {
      const list = await axios.get(`${API_ENDPOINT}/availabilitySlot`, {params: params || {}});
      dispatch({
        type: 'SET_AVAILABLE_SLOT_LIST',
        payload: list
      });
      createNotification('success', 'Successfully retrieved appointments');
    } catch (e) {
      createNotification('error', 'While retrieving appointment', e);
    }
  }

};

export const updateAppointmentStatus = (appointmentId, payload) => {
  return async (dispatch) => {
    try {
      const list = await axios.put(`${API_ENDPOINT}/appointment/${appointmentId}/status-change`, payload);
      dispatch(getAppointmentList());
      createNotification('success', 'Successfully retrieved appointments');
    } catch (e) {
      createNotification('error', 'While retrieving appointment', e);
    }
  }
};