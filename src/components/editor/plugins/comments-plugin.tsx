'use client';

import { CommentsPlugin } from '@udecode/plate-comments/react';

import { CommentsPopover } from '@/components/plate-ui/comments-popover';

export const commentsPlugin = CommentsPlugin.configure({
  options: {
    // TODO: IKER: Configure with tokens ???
    myUserId: 'Alumno 123',
  },
  render: { afterEditable: () => <CommentsPopover /> },
});
