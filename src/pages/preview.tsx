import { useRouter } from 'next/router';
import { PageComponent } from './[...pageUri]';
import type { Page, Post } from '@faustjs/core';
import { PostComponent } from './posts/[postSlug]';
import { client } from 'client';

export default function Preview() {
  const { query } = useRouter();
  const { usePreview } = client;

  // Use the "p" and "page_id" queries to determine if the preview is a post or page
  const { p, page_id } = query;
  const isPage = !!page_id;

  // Get the post or page from the usePreview hook.
  const postOrPage: unknown = usePreview({
    pageId: isPage ? (p as string) : undefined,
    postId: !isPage ? (p as string) : undefined,
  } as any);

  if (postOrPage === null) {
    return <>Not Found</>;
  }

  /**
   * Below we return a <PageComponent /> or <PostComponent /> based
   * on the preview type. We do this to maintain a consistent experience throughout
   * previews and actual page/post renders.
   */

  // If the preview is for a page, return a "page" component
  if (isPage) {
    return <PageComponent page={postOrPage as Page} />;
  }

  // Otherwise, return the "post" component
  return <PostComponent post={postOrPage as Post} />;
}
