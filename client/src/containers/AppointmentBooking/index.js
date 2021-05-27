import React, {useState} from 'react';
import moment from 'moment';
import { Form, Button, Row, Col, Card, DatePicker, TimePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function AppointmentBooking() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const userDetail = useSelector(state => state.user.userDetail);

  const onFinish = (formValues) => {
    console.log(formValues)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const disabledDate = (current) => (current && current < moment().endOf('day'));

  return (
    <Row type="flex" justify="center" style={{minHeight: '100vh'}}>
      <Col>
        <div className="slot-header-wrapper">
          <span className="login-page-header">Add Your Availability</span>
        </div>
        <Card>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: 'Please select date!',
                },
              ]}
            >
              <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate}/>
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[
                {
                  required: true,
                  message: 'Please select time!',
                },
              ]}
            >
              <TimePicker.RangePicker format={'HH:mm'}/>
            </Form.Item>

            {error && <span>{error}</span>}

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
