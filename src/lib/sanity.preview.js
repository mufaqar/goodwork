"use client";

import definePreview  from "next-sanity/preview";

var projectId = '4yd06oe7'
var dataset = 'production'

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`);
  }

  if (!projectId) {
    throw new Error(
      `Missing projectId or dataset. Check your sanity.json or .env`
    );
  }

  export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
  });
  
  