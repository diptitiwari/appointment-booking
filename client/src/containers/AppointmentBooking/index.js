import React, {useState} from 'react';
import { Steps, Button, message, DatePicker } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Choose Date To Book Appointment',
  },
  {
    title: 'Second',
  },
  {
    title: 'Last',
  },
];

export default function AppointmentBooking() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }


  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {
          current === 0 &&
            <DatePicker onChange={onChange} />
        }
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
