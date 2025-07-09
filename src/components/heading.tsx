import { Separator } from '@/components/ui/separator';

type HeadingProps = {
    title: string;
    description?: string;
};

const Heading = ({ title, description }: HeadingProps) => {
    return (
        <>
            <div className="px-8">
                <h1 className="text-3xl font-bold tracking-tighter">{title} Page</h1>
                {description && <p className="text-sm">{description}</p>}
            </div>
            <Separator />
        </>
    );
};
export { Heading };
