import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer border-2 border-black active:transition-transform active:duration-150 active:ease-out dark:border-gray-pantone',
    {
        variants: {
            variant: {
                default:
                    'text-[1.25rem] hover:bg-active hover:border-active hover:opacity-90 hover:text-white active:scale-95 active:text-[1.2rem]',
                home: 'text-xl md:text-[2.5vw] font-bold hover:bg-active hover:border-active hover:opacity-90 hover:text-white active:scale-95 active:text-[2.6vw]',
                outline:
                    ' border-none focus-visible:none hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
            },
            size: {
                default: 'w-[360px] h-[61px] rounded-3xl',
                home: 'w-full h-[74px] md:h-[7.6vw] md:min-h-[74px] rounded-4xl md:rounded-3xl',
                middle: ' w-fit px-12 py-2.5 rounded-full',
                small: 'w-fit px-6 py-1 rounded-3xl',
                icon: 'size-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(
                buttonVariants({ variant, size, className }),

                // Общие плавные переходы для всех состояний
                'transition-all duration-200 ease-in-out',
                // Специфичные для активного состояния
                // 'active:transition-transform active:duration-150 active:ease-out',
            )}
            {...props}
        />
    );
}

export { Button, buttonVariants };
