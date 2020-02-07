import React, { Suspense } from "react";

export default function WaitingComponent(Component: any) {
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
