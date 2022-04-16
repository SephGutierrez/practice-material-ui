import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab'

export const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          City A
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          City B
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>
          City C
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}
