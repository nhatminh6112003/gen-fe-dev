'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.ia.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            VIB Vietnam International Banking
          </a>
          | mar. 2022 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          UI&UX design implementing agile methodologies and best practices such
          as pixel perfect, clean design following rule
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          SmartOSC | feb. 2020 - mar. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Design layout web pages/applications pixel perfect in the projects , I
          have design almost all types of projects from Landing pages, products
          stores with registration and login, blogs, dashboards, web pages with
          a variety of sections and more from prototyping, design using Wire
          frames, Adobe Photoshop and Figma.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
