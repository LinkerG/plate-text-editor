import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center p-5">
      <div className="w-4/5 border" data-registry="plate">
        <PlateEditor />
        <Toaster />
      </div>
    </div>
  );
}
