import { useStaticRendering } from 'mobx-react';

import AppStore from './appStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { appStore: {} }) {
  if (isServer) {
    return {
      appStore: new AppStore(),
    };
  }
  if (store === null) {
    store = {
        appStore: new AppStore(),
    };
  }

  return store;
}