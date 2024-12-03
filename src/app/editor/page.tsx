import { Value } from '@udecode/plate-common';

import { PlateEditor } from '@/components/editor/plate-editor';

export default function Page() {
  const initialText: Value = [
    {
      children: [{ text: 'Este es el editor de texto' }],
      type: 'h1',
    },
    {
      align: 'center',
      children: [{ text: 'Se puede alinear al centro' }],
      type: 'p',
    },
    {
      align: 'right',
      children: [{ text: 'Y a la derecha' }],
      type: 'p',
    },
    {
      children: [
        { bold: true, text: 'Se puede poner en negrita, ' },
        { text: 'subrayado, ', underline: true },
        { italic: true, text: 'cursiva, ' },
        {
          bold: true,
          italic: true,
          text: 'o todo a la vez',
          underline: true,
        },
        { text: '.' },
      ],
      type: 'p',
    },
  ];

  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="w-4/5 border" data-registry="plate">
        <PlateEditor initialText={initialText} />
      </div>
    </div>
  );
}
