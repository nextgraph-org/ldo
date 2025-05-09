import { solidConnectedPlugin } from "@ldo/connected-solid";
import { createLdoReactMethods } from "@ldo/react";
import { createBrowserSolidReactMethods } from "./createBrowserSolidReactMethods";

/**
 * Default exports for just Solid methods
 */
export const {
  dataset,
  useLdo,
  useMatchObject,
  useMatchSubject,
  useResource,
  useSubject,
  useSubscribeToResource,
} = createLdoReactMethods([solidConnectedPlugin]);

export const { BrowserSolidLdoProvider, useSolidAuth, useRootContainerFor } =
  createBrowserSolidReactMethods(dataset);
