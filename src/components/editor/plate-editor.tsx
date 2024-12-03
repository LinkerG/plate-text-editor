'use client';

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Value } from '@udecode/plate-common';
import { Plate } from '@udecode/plate-common/react';

import { useCreateEditor } from '@/components/editor/use-create-editor';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';

interface Props {
  initialText?: Value;
  readonly?: boolean;
}

export function PlateEditor({ initialText, readonly = false }: Props) {
  const editor = useCreateEditor();
  if (initialText) editor.children = initialText;

  const handleExport = () => {
    const markdown = editor.api.markdown.serialize();
    const data = editor.children;
    const comments = editor.plugins.comment.optionsStore.get.comments();
    console.log('markdown :>> ', markdown);
    console.log('data :>> ', data);
    console.log('comments :>> ', comments);
  };

  // TODO: add style to editor so it looks like paper

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate readOnly={readonly} editor={editor}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>
        <div className="mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={handleExport}
          >
            Exportar a consola
          </button>
        </div>
      </Plate>
    </DndProvider>
  );
}
