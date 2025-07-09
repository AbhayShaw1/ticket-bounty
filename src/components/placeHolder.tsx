import { LucideOctagonX } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceHolderProps = {
    label: string;
    icon?: React.ReactElement<any>;
    button?: React.ReactElement<any>;
};
const PlaceHolder = ({ label, icon = <LucideOctagonX />, button = <div /> }: PlaceHolderProps) => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
            {cloneElement(icon, {
                className: 'h-16 w-16 ',
            })}
            <h2 className="text-center text-lg">{label}</h2>
            {cloneElement(button, {
                className: 'h-10',
            })}
        </div>
    );
};
export { PlaceHolder };
