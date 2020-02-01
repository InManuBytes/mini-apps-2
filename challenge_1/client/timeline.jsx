import React from 'react';
import { Timeline, Icon, Typography } from 'antd';
const { Text } = Typography;
import utils from './utils';

const EventsTimeline = ({ events }) => {
  return (
    <Timeline mode="alternate">
      {
        events.map((event, index) => {
          const date = utils.formatDate(event.date);
          return (
            <Timeline.Item key={index}>
              <Icon type="calendar" theme="twoTone" />
              <Text style={{ color: 'rgb(24, 144, 255)' }}>
                {` ${date}`}
              </Text>
              <br />
              {/* TODO format citations */}
              {event.description}
            </Timeline.Item>
          );
        })
      }
    </Timeline>
  );
};

export default EventsTimeline;