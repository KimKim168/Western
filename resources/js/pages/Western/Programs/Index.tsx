import { usePage } from '@inertiajs/react';
import ExchangeProgram from '../components/ExchangeProgram'; // ← make sure the path is correct
import WesternLayout2 from '../WesternLayout2';

const Index = () => {
    const { programs } = usePage<any>().props;

    return (
        <WesternLayout2>
            <ExchangeProgram children={programs?.children} />
        </WesternLayout2>
    );
};

export default Index;
