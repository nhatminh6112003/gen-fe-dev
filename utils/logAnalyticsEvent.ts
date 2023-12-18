'use client';
import { logEvent } from 'firebase/analytics';
import analytics from '@/firebase/firebase';
async function logAnalyticsEvent(eventName: string, eventValue: {}) {
  return (
    analytics &&
    logEvent(analytics, eventName, {
      ...eventValue
    })
  );
}

export default logAnalyticsEvent;
