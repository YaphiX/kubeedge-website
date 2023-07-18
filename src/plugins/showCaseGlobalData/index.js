/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require("path");
const pluginContentPage = require("@docusaurus/plugin-content-blog");

/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
async function showcaseGlobalDataPlugin(context, options) {
  const currentLocale = context.i18n.currentLocale;
  const showCaseDir =
    currentLocale === "zh"
      ? path.join(context.siteDir, "i18n/zh/docusaurus-plugin-content-page")
      : path.join(context.siteDir, "src/pages/showcase");
  const showcasePlugin = await pluginContentPage.default(context, {
    ...options,
    routeBasePath: "showcase",
    path: showCaseDir,
    id: "showcaseGlobalDataPlugin",
  });

  return {
    name: "showcase-global-dataPlugin",
    async loadContent() {
      const content = await showcasePlugin.loadContent();

      return content;
    },
    contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;

      setGlobalData({ showcaseGlobalData: content.blogPosts });
    },
  };
}

showcaseGlobalDataPlugin.validateOptions = pluginContentPage.validateOptions;

module.exports = showcaseGlobalDataPlugin;
