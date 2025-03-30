'use client'
import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'

export default function PostHogTracking() {
  const posthog = usePostHog()

  useEffect(() => {
    console.log(posthog)
    const trackPageView = async () => {
      // Make the effect callback async
      if (posthog) {
        try {
          console.log('Waiting to track pageview...');
          //await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
          console.log('Tracking pageview now...');
          const response = posthog?.capture('Order Completed');
          console.log('PostHog pageview response:', response);
        } catch (error) {
          console.error('Error capturing pageview:', error);
        }
      }
    };

    trackPageView(); // Call the async function

  }, [posthog._loaded]);

  return <button onClick={() => posthog.capture('button_clicked')}>Click me</button>
}

