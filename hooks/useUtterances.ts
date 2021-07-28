import * as React from 'react';
import { useTheme } from 'next-themes';

import { siteMetadata } from '../_data/siteMetadata';

export const useUtterances = (commentNodeId: string) => {
  const config = siteMetadata.comment.utterancesConfig;
  // username/repo format
  const REPO_NAME = config.repo as string;

  const { theme, resolvedTheme } = useTheme();
  const utterancesTheme =
    theme === 'light' || resolvedTheme === 'light'
      ? config.theme
      : config.darkTheme;

  React.useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId);
    if (!scriptParentNode) return;

    // docs - https://utteranc.es/
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', REPO_NAME);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment :speech_balloon:');
    script.setAttribute('theme', utterancesTheme);
    script.setAttribute('crossorigin', 'anonymous');

    scriptParentNode.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node);
    };
  }, [REPO_NAME, commentNodeId, utterancesTheme]);
};
