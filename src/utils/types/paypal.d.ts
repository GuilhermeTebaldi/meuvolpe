// src/types/paypal.d.ts

export {};

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: {
          shape?: string;
          color?: string;
          layout?: string;
          label?: string;
        };
        createSubscription: (
          data: unknown,
          actions: {
            subscription: {
              create: (options: { plan_id: string }) => Promise<string>;
            };
          },
        ) => Promise<string>;
        onApprove: (data: { subscriptionID: string }) => void;
      }) => {
        render: (container: string) => void;
      };
    };
  }
}
