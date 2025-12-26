import { Label } from '@/components/ui/label';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface FormLabelProps {
    id?: string;
    label: string;
    labelClassName?: string;
    required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({ id, label, labelClassName, required = false }) => {
    const { t } = useTranslation();
    return (
        <Label htmlFor={id} className={cn(`text-start`,labelClassName)}>
            {t(label)}
            {required && <span className="text-red-400">*</span>}
        </Label>
    );
};
