const handledPromise = (promise) => promise
  .then((res) => {
    if (res && res.data) {
      return { success: true, payload: { message: res.data } };
    }
    return { success: true, payload: { status: res.data.status, message: res.data.statusText } };
  })
  .catch((error) => ({
    success: false,
    payload: { status: error.response.status, message: error.message },
  }));

const handleSuccess = (reply, payload) => {
  reply
    .code(200)
    .type('application/json')
    .send(payload);
};

const handleFailure = (reply, payload) => {
  reply
    .code(payload.status)
    .type('application/json')
    .send(payload);
};

const handleReply = (reply, response) => (response.success
  ? handleSuccess(reply, response.payload) : handleFailure(reply, response.payload));

export { handleReply };
export default handledPromise;
