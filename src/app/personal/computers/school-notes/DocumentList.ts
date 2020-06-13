export class PdfDocument {
    number: string;
    title: string;
    path: string;
    cGrade?: boolean;
}

export class SchoolSubjectGrouping {
    name: string;
    documents: PdfDocument[];
}

export const basePath = '/assets/personal/school-notes/';

export const SchoolNotesList: SchoolSubjectGrouping[] = [
    {
        name: 'Sciences',
        documents: [
            { number: 'CH 1010',    title: 'Chemical Properties, Bonding, and Forces',                          path: 'ch1010.pdf' },
            { number: 'ECE 2010',   title: 'Introduction to Electrical and Computer Engineering',               path: 'ece2010.pdf' },
            { number: 'PH 1121',    title: 'Principles of Physics: Electricity and Magnetism',                  path: 'ph1121.pdf' },
            { number: 'PH 2250',    title: 'Atmospheric and Space Environments',                                path: 'ph2250.pdf' }
        ]
    },
    {
        name: 'Computer Science',
        documents: [
            { number: 'CS 210X',    title: 'Accelerated Object-Oriented Design Concepts',                       path: 'cs210x.pdf'},
            { number: 'CS 2223',    title: 'Algorithms',                                                        path: 'cs2223.pdf' },
            { number: 'CS 3013',    title: 'Operating Systems',                                                 path: 'cs3013.pdf' },
            { number: 'CS 3133',    title: 'Foundations of Computer Science',                                   path: 'cs3133.pdf' },
            { number: 'CS 3431',    title: 'Database Systems I',                                                path: 'cs3431.pdf' },
            { number: 'CS 3516',    title: 'Computer Networks',                                                 path: 'cs3516.pdf' },
            { number: 'CS 3733',    title: 'Software Engineering',                                              path: 'cs3733.pdf' },
            { number: 'CS 4515',    title: 'Computer Architecture',                                             path: 'cs4145.pdf' },
            { number: 'CS 4516',    title: 'Advanced Computer Networks',                                        path: 'cs4516.pdf' },
        ]
    },
    {
        name: 'Social Sciences',
        documents: [
            { number: 'GOV 2310',   title: 'Constitutional Law: Foundations of Government',                     path: 'gv2310.pdf' },
        ]
    },
    {
        name: 'Math',
        documents: [
            { number: 'MA 1023',    title: 'Calculus III',                                                      path: 'ma1023.pdf' },
            { number: 'MA 1024',    title: 'Calculus IV',                                                       path: 'ma1024.pdf' },
            { number: 'MA 2021',    title: 'Discrete Mathematics',                                              path: 'ma2021.pdf', cGrade: true},
            { number: 'MA 2051',    title: 'Ordinary Differential Equations',                                   path: 'ma2051.pdf' },
            { number: 'MA 2611',    title: 'Applied Statistics I',                                              path: 'ma2611.pdf', cGrade: true },
            { number: 'MA 2621',    title: 'Probability for Applications',                                      path: 'ma2621.pdf' },
        ]
    },
    {
        name: 'Projects & Sufficiency Requirements',
        documents: [
            { number: 'ID 2050',    title: 'Project Proposal',                                                  path: 'IQP_Proposal.pdf'},
            { number: 'IQP',        title: 'Investigating Eilat Transportation & Smart City Options',           path: 'IQP_report.pdf' },
            { number: 'MQP',        title: 'Evaluating and Mapping Internet Connectivity in the United States', path: 'MQP_Final_Report.pdf' },
            { number: 'HUA 3900',   title: 'Poems \'n\' Stuff, I Guess',                                        path: 'poems_n_stuff.pdf' }
        ]
    }
];
