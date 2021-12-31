const handledPromise = (promise) => promise
  .then((res) => {
    const response = { success: true };
    if (res && res.data) {
      return response.payload = res.data;
    }
    return response.payload = { status: res.data.status, message: res.data.statusText };
  })
  .catch((error) => ({ success: false, payload: { status: error.response.status, message: error.message } }));

export default handledPromise;
