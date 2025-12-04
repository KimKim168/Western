import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePage } from '@inertiajs/react';
import { Globe, Languages } from 'lucide-react';
export function LanguageSwitcher() {
    const { locale } = usePage().props; // comes from backend
    return (
        <Select
            defaultValue={locale || 'en'} // fallback English
            onValueChange={(val) => {
                window.location.href = `/lang/${val}`; // redirect to language route
            }}
        >
            <SelectTrigger className="text-base items-center font-semibold justify-center text-white border-none shadow-none [&>svg]:text-white [&_svg]:w-4 [&_svg]:h-3">
            <Globe className='text-white w-6 h-6 mr-1' size={7}/>
                <SelectValue placeholder="Select language"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className='text-whit font-semibold text-base'>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="kh">Khmer</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
