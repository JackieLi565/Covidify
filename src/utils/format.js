export default function getListFormat(data) {
    return (
        [
            {
                left: 'Covidify: ',
                middle: 'Bloor & Lansdowne',
                right: ''
            },
            {
                left: 'ITEM #',
                middle: 'Covid-19',
                right: 'Amount',
            }, //head
            {
                left: '01',
                middle: 'Cases',
                right: data.cases,
            },
            {
                left: '02',
                middle: 'Test-Completed',
                right: 'data.test',
            },
            {
                left: '03',
                middle: 'Deaths',
                right: data.deaths,
            },
            {
                left: '04',
                middle: 'Hosplitalizations',
                right: data.hosplitalizations,
            },
            {
                left: '05',
                middle: 'ICU',
                right: data.icu,
            },
            {
                left: 'ITEM #',
                middle: 'Vaccine Coverage',
                right: '%',
            }, // head
            {
                left: 'SC',
                middle: 'Vaccine Dose 1',
                right: data.vc1,
            },
            {
                left: 'BT',
                middle: 'Vaccine Dose 2',
                right: data.vc2,
            },
            {
                left: 'C2',
                middle: 'Vaccine Dose 3',
                right: data.vc3,
            },
            {
                left: 'MR',
                middle: 'Vaccine Dose 4',
                right: data.vc4,
            },
            {
                left: 'ITEM #',
                middle: 'Vaccine Administration',
                right: 'Amount',
            }, //head
            {
                left: 'SC.1',
                middle: 'Vaccine Dose 1',
                right: data.va1,
            },
            {
                left: 'BT.3',
                middle: 'Vaccine Dose 2',
                right: data.va2,
            },
            {
                left: 'C2.B',
                middle: 'Vaccine Dose 3',
                right: data.va3,
            },
            {
                left: 'MR.A',
                middle: 'Vaccine Dose 4',
                right: data.va4,
            },
            {
                left: 'Summary',
                middle: 'Thank You',
                right: 'Total',
            }, //footer
            {
                left: 'Card Number: ',
                middle: '****** - 580 - 05',
                right: '2023',            
            }
        ]
    );
}