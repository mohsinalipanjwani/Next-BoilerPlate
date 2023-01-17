import React, { lazy, Suspense } from "react";

const loadable = (
  importFunc: any,
  options?: { fallback?: Element | React.ReactElement | null },
) => {
  const { fallback = null } = options || {};
  const LazyComponent = lazy(importFunc);
  // eslint-disable-next-line react/display-name
  return (props: any) => (
    //@ts-ignore
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
