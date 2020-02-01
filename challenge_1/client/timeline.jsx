import React from 'react';
import { Timeline } from 'antd';

const EventsTimeline = ({ events }) => {
  return (
    <Timeline mode="alternate">
      {
        events.map(event => {
          return <Timeline.Item>{event.description} 2015-09-01</Timeline.Item>
        })
      }
    </Timeline>
  );
};

export default EventsTimeline;