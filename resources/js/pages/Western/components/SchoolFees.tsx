const SchoolFees = () => {
    const schoolFees = [
        {
            id: 1,
            title: 'School Fees',
            long_description: `<table style="width:100%; border-collapse:collapse;">
    <thead>
        <tr>
            <th colspan="6" class='text-primary' style="text-align:center; font-size:22px; padding:12px 0;">
                Nursery to Kindergarten
            </th>
        </tr>
        <tr class='border-b-black border-b'>
            <th style="text-align:left;">Grade</th>
            <th style="text-align:left;">Sessions</th>
            <th>Yearly</th>
            <th>Termly<br>(3 months)</th>
            <th>Monthly</th>
            <th>Admin Fee</th>
        </tr>
    </thead>
    <tbody>

        <!-- N–K2 Kindergarten -->
        <tr class='border-b-0'>
            <td rowspan="3"><strong>N–K2 Kindergarten</strong></td>
            <td class='pl-0'>Afternoon</td>
            <td>$1,850</td>
            <td>$530</td>
            <td>$190</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Morning</td>
            <td>$2,050</td>
            <td>$590</td>
            <td>$210</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,250</td>
            <td>$650</td>
            <td>$230</td>
            <td>$250</td>
        </tr>

        <!-- K3 Kindergarten -->
        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

        <tr class='border-b-0'>
            <td rowspan="3"><strong>K3 Kindergarten</strong></td>
            <td class='pl-0'>Afternoon</td>
            <td>$1,950</td>
            <td>$560</td>
            <td>$200</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Morning</td>
            <td>$2,150</td>
            <td>$620</td>
            <td>$220</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,350</td>
            <td>$680</td>
            <td>$240</td>
            <td>$250</td>
        </tr>
        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>
    </tbody>
</table>
<!-- Grades 1–12 -->
<table style="width:100%; border-collapse:collapse;">
    <thead>
        <tr>
            <th colspan="6" class='text-primary' style="text-align:center; font-size:22px; padding:12px 0;">
                Grades 1–12
            </th>
        </tr>
        <tr class='border-b-black border-b'>
            <th style="text-align:left;">Grade</th>
            <th style="text-align:left;">Sessions</th>
            <th>Yearly<br>(10 Months)</th>
            <th>Semesterly<br>(5 months)</th>
            <th>Monthly</th>
            <th>Admin Fee</th>
        </tr>
    </thead>

    <tbody>
        <!-- Grades 1–3 -->
        <tr class='border-b-0'>
            <td rowspan="2"><strong>1–3</strong></td>
            <td class='pl-0'>Afternoon / Morning</td>
            <td>$1,850</td>
            <td>$1,040</td>
            <td>$220</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,150</td>
            <td>$1,200</td>
            <td>$260</td>
            <td>$250</td>
        </tr>

        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

        <!-- Grades 4–5 -->
        <tr class='border-b-0'>
            <td rowspan="2"><strong>4–5</strong></td>
            <td class='pl-0'>Afternoon / Morning</td>
            <td>$1,950</td>
            <td>$1,090</td>
            <td>$230</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,250</td>
            <td>$1,260</td>
            <td>$270</td>
            <td>$250</td>
        </tr>

        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

        <!-- Grades 6–8 -->
        <tr class='border-b-0'>
            <td rowspan="2"><strong>6–8</strong></td>
            <td class='pl-0'>Afternoon / Morning</td>
            <td>$2,050</td>
            <td>$1,150</td>
            <td>$250</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,350</td>
            <td>$1,320</td>
            <td>$280</td>
            <td>$250</td>
        </tr>

        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

        <!-- Grades 9–11 -->
        <tr class='border-b-0'>
            <td rowspan="2"><strong>9–11</strong></td>
            <td class='pl-0'>Afternoon / Morning</td>
            <td>$2,150</td>
            <td>$1,200</td>
            <td>$260</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,450</td>
            <td>$1,370</td>
            <td>$290</td>
            <td>$250</td>
        </tr>

        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

        <!-- Grade 12 -->
        <tr class='border-b-0'>
            <td rowspan="2"><strong>12</strong></td>
            <td class='pl-0'>Afternoon / Morning</td>
            <td>$2,250</td>
            <td>$1,260</td>
            <td>$270</td>
            <td>$250</td>
        </tr>
        <tr class='border-b-0'>
            <td>Full Time</td>
            <td>$2,550</td>
            <td>$1,430</td>
            <td>$310</td>
            <td>$250</td>
        </tr>
        <tr><td colspan="6" style="border-bottom:1px solid #000000;"></td></tr>

    </tbody>
</table>
`,
        },
    ];
    return (
        <div>
            {schoolFees.map((item) => (
                <div key={item.id} className="mt-6">
                    {/* Title */}
                    <h1 className="mb-8 text-3xl font-bold text-primary md:text-5xl">{item.title}</h1>

                    {/* Render long_description HTML */}
                    <div className="prose max-w-none overflow-scroll" dangerouslySetInnerHTML={{ __html: item.long_description }} />
                </div>
            ))}
        </div>
    );
};

export default SchoolFees;
