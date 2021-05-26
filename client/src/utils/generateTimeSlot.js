module.exports = () => {
  const slotDetail = {
    nextSlot: 30,
    startTime: '8:00',
    endTime: '20:50'
  };

  let slotTime = moment(slotDetail.startTime, "HH:mm");
  const endTime = moment(slotDetail.endTime, "HH:mm");

  const times = [];
  while (slotTime < endTime)
  {
    slotTime = slotTime.add(slotDetail.nextSlot, 'minutes');
  }
  return times;
}

function isInBreak(slotTime, breakTimes) {
  return breakTimes.some((br) => {
    return slotTime >= moment(br[0], "HH:mm") && slotTime < moment(br[1], "HH:mm");
  });
}
