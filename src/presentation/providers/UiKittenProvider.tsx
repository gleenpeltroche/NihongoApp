import React, { PropsWithChildren } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const UiKittenProvider = ({children}: PropsWithChildren) => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {children}
    </ApplicationProvider>
  );
};

export default UiKittenProvider;
