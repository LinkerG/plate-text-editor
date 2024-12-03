'use client';

import React from 'react';

import { cn } from '@udecode/cn';
import {
  CommentNewSubmitButton,
  CommentNewTextarea,
} from '@udecode/plate-comments/react';

import { buttonVariants } from './button';
import { inputVariants } from './input';

export function CommentCreateForm() {
  return (
    <div className="flex w-full space-x-2">
      <div className="flex grow flex-col items-end gap-2">
        <CommentNewTextarea className={inputVariants()} />

        <CommentNewSubmitButton
          className={cn(buttonVariants({ size: 'sm' }), 'w-[90px]')}
        >
          Comment
        </CommentNewSubmitButton>
      </div>
    </div>
  );
}
