import axios from 'axios'; // great ajax library.
import { Validator } from 'vee-validate';

const isUnique = (value) => {
  return axios.post('/api/validate/email', { email: value }).then((response) => {
    // Notice that we return an object containing both a valid property and a data property.
    return {
      valid: response.data.valid,
      data: {
        message: response.data.message
      }
    };
  });
};

// The messages getter may also accept a third parameter that includes the data we returned earlier.
Validator.extend('unique', {
  validate: isUnique,
  getMessage: (field, params, data) => {
    return data.message;
  }
});